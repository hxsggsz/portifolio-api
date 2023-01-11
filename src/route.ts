import { Router } from "express";
import { findFirstPageController } from "./controllers/findFirstPageController";
import { findPortfolioController } from "./controllers/findPortifolioController";
import { findPortifolioENController } from "./controllers/findPortifolioEnController";
import { findContactController } from "./controllers/findContactController";
import { findContactEnController } from "./controllers/findContactEnController";

const router = Router();

//ptbr
const firstPage = new findFirstPageController();
const portifolio = new findPortfolioController();
const contacts = new findContactController();

//en
const portifolioEN = new findPortifolioENController();
const contactsEN = new findContactEnController();

//ptbr
router.get("/first-page", firstPage.handle);
router.get("/portifolio", portifolio.handle);
router.get("/contact", contacts.handle);

//en
router.get("/portifolio-en", portifolioEN.handle);
router.get("/contact-en", contactsEN.handle);

export { router };
