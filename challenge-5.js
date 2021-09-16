var users = [] //Users Array

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
            2000
        );
    })
}


var main = async () => {

    //1st 
    try {
        await createPerson("Bhavesh", "Sahani", 123456789);
    }
    catch(e) {
        console.log(e);
    }

    //2nd
    try {
        await createPerson("Akash", "Sahani", 123456);
    }
    catch(e) {
        console.log(e);
    }
    //3rd

    try {
        await createPerson("Rishabh", "Tiwari", 123456789);
    }
    catch(e) {
        console.log(e);
    }

    //4th
    try {
        await createPerson("Lovelesh", "Gupta", 78787878);
    }
    catch(e) {
        console.log(e);
    }

    //5th
    try {
        await createPerson("Vikas", "Gupta", 987654312);
    }
    catch(e) {
        console.log(e);
    }

    //6th
    try {
        await createPerson("Bhavesh", "Yadav", 23456461);
    }
    catch(e) {
        console.log(e);
    }

    //7th
    try {
        await createPerson("Siddhesh", "More", 987654312);
    }
    catch(e) {
        console.log(e);
    }

    //8th
    try {
        await createPerson("John", "Doe", 123456789);
    }
    catch(e) {
        console.log(e);
    }

    //9th
    try {
        await createPerson("Arvind", "Kumar", 123321123);
    }
    catch(e) {
        console.log(e);
    }

    //10th
    try {
        await createPerson("Unknown", "Person", 123321123);
    }
    catch(e) {
        console.log(e);
    }
}

main();