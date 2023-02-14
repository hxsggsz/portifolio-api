import { Router } from "express";
import { findPortfolioController } from "./controllers/findPortifolioController";
import { findPortifolioENController } from "./controllers/findPortifolioEnController";

const router = Router();

//ptbr
const portifolio = new findPortfolioController();

//en
const portifolioEN = new findPortifolioENController();

//ptbr
router.get("/portifolio", portifolio.handle);

//en
router.get("/portifolio-en", portifolioEN.handle);

export { router };
