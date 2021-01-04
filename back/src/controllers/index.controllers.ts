import { Request, Response } from "express";
import { QueryResult } from "pg";

import { pool } from "../database";

export const getVideos = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const response: QueryResult = await pool.query("select * from videos");
    return res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json('server error');
  }
};

export const postVideo = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
        const { title, url } = req.body;
      const response: QueryResult = await pool.query("INSERT INTO videos (title, url) VALUES ($1, $2)", [title, url]);
      return res.status(200).json({
        message: 'User Added successfully',
      
       } );
    } catch (error) {
      console.log(error);
      return res.status(500).json('server error');
    }
  };

  export const deleteVideo = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
      const response: QueryResult = await pool.query("delete from videos where id = $1" , [id]);
      return res.status(200).json(`video ${id} deleted Successfully`);;
    } catch (error) {
      console.log(error);
      return res.status(500).json('server error');
    }
  };

  export const updateVideo = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
    const { title, url } = req.body;
      const response: QueryResult = await pool.query("update videos set title = $1 , url = $2 where id = $3", [title, url, id]);
      return res.status(200).json('updated');
    } catch (error) {
      console.log(error);
      return res.status(500).json('server error');
    }
  };

  export const getVideo = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
        const id = parseInt(req.params.id);
      const response: QueryResult = await pool.query('select * FROM videos WHERE id = $1', [id]);
      return res.status(200).json(response.rows);
    } catch (error) {
      console.log(error);
      return res.status(500).json('server error');
    }
  };
