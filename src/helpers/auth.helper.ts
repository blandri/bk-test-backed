/* eslint-disable no-var */
/* eslint-disable require-jsdoc */
import pkg from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv';

const { genSaltSync, hashSync, compareSync } = pkg

export function hashPassword(pass: string) {
  const salt = genSaltSync(10);

  return hashSync(pass, salt);
}

export function comparePassword(plainPassword: string, hashedPassword: string) {
  const compare = compareSync(plainPassword, hashedPassword);
  return compare;
}

export function generateToken(payload: object, expiresIn: string) {
  const secretKey = process.env.SECRET as string;
  var token = jwt.sign(payload, secretKey, { expiresIn });
  return token;
}

export function decodeToken(token: string) {
  const secretKey = process.env.SECRET as string;
  const verify = jwt.verify(token, secretKey);
  return verify;
}
