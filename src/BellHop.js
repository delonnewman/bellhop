// jshint esversion: 6
const BELLHOP_VERSION = '2020.10.24';

class BellHop {
    constructor(store) {
        if (store == null) throw new Error('Zoom store cannot be null');
        this._store = store;
    }

    freeze() {
        Object.freeze(this);
        return this;
    }

    buildAttendeeIndex() {
        var hop = this;

        this._searchIndex = lunr(function() {
            this.ref('userId');
            this.field('displayName');

            hop.attendees().forEach(function(attendee) {
                this.add(attendee);
            }, this);
        });

        return this;
    }

    store() {
        return this._store;
    }

    attendees() {
        return this._store.getState().attendeesList.attendeesList;
    }

    breakoutRooms() {
        return this._store.getState().breakoutRoom.roomList;
    }

    findAttendees(name) {
        return this._searchIndex.search(name).map((res) => this.findAttendeeByUserId(parseInt(res.ref)));
    }

    findAttendeeByUserId(id) {
        return this.attendees().find(({ userId }) => userId === id);
    }

    findBreakoutRoomByName(string) {
        return this.breakoutRooms().find(({ name }) => string === name);
    }

    isAttendeeInABreakoutRoom(user) {
        var { userGUID } = user;
        return this.breakoutRooms().flatMap(room => room.attendeeIdList).includes(userGUID);
    }

    roomAssignments(people) {
        return people.map(person => {
            var room    = this.findBreakoutRoomByName(person.room);
            var results = this._searchIndex.search(person.name);

            if (room == null || results.length === 0) {
                return null;
            }
            else if (results[0].score < 0.8) {
                return { type: 'ambiguous', person: person, results: results };
            }
            else {
                return {
                    type: 'assignment',
                    room: room,
                    person: person,
                    attendee: this.findAttendeeByUserId(parseInt(results[0].ref))
                };
            }
        });
    }

    assignToRooms(people) {
        this.roomAssignments(people).forEach(assignment => {
            if (assignment != null && assignment.type == 'assignment') {
                this.assignAttendeeToBreakoutRoom(assignment.attendee, assignment.room);
            }
            else if (assignment != null && assignment.type === 'ambiguous') {
                console.warn('Ambiguous result for assignment', assignment);
            }
        });

        return this;
    }

    assignAttendeeToBreakoutRoom(attendee, room) {
        var { userId } = attendee;
        var { boId }   = room;

        console.log(`Assigning ${userId} to ${boId}`);
        
        if (this.isAttendeeInABreakoutRoom(attendee)) {
            window.commandSocket.send(JSON.stringify(
                { "evt": 4181, "body": { "targetBID": boId, "targetID": userId }, "seq": 0 }
            ));
        } else {
            window.commandSocket.send(JSON.stringify(
                { "evt": 4179, "body": { "targetBID": boId, "targetID": userId }, "seq": 0 }
            ));
        }

        return this;
    }
}

BellHop.init = function() {
    return new BellHop(document.getElementById('root')._reactRootContainer._internalRoot.current.child.pendingProps.store)
            .buildAttendeeIndex()
            .freeze();
};