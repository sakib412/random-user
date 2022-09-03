import { v4 } from 'uuid'
import { isNumeric, randChoice } from "../utils"
import { readFile, writeFile } from "../utils/file"
import { errorResponse, successResponse } from "../utils/response"

export const getRandomUser = async (_req, res) => {
    try {
        const users = readFile()
        const randomUser = randChoice(users)
        return res.status(200).json(successResponse(randomUser))
    } catch (err) {
        return res.status(500).json(errorResponse(err.message));
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const { limit } = req.query;
        let users = readFile()

        if (limit && isNumeric(limit)) {
            console.log(limit)
            users = users.slice(0, Number(limit))
        }

        return res.status(200).json(successResponse(users))
    } catch (err) {
        return res.status(500).json(errorResponse(err.message));
    }
}

export const createUser = async (req, res) => {
    try {
        const { name, gender, contact, address, photoUrl } = req.body;
        let users = readFile()

        const index = users.findIndex((user) => user.name === name && user.contact === contact)
        if (index > -1) {
            return res.status(409).json(errorResponse('User with this name and contact already exist! Try with a different name or contact'))
        }
        const body = {
            id: v4(),
            name, gender, contact, address, photoUrl
        }
        users.push(body)
        writeFile(users)
        return res.status(201).json(successResponse(body))

    } catch (err) {
        return res.status(500).json(errorResponse(err.message));
    }
}

export const updateUser = async (req, res) => {
    try {
        const { id, name, gender, contact, address, photoUrl } = req.body;
        let users = readFile()

        const index = users.findIndex((user) => user.id === id)
        if (index < 0) {
            return res.status(404).json(errorResponse('User not found with this id'))
        }
        users[index] = {
            name, gender, contact, address, photoUrl
        }
        writeFile(users)
        return res.status(201).json(successResponse(users[index]))

    } catch (err) {
        return res.status(500).json(errorResponse(err.message));
    }

}