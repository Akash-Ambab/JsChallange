var users = []; //Users Array

var fullName = (firstName, lastName) => console.log(firstName + " " + lastName);

var createPerson = (firstName, lastName, mobileNumber) => {

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

    //Promise chaining

    createPerson("Bhavesh", "Sahani", 123456789) //1st
    .then(() => createPerson("Akash", "Sahani", 123456)) //2nd
    .catch((result) => console.log(result))

    .then(() => createPerson("Rishabh", "Tiwari", 123456789)) //3rd
    .catch((result) => console.log(result))

    .then(() => createPerson("Lovelesh", "Gupta", 78787878)) //4th
    .catch((result) => console.log(result))

    .then(() => createPerson("Vikas", "Gupta", 987654312)) //5th
    .catch((result) => console.log(result))

    .then(() => createPerson("Bhavesh", "Yadav", 23456461)) //6th
    .catch((result) => console.log(result))

    .then(() => createPerson("Siddhesh", "More", 987654312)) //7th
    .catch((result) => console.log(result))

    .then(() => createPerson("John", "Doe", 123456789)) //8th
    .catch((result) => console.log(result))

    .then(() => createPerson("Arvind", "Kumar", 123321123)) //9th
    .catch((result) => console.log(result))
    
    .then(() => createPerson("Unknown", "Person", 123321123)) //10th
    .catch((result) => console.log(result));
}

main();

