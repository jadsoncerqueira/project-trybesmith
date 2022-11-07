import dotenv from 'dotenv';
import jwt, { JwtPayload } from 'jsonwebtoken';
import User from '../interfaces/user.interface';

dotenv.config();

const secret = process.env.JWT_SECRET as string;

export const createToken = (pay: User): string => {
  const token = jwt.sign({ pay }, secret, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });

  return token;
};

export const validateToken = (token: string): User | string => {
  try {
    const { data } = jwt.verify(token, secret) as JwtPayload;
    return data;
  } catch (error) {
    const e = new Error('Expired or invalid token');
    e.name = 'Invalid Token';
    return e.message;
  }
};