import { Request, Response } from "express";
import { prisma } from "../db/prismaClient";

export class findPortifolioIdController {
  async handle(req: Request, res: Response) {
    const portifolio = await prisma.portifolio.findFirst();

    return res.json(portifolio);
  }
}