import { Pool } from 'pg';
import { Request, Response } from 'express';
import { Company } from '../models/companyModel';

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres2",
    password: "postgres",
    port: 5432,
})

// Function to handle errors
const handleError = (res: Response, error: Error) => {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
};

// GET all companies
export const getAllCompanies = async (req: Request, res: Response) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM companies');
        const companies: Company[] = result.rows;
        client.release();
        res.json(companies);
    } catch (error) {
        handleError(res, error as Error);
    }
};

// GET company by ID
export const getCompanyById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM companies WHERE id = $1', [id]);
        const company: Company = result.rows[0];
        client.release();
        if (company) {
            res.json(company);
        } else {
            res.status(404).json({ error: 'Company not found' });
        }
    } catch (error) {
        handleError(res, error as Error);
    }
};