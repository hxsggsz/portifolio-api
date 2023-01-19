import { Request, Response } from "express";
import { prisma } from "../db/prismaClient";

export class findFirstPageEnController {
  async handle(req: Request, res: Response) {
    const partOne = await prisma.firstPage.findUnique({
      where: {
        id: "e4a14d5e-19bd-4551-946b-bfda1c257a0f",
      },
    });
    const partTwo = await prisma.firstPage.findUnique({
      where: {
        id: "dfbe2ade-1c3d-4d38-8239-c45f0f9275c3",
      },
    });
    const partThree = await prisma.firstPage.findUnique({
      where: {
        id: "974a39c8-c907-4e7d-8903-5dee3e1b65b8",
      },
    });

    const firstPage = {
      partOne,
      partTwo,
      partThree,
    };
    return res.json(firstPage);
  }
}
