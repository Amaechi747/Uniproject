import express from 'express';
import { addAProperty, getPropertyController } from "../controllers/property.controller"

const router = express.Router();

router.get('/', getPropertyController.getProperties);
router.get('/:propertyId', getPropertyController.getProperty);

export default router;