class user{
    constructor(username)
    {
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }
    addCourses(){
        console.log(`new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@gmail.com", 123)
chai.addCourses()

const shubham = new user("shubham")
// shubham.addCourses()
shubham.logMe()
chai.logMe()
console.log(chai instanceof Teacher);