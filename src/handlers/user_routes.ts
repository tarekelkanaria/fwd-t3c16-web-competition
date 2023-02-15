import express, { Request, Response } from 'express';
import { StreamUser, User } from '../models/users';


const store = new StreamUser();
const GetAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await store.index();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

const ShowUserByID = async (req: Request, res: Response) => {
    try {
        const user = await store.show(parseInt(req.params.id));
        user ? res.json(user): res.status(404).json({ message: 'User not found' });
    } catch (error) {
        res.status(500).json({ message: error });
    }
};

const CreateNewUser = async (req: Request, res: Response) => {
  try {
    const user: User = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    };
    const newUser = await store.create(user);
    res.json({ newUser });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const DeleteUser = async (req: Request, res: Response) => { 
    try {
        const user = await store.delete(parseInt(req.params.id));
        user ? res.json(user) : res.status(404).json({ message: 'User not found' });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const users = (app: express.Application) => {
  app.get('/users', GetAllUsers);
  app.get('/user/:id', ShowUserByID);
  app.post('/user/newAcc', CreateNewUser);

};
export default users;