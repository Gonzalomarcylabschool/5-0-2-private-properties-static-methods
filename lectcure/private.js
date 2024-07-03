/* 
* 
* This is good but it could be better. Let's add
* Lets see what happens if we try to access the password property.
* 
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
// change the password to '1212' by accessing the password property directly
// validate the password again
// what do you think will happen?

/*code here */

/* end code */
// what did happen?

// is this the intended behavior?

// what can we do to prevent this? Class discussion