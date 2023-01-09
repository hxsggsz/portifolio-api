import { Request, Response } from "express";
import { prisma } from "../db/prismaClient";

export class findFirstPageController {
  async handle(req: Request, res: Response) {
    const firstContent = await prisma.firstPage.findUnique({
      where: {
        id: "01f83e17-b279-44d5-818d-f3200791a629",
      },
    });

    return res.json(firstContent);
  }
}
