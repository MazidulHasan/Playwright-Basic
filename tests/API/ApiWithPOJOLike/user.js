// user.js
class User {
    constructor(name, age, email) {
        this._name = name || null;
        this._age = age || null;
        this._email = email || null;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for name with validation
    set name(value) {
        if (typeof value !== 'string') {
            throw new Error('Name must be a string');
        }
        this._name = value;
    }

    // Getter for age
    get age() {
        return this._age;
    }

    // Setter for age with validation
    set age(value) {
        if (typeof value !== 'number') {
            throw new Error('Age must be a number');
        }
        this._age = value;
    }

    // Getter for email
    get email() {
        return this._email;
    }

    // Setter for email with validation
    set email(value) {
        if (!/^\S+@\S+\.\S+$/.test(value)) {
            throw new Error('Invalid email format');
        }
        this._email = value;
    }

    // Method to check if two users are equal
    isEqual(anotherUser) {
        return (
            this.name === anotherUser.name &&
            this.age === anotherUser.age &&
            this.email === anotherUser.email
        );
    }
}

module.exports = User;
