let users = [] //Users Array

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
                    reject(`Mobile number ${mobileNumber} already exist`);
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


const main = async () => {
    //1st 
    try {
        const result = await createPerson("Bhavesh", "Sahani", 123456789);
        console.log(result);

    }
    catch(e) {
        console.log(e);
    }

    //2nd
    try {
        const result = await createPerson("Akash", "Sahani", 111111);
        console.log(result);
    }
    catch(e) {
        console.log(e);
    }
    //3rd

    try {
        const result = await createPerson("Rishabh", "Tiwari", 123456789);
        console.log(result);
    }
    catch(e) {
        console.log(e);
    }

    //4th
    try {
        const result = await createPerson("Lovelesh", "Gupta", 78787878);
        console.log(result);
    }
    catch(e) {
        console.log(e);
    }

    //5th
    try {
        const result = await createPerson("Vikas", "Gupta", 987654312);
        console.log(result);
    }
    catch(e) {
        console.log(e);
    }

    //6th
    try {
        const result = await createPerson("Bhavesh", "Yadav", 23456461);
        console.log(result);
    }
    catch(e) {
        console.log(e);
    }

    //7th
    try {
        const result = await createPerson("Siddhesh", "More", 987654312);
        console.log(result);
    }
    catch(e) {
        console.log(e);
    }

    //8th
    try {
        const result = await createPerson("John", "Doe", 123456789);
        console.log(result);
    }
    catch(e) {
        console.log(e);
    }

    //9th
    try {
        const result = await createPerson("Arvind", "Kumar", 123321123);
        console.log(result);
    }
    catch(e) {
        console.log(e);
    }

    //10th
    try {
        const result = await createPerson("Unknown", "Person", 123321123);
        console.log(result);
    }
    catch(e) {
        console.log(e);
    }
}

main();