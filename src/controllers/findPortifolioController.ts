import { Request, Response } from "express";
import { prisma } from "../db/prismaClient";

export class findPortfolioController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const portfolio = await prisma.portifolio.findUnique({
      where: {
        id,
      },
      include: {
        project: true,
        language: true,
        certificate: true,
      },
    });

    return res.json(portfolio);
  }
}
