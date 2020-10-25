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

    buildSearchIndex(people) {
        var self = this;

        this._searchIndex = people.flatMap(person => person.names.map(name => {
            return {
                room: person.room,
                name: new RegExp(name, 'i')
            };
        }));

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

    findAttendeeBreakoutRoom(attendee) {
        var results = this._searchIndex
                          .filter(match => attendee.displayName.match(match.name))
                          .map(name => name.room);

        return new Set(results);
    }

    roomAssignments() {
        return this.attendees().map(attendee => {
            var results = this.findAttendeeBreakoutRoom(attendee);

            if (results.size === 0) {
                return { type: 'indeterminate', attendee: attendee, results };
            }
            else if (results.size > 1) {
                return { type: 'ambiguous', attendee: attendee, results };
            }
            else {
                var room = this.findBreakoutRoomByName(results.values().next().value);

                return {
                    type: 'assignment',
                    room,
                    attendee
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