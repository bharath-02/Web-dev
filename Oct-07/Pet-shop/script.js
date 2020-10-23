var Pet = /** @class */ (function () {
    function Pet() {
    }
    return Pet;
}());
// ------ Pet availability class -------
var PetsAvailability = /** @class */ (function () {
    function PetsAvailability(availablePets) {
        var _a;
        this.pets = new Array();
        (_a = this.pets).push.apply(_a, availablePets);
    }
    PetsAvailability.prototype.insert = function (pet) {
        this.pets.push(pet);
    };
    PetsAvailability.prototype.showPets = function () {
        console.log(this.pets);
    };
    PetsAvailability.prototype.checkRequests = function (requestArray) {
        for (var i = 0; i < requestArray.length; i++) {
            var available = void 0;
            for (var j = 0; j < this.pets.length; j++) {
                if (requestArray[i].type === this.pets[j].type) {
                    available = this.pets[j].availableCount;
                    break;
                }
            }
            if (!available) {
                console.log(requestArray[i].type + " is not available");
            }
            else {
                console.log(requestArray[i].type + " is available and the available count is " + available);
            }
        }
    };
    return PetsAvailability;
}());
var availablePets = new PetsAvailability([
    { type: "Dog", availableCount: 2, age: 2 },
    { type: "Cat", availableCount: 3, age: 2 },
    { type: "Rabbit", availableCount: 2, age: 3 },
    { type: "Love Birds", availableCount: 4, age: 2 },
]);
// ----- Pet Requests class ----------------
var PetRequests = /** @class */ (function () {
    function PetRequests(initialRequests) {
        var _a;
        this.requests = new Array();
        (_a = this.requests).push.apply(_a, initialRequests);
    }
    PetRequests.prototype.addRequest = function (newRequest) {
        this.requests.push(newRequest);
    };
    PetRequests.prototype.showRequests = function () {
        console.log(this.requests);
    };
    PetRequests.prototype.checkAvailability = function () {
        availablePets.checkRequests(this.requests);
    };
    return PetRequests;
}());
var request1 = new PetRequests([
    {
        type: "Duck",
        count: 3
    },
    {
        type: "Cat",
        count: 2
    },
    {
        type: "Mouse",
        count: 1
    },
    {
        type: 'Dog',
        count: 2
    },
]);
request1.addRequest({ type: "Fish", count: 2 });
request1.checkAvailability();
