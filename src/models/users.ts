import client from '../database';
import { Movie } from './movies';

export type User = {
    id?: number;
    name: string;
    email: string;
    password: string;
};

export class StreamUser { 
    async index(): Promise<User[]> { 
        try {
            await client.connect();
            const result = await client.query('SELECT * FROM users');
            return result.rows;
        } catch (error) {
            throw new Error(`could not retrieve data from the database, Error:  ${error}`
            );
        }
    }
    
    async show(id:User): Promise<User>{
        try {
            await client.connect();
        const result = await client.query('SELECT * FROM users WHERE id=($1)', [id]);
        return result.rows[0];
        } catch (error) {
            throw new Error(`could not find user with id ${id}, Error: ${error}`);
        }
        
    }
    async create(u: User): Promise<User>{
        try {
            await client.connect();
            const result = await client.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [u.name, u.email, u.password]);
            return result.rows[0];
        } catch (error) {
            throw new Error(`could not add user ${u.name}, Error: ${error}`);
        }
    }
    async delete(id: User): Promise<User> { 
        try {
            await client.connect();
            const result = await client.query('DELETE FROM users WHERE id=($1)', [id]);
            return result.rows[0];
        } catch (error) {
            throw new Error(`could not delete user with id ${id}, Error: ${error}`);
        }
    }
}
