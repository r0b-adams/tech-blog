import { ErrorRequestHandler } from "express";

export const catchAll: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof Error) {
    res.status(500).json({ error: err.message });
  }
};
