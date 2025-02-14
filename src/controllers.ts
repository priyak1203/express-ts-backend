import db from '../db/prisma';
import { Request, Response } from 'express';

export const register = (req: Request, res: Response) => {
  console.log(req.body);
  res.send('Register Controller - Teacher Register');
};

export const login = (req: Request, res: Response) => {
  console.log(req.body);
  res.send('Login Controller - Teacher Login');
};

// Prisma CRUD Operations
export const createTestProfile = async (req: Request, res: Response) => {
  console.log(req.body);
  const test = await db.testProfile.create({
    data: {
      name: req.body.name,
    },
  });

  res.json({ user: test });
};

export const getAllProfiles = async (req: Request, res: Response) => {
  const profiles = await db.testProfile.findMany();
  res.json({ users: profiles });
};
