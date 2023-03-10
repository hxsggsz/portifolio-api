import { Request, Response } from "express";
import { prisma } from "../db/prismaClient";

export class findPortfolioController {
  async handle(req: Request, res: Response) {
    const portfolio = await prisma.portifolio.findUnique({
      where: {
        id: "086643f9-d7d6-4982-8dcd-9806aec7db85",
      },
      include: {
        page: true,
        about: {
          orderBy: {
            createdAt: "asc",
          },
        },
        project: true,
        language: {
          orderBy: {
            createdAt: "asc",
          },
        },
        certificate: true,
      },
    });

    return res.json(portfolio);
  }
}
