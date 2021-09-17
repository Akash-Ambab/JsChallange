let users = []//Users Array

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
                    const obj = new Person(firstName, lastName, mobileNumber)
                    let PersonData = {firstName: obj.firstName, lastName: obj.lastName, mobileNumber: obj.mobileNumber};
                    users.push(PersonData);
                    resolve(obj.fullName(firstName, lastName));
                }
            },
            2500 //Wait 2.5sec
        );
    })
}

const main = () => {
    //Promise chaining

    createPerson("Bhavesh", "Sahani", 123456789) //1st
    .then(() => createPerson("Akash", "Sahani", 111111)) //2nd
    .catch((error) => console.log(error))

    .then(() => createPerson("Rishabh", "Tiwari", 123456789)) //3rd
    .catch((error) => console.log(error))

    .then(() => createPerson("Lovelesh", "Gupta", 78787878)) //4th
    .catch((error) => console.log(error))

    .then(() => createPerson("Vikas", "Gupta", 987654312)) //5th
    .catch((error) => console.log(error))

    .then(() => createPerson("Bhavesh", "Yadav", 23456461)) //6th
    .catch((error) => console.log(error))

    .then(() => createPerson("Siddhesh", "More", 987654312)) //7th
    .catch((error) => console.log(error))

    .then(() => createPerson("John", "Doe", 123456789)) //8th
    .catch((error) => console.log(error))

    .then(() => createPerson("Arvind", "Kumar", 123321123)) //9th
    .catch((error) => console.log(error))
    
    .then(() => createPerson("Unknown", "Person", 123321123)) //10th
    .catch((error) => console.log(error));
}

main();