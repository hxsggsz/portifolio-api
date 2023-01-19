import { Router } from "express";
import { findPortfolioController } from "./controllers/findPortifolioController";
import { findPortifolioENController } from "./controllers/findPortifolioEnController";
import { findContactController } from "./controllers/findContactController";
import { findContactEnController } from "./controllers/findContactEnController";
import { findFirstPageController } from "./controllers/findFirstPageController";
import { findFirstPageEnController } from "./controllers/findFirstPageEnController";

const router = Router();

//ptbr
const portifolio = new findPortfolioController();
const contacts = new findContactController();
const firstPage = new findFirstPageController();

//en
const portifolioEN = new findPortifolioENController();
const contactsEN = new findContactEnController();
const firstPageEN = new findFirstPageEnController();

//ptbr
router.get("/portifolio", portifolio.handle);
router.get("/contact", contacts.handle);
router.get("/first-page", firstPage.handle);

//en
router.get("/portifolio-en", portifolioEN.handle);
router.get("/contact-en", contactsEN.handle);
router.get("/first-page-en", firstPageEN.handle);

export { router };
