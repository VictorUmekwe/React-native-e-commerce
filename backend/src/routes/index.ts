import type { Request, Response } from "express";
import { Router } from "express";

const router = Router();

// Define routes here

router.get("/health", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ status: "OK", message: "API is running successfully" });
});

export default router;
