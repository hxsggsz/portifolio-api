import { Router } from "express";
import { findFirstPageController } from "./controllers/findFirstPageController";
import { findPortfolioController } from "./controllers/findPortifolioController";
import { findPortifolioIdController } from "./controllers/findPortifolioIdController";
import { findContactController } from "./controllers/findContactController";

const router = Router();

const firstPage = new findFirstPageController();
const portifolioId = new findPortifolioIdController();
const portifolio = new findPortfolioController();
const contacts = new findContactController();

router.get("/first-page", firstPage.handle);
router.get("/portifolio", portifolioId.handle);
router.get("/portifolio/:id", portifolio.handle);
router.get("/contact", contacts.handle);

export { router };
