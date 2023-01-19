import { Request, Response } from "express";
import { prisma } from "../db/prismaClient";

export class findFirstPageController {
  async handle(req: Request, res: Response) {
    const partOne = await prisma.firstPage.findUnique({
      where: {
        id: "0faa9902-dd3f-45ab-b502-16875e86e198",
        
      },
    });
    const partTwo = await prisma.firstPage.findUnique({
      where: {
        id: "339186ed-7b81-49d5-85f8-90b123ad63a2",
      },
    });
    const partThree = await prisma.firstPage.findUnique({
      where: {
        id: "a628041b-f39b-4008-9cf3-afdcc852cbba",
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
