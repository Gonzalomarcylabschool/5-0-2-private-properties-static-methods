/* 
* a practice that is used in many programming languages is to use a prefix to indicate that a property or method is private.
* but will this prevent someone from accessing the property?
* what do you think will happen if we try to access the password property when we add this prefix?
*/
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.password = null;
  }

  setPassword(newPassword) {
    this.password = newPassword;
  }

  validatePassword(passwordToCheck) {
    if (!this.password) {
      console.log('No password set.');
      return false;
    }
    if (passwordToCheck === this.password) {
      console.log('It matches!');
      return true;
    }
    console.log('Wrong password!');
    return false;
  }
}

const gonzalo = new User('gonzalo', 'gonzalo@mail.com');
gonzalo.validatePassword('1234'); // No password set.
gonzalo.setPassword('1234');
gonzalo.validatePassword('1234'); // It Matches!

// change the password again to '1212' by accessing the _password property directly
// validate the password again
// what do you think will happen?

/*code here */

/* end code */
// what did happen?

// is this the intended behavior?

// what can we do to prevent this? Class discussion
