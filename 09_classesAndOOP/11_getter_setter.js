class user  {
    constructor(email, password)
    {
        this.email = email
        this.password = password
    }
    get email(){
        return `getting gfshu${this._email.toUpperCase()}@89.com`
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password.toUpperCase()}shubham`
    }
    set password(value){
        this._password = value
    }
}
const shubham = new user("s@gmail.com", "abc")
console.log(shubham.password);
console.log(shubham.email);