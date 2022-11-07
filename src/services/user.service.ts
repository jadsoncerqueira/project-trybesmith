import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';

class UserService {
  public model: UserModel;
  
  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: User): Promise<void> {
    await this.model.create(user);
  }

  public async login(user: User): Promise<User[]> {
    const response = await this.model.login(user);
    return response;
  }
}

export default UserService;