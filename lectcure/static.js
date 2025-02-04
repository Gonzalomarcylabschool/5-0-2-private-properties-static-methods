class User {
  #password;  // Declare the private field here

  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.#password = null;
  }

  setPassword(newPassword) {
    this.#password = newPassword;
  }

  validatePassword(passwordToCheck) {
    if (!this.#password) {
      console.log('No password set.');
      return false;
    }
    if (passwordToCheck === this.#password) {
      console.log('It matches!');
      return true;
    }
    console.log('Wrong password!');
    return false;
  }
  //add static method here
}

const gonzalo = new User('gonzalo', 'gonzalo@mail.com');
gonzalo.validatePassword('1234'); // No password set.
gonzalo.setPassword('1234');
gonzalo.validatePassword('1234'); // It Matches!
