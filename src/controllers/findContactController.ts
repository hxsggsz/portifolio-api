import { Request, Response } from "express";
import { prisma } from "../db/prismaClient";

export class findContactController {
  async handle(req: Request, res: Response) {
    const contact = await prisma.contact.findFirst({
      include: {
        social: true,
      },
    });

    return res.json(contact);
  }
}
