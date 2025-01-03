import express from 'express';
import * as companyController from '../controllers/companyController';

const router = express.Router();

router.get('/companies', companyController.getAllCompanies)
router.get('/companies/:id', companyController.getCompanyById);

export default router;