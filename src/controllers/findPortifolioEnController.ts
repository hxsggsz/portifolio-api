import { Request, Response } from "express";
import { prisma } from "../db/prismaClient";

export class findPortifolioENController {
  async handle(req: Request, res: Response) {
    const portifolio = await prisma.portifolio.findUnique({
      where: {
        id: "d6537d61-3c8a-4528-8b3c-899b4f908f15",
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

    return res.json(portifolio);
  }
}
