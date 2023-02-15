import express, { Request, Response } from "express";
import { Movie, MovieStore } from "../models/movies";

const store = new MovieStore();

const index = async (req: Request, res: Response) => {
  try {
    const movies = await store.index();
    res.status(200).json(movies);
  } catch (err) {
    res.status(404).json(err);
  }
};
const show = async (req: Request, res: Response) => {
  try {
    const movie = await store.show(parseInt(req.params.id));
    res.status(200).json(movie);
  } catch (err) {
    res.status(404).json(err);
  }
};
const create = async (req: Request, res: Response) => {
  try {
    const movie = await store.create({
      name: req.body.name,
      release_date: req.body.release_date,
    });
    res.status(200).json(movie);
  } catch (err) {
    res.status(404).json(err);
  }
};
const update = async (req: Request, res: Response) => {
  try {
    const movie = await store.update({
      name: req.body.name,
      release_date: req.body.release_date,
      id: parseInt(req.params.id),
    });
    res.status(200).json(movie);
  } catch (err) {
    res.status(404).json(err);
  }
};
const destroy = async (req: Request, res: Response) => {
  try {
    const movie = await store.delete(req.params.id);
    res.status(200).json(movie);
  } catch (err) {
    res.status(404).json(err);
  }
};

const movie_routes = (app: express.Application) => {
  app.get("/movies", index);
  app.get("/movies/:id", show);
  app.post("/movies", create);
  app.put("/movies/:id", update);
  app.delete("/movies/:id", destroy);
};
export default movie_routes;
