var users = []//Users Array

class Person {
     
    constructor(firstName, lastName, mobileNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobileNumber = mobileNumber;
    }

    fullName = (firstName, lastName) => console.log(firstName + " " + lastName);
}

createPerson = (firstName, lastName, mobileNumber) => {

    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                if(users.some(number => number.mobileNumber === mobileNumber)) {
                    //Condition will check is mobilenumber exist in user array or not
                    reject("Phone number already exist !!");
                }
                else {
                    //if Mobile number not exist in users array it will push data to array
                    var Person = {firstName: firstName, lastName: lastName, mobileNumber: mobileNumber};
                    users.push(Person);
                    resolve(fullName(firstName, lastName));
                }
            },
            2500 //Wait 2.5sec
        );
    })
}

var main = () => {

    const obj1 = new Person("Bhavesh", "Sahani", 123456789);
    const obj2 = new Person("Akash", "Sahani", 111111);
    const obj3 = new Person("Rishabh", "Tiwari", 123456789);
    const obj4 = new Person("Lovelesh", "Gupta", 78787878);
    const obj5 = new Person("Vikas", "Gupta", 987654312);
    const obj6 = new Person("Bhavesh", "Yadav", 23456461);
    const obj7 = new Person("Siddhesh", "More", 987654312);
    const obj8 = new Person("John", "Doe", 123456789);
    const obj9 = new Person("Arvind", "Kumar", 123321123);
    const obj10 = new Person("Unknown", "Person", 123321123);
    //Promise chaining

    createPerson(obj1.firstName, obj1.lastName, obj1.mobileNumber) //1st
    .then(() => createPerson(obj2.firstName, obj2.lastName, obj2.mobileNumber)) //2nd
    .catch((error) => console.log(error))

    .then(() => createPerson(obj3.firstName, obj3.lastName, obj3.mobileNumber)) //3rd
    .catch((error) => console.log(error))

    .then(() => createPerson(obj4.firstName, obj4.lastName, obj4.mobileNumber)) //4th
    .catch((error) => console.log(error))

    .then(() => createPerson(obj5.firstName, obj5.lastName, obj5.mobileNumber)) //5th
    .catch((error) => console.log(error))

    .then(() => createPerson(obj6.firstName, obj6.lastName, obj6.mobileNumber)) //6th
    .catch((error) => console.log(error))

    .then(() => createPerson(obj7.firstName, obj7.lastName, obj7.mobileNumber)) //7th
    .catch((error) => console.log(error))

    .then(() => createPerson(obj8.firstName, obj8.lastName, obj8.mobileNumber)) //8th
    .catch((error) => console.log(error))

    .then(() => createPerson(obj9.firstName, obj9.lastName, obj9.mobileNumber)) //9th
    .catch((error) => console.log(error))
    
    .then(() => createPerson(obj10.firstName, obj10.lastName, obj10.mobileNumber)) //10th
    .catch((error) => console.log(error));
}

main();



