import { Request, Response } from "express";
import { prisma } from "../db/prismaClient";

export class findPortifolioEnController {
  async handle(req: Request, res: Response) {
    const projetos = await prisma.projects.findMany({
      where: {
        translation: "ptbr",
      },
    });
    return res.json(projetos);
  }
}
