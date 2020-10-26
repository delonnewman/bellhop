// jshint esversion: 6

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

    latestAttendees() {
        ch = new Channel();

        var bh = this;
        bh._store.subscribe(function() {
            ch.send(bh.attendees());
        });

        return ch;
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

    assignmentFor(attendee) {
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
    }

    roomAssignments() {
        return this.latestAttendees()
                .flatten()
                .remove(this.isAttendeeInABreakoutRoom.bind(this))
                .map(this.assignmentFor.bind(this));
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
            .buildSearchIndex(people)
            .freeze();
};

//(function(){function alwaysValid(){return true}function Atom(val,options){var watchers={};var validator=options&&options.validator||alwaysValid;function transition(next){if(!validator(next)){var err=new Error(next+" failed validation");err.name="AssertionError";throw err}var prev=val;val=next;Object.keys(watchers).forEach(function(k){watchers[k].call(null,k,atom,prev,next)})}this.addWatch=function(key,fn){watchers[key]=fn;return this};this.removeWatch=function(key){delete watchers[key];return this};this.swap=function(fn){var args=[val].concat([].slice.call(arguments,1));transition(fn.apply(null,args));return this};this.reset=function(v){transition(v);return this};this.compareAndSet=function(oldVal,newVal){if(oldVal===val){this.reset(newVal);return true}return false};this.deref=function(){return val};this.toString=function(){return"Atom("+JSON.stringify(val)+")"}}function atom(val,options){return new Atom(val,options)}atom.deref=function(ref){return ref.deref()};atom.isAtom=function(val){return val instanceof Atom};if(typeof module!=="undefined"){module.exports=atom}else{window.atom=atom}}).call(this);

/*
bh = BellHop.init();
ch = new Channel();

bh._store.subscribe(function() {
    ch.send(groupBy(bh.attendees(), 'userId'));
});

function groupBy(array, prop) {
    var obj = {}, i, val;
    for (i = 0; i < array.length; i++) {
        val = array[i][prop];
        obj[val] = obj[val] || array[i];
    }
    return obj;
}

var lastList = atom(groupBy(bh.attendees(), 'userId'), { validator: Array.isArray });

ch.receive(function(list) {

});*/