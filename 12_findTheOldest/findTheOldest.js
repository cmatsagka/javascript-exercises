const findTheOldest = function(people) {
    let age = 0;
    let oldest = age;
    let oldestPerson = "";

    for (let person in people){
        if (people[person].yearOfDeath === undefined){
            const d = new Date();
            people[person].yearOfDeath = d.getFullYear();
        }
        age = people[person].yearOfDeath - people[person].yearOfBirth;
        
        if (age > oldest){
            oldest = age;
            oldestPerson = people[person];
        }
    }
    return oldestPerson;       
};

// Do not edit below this line
module.exports = findTheOldest;
