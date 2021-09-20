let users = []//Users Array

class Person {
     
    constructor(firstName, lastName, mobileNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobileNumber = mobileNumber;
    }

    fullName = (firstName, lastName) => `${firstName} ${lastName}`;
}

createPerson = (firstName, lastName, mobileNumber) => {

    return new Promise((resolve, reject) => {
        setTimeout(
            () => {
                if(users.some(number => number.mobileNumber === mobileNumber)) {
                    //Condition will check is mobilenumber exist in user array or not
                    reject(`${mobileNumber} already exist`);
                }
                else {
                    //if Mobile number not exist in users array it will push data to array
                    const obj = new Person(firstName, lastName, mobileNumber)
                    users.push(obj);
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
    .then((result) => console.log(result)) 
    .catch((error) => console.log(error))

    createPerson("Akash", "Sahani", 111111) //2nd
    .then((result) => console.log(result))
    .catch((error) => console.log(error))

    createPerson("Rishabh", "Tiwari", 123456789) //3rd
    .then((result) => console.log(result))
    .catch((error) => console.log(error))

    createPerson("Lovelesh", "Gupta", 78787878) //4th
    .then((result) => console.log(result))
    .catch((error) => console.log(error))

    createPerson("Vikas", "Gupta", 987654312) //5th
    .then((result) => console.log(result))
    .catch((error) => console.log(error))

    createPerson("Bhavesh", "Yadav", 23456461) //6th
    .then((result) => console.log(result))
    .catch((error) => console.log(error))

    createPerson("Siddhesh", "More", 987654312) //7th
    .then((result) => console.log(result))
    .catch((error) => console.log(error))

    createPerson("John", "Doe", 123456789) //8th
    .then((result) => console.log(result))
    .catch((error) => console.log(error))

    createPerson("Arvind", "Kumar", 123321123) //9th
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
    
    createPerson("Unknown", "Person", 123321123) //10th
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
}

main();