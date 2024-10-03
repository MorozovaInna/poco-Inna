const john = {
name: "John",
age: 38,
eyeColor: "green",
isMarried: false,
greet: greetFunc,
}; 

function greetFunc() {
    console.log("Hello, dear " + this.name + ".")
}

john.greet();

console.log(john.name.length);

let book = {
    title: "For whom the bell tolls",
    author: "Ernest Hemingway",
    year: 1940,
};
console.log(book.title + " by " + book.author + ".");

const jan = {
name: "Jan",
age: 40,
eyeColor: "blue",
isMarried: true,
greet: function greetFunc() {
    console.log("Hello, dear " + this.name + ".");
    }
}; 

jan.greet();

const person = {
    firstName: "Inna",
    lastName: "Morozova",
    fullName: giveFullName,
};

function giveFullName() {
    return person.firstName + " " + person.lastName;
}

console.log(person.fullName());

const student = {
    name: "Inna",
    age: 32,
    courses: [
    {
      courseName: "Math",
      grade: "A"
    },
    {
      courseName: "Biology",
      grade: "B"
    },
    {
      courseName: "History",
      grade: "C"
    }
    ],
    courseGrades: grades,
}

function grades() {
    console.log(student.name);
    for (let i = 0; i < student.courses.length; i++) {
        console.log("Grade " + student.courses[i].grade);
    }
}

student.courseGrades();