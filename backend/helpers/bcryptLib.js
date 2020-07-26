import bcrypt from 'bcrypt';


class Bcrypt {
  constructor(){
    this.generateHashedPassword = this.generateHashedPassword.bind(this);
    this.isPasswordRight = this.isPasswordRight.bind(this);
  }

  async generateHashedPassword(pass) {
    const salt = bcrypt.genSaltSync(10);
    return await bcrypt.hash(pass, salt);
  }
  
  async isPasswordRight(toCheck, hash) {
    const valid = await bcrypt.compare(toCheck, hash);
    return valid;
  }
}

export default new Bcrypt();

