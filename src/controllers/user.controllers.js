import { errorResponse, successResponse } from "../utils/response"
// import Users from '../db/users.json';
import { readFile } from 'fs/promises';

export const getRandomUser = async (req, res) => {
    try {
        const randomUser = await readFile('../db/users.json', 'utf-8')

        return res.status(201).json(successResponse(randomUser))
    } catch (err) {
        return res.status(500).json(errorResponse(err.message));
    }
}
