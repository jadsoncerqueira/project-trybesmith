import { Request, Response, NextFunction } from 'express';
import statusCodes from '../../statusCodes';

const ValidateProps = (req: Request, res: Response, next: NextFunction) => {
  const props = ['name', 'amount'];
  const val = props.every((el) => el in req.body);
  if (val) {
    next();
  } else if (!(props[0] in req.body)) {
    res.status(statusCodes.BAD_REQUEST).json({ message: '"name" is required' });
  } else {
    res.status(statusCodes.BAD_REQUEST).json({ message: '"amount" is required' });
  }
};

export default ValidateProps;