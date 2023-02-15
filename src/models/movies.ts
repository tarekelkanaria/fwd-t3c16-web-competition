import client from "../database";

export type Movie = {
  id?: number | string;
  name: string;
  release_date: Date;
};

export class MovieStore {
  async index(): Promise<Movie[]> {
    const connection = await client.connect();
    try {
      const sql = "SELECT * FROM movies";
      const result = await connection.query(sql);
      return result.rows;
    } catch (err) {
      throw new Error(`can't get movies ${err}`);
    } finally {
      connection.release();
    }
  }
  async show(id: number): Promise<Movie> {
    const connection = await client.connect();
    try {
      const sql = "SELECT * FROM movies WHERE id = ($1)";
      const result = await connection.query(sql, [id]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`can't get movie ${id} `);
    } finally {
      connection.release();
    }
  }
  async create(movie: Movie): Promise<Movie> {
    const connection = await client.connect();
    try {
      const sql = "INSERT INTO movies(name, release_date) VALUES ($1, $2)";
      const result = await connection.query(sql, [
        movie.name,
        movie.release_date,
      ]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`can't create movie ${err}`);
    } finally {
      connection.release();
    }
  }
  async update(movie: Movie): Promise<Movie> {
    const connection = await client.connect();
    try {
      const sql =
        "UPDATE movies SET name = ($1), release_date = ($2) WHERE id = ($3)";
      const result = await connection.query(sql, [
        movie.name,
        movie.release_date,
        movie.id,
      ]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`can't update movie ${err}`);
    } finally {
      connection.release();
    }
  }
  async delete(id: string): Promise<Movie> {
    const connection = await client.connect();
    try {
      const sql = "DELETE FROM movies WHERE id=($1);";
      const result = await connection.query(sql, [id]);
      return result.rows[0];
    } catch (err) {
      throw new Error(`Can't remove movie ${id}. Error: ${err}`);
    } finally {
      connection.release();
    }
  }
}
