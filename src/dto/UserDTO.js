
export class UserDTO {
    constructor(user) {
      this._id = user._id;
      this.firstName = user.firstName;
      this.lastName = user.lastName;
      this.email = user.email;
      this.role = user.role
      // Excluimos intencionalmente campos sensibles como `password`
    }
  
    static fromUser(user) {
      return new UserDTO(user);
    }
  
    static fromUsers(users) {
      return users.map(user => new UserDTO(user));
    }
  }
  

  