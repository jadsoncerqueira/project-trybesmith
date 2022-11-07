import { Request, Response } from 'express';
import statusCodes from '../../statusCodes';
import UserService from '../services/user.service';
import { createToken } from '../utils/jwt';

class UserController {
  constructor(private userService = new UserService()) {}

  public create = async (req: Request, res: Response) => {
    await this.userService.create(req.body);
    const token = createToken(req.body);
    res.status(statusCodes.CREATED).json({ token });
  };
}

export default UserController;