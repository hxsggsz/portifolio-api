import { Request, Response } from "express";
import { prisma } from "../db/prismaClient";

export class findContactEnController {
  async handle(req: Request, res: Response) {
    const contact = await prisma.contact.findFirst({
      where: {
        translation: "en",
      },
      include: {
        social: true,
      },
    });

    return res.json(contact);
  }
}
