import client from '../database';

export type User = {
    id?: number;
    name: string;
    email: string;
    password: string;
};

export type UserList = {
    id?: number;
    category: string;
    MovieId: number;
    UserId: number;
}

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
    
    async show(id: number): Promise<User> {
        try {
            await client.connect();
            const result = await client.query('SELECT * FROM users WHERE id=($1)', [id]);
            return result.rows[0];
        } catch (error) {
            throw new Error(`could not find user with id ${id}, Error: ${error}`);
        }
        
    }
    async create(u: User): Promise<User> {
        try {
            await client.connect();
            const result = await client.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [u.name, u.email, u.password]);
            return result.rows[0];
        } catch (error) {
            throw new Error(`could not add user ${u.name}, Error: ${error}`);
        }
    }
    async delete(id: number): Promise<User> {
        try {
            await client.connect();
            const result = await client.query('DELETE FROM users WHERE id=($1)', [id]);
            return result.rows[0];
        } catch (error) {
            throw new Error(`could not delete user with id ${id}, Error: ${error}`);
        }
    }
    async addToList(u: UserList): Promise<UserList> {
        try {
            await client.connect();
            const result = await client.query('INSERT INTO userlist (category, MovieId, UserId) VALUES ($1, $2, $3) RETURNING *', [u.category, u.MovieId, u.UserId]);
            return result.rows[0];
        } catch (error) {
            throw new Error(`could not add movie to list, Error: ${error}`);
        }
    }

    async showList(id: number): Promise<UserList[]> {
        try {
            await client.connect();
            const result = await client.query('SELECT * FROM userlist WHERE UserId=($1)', [id]);
            return result ? result.rows : [];
        } catch (error) {
            throw new Error(`could not find user with id ${id}, Error: ${error}`);
        }
    }

    async deleteFromList(id: number): Promise<UserList> { 
        try {
            await client.connect();
            const result = await client.query('DELETE FROM userlist WHERE id=($1)', [id]);
            return result.rows[0];
        } catch (error) {
            throw new Error(`could not delete movie from list with id ${id}, Error: ${error}`);
        }
    }
}
