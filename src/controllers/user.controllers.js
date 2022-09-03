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
        name && (users[index].name = name)
        gender && (users[index].gender = gender)
        contact && (users[index].contact = contact)
        address && (users[index].address = address)
        photoUrl && (users[index].photoUrl = photoUrl)

        writeFile(users)
        return res.status(201).json(successResponse(users[index]))

    } catch (err) {
        return res.status(500).json(errorResponse(err.message));
    }

}

export const bulkUpdate = async (req, res) => {
    try {
        const { users } = req.body;
        if (!Array.isArray(users)) {
            return res.status(400).json(errorResponse("Please pass an array of users!"));
        }
        let usersData = readFile()
        const newData = []

        users.forEach(user => {
            const { id, name, gender, contact, address, photoUrl } = user;
            const i = usersData.findIndex(u => u.id == id)
            if (i > -1) {
                name && (usersData[i].name = name)
                gender && (usersData[i].gender = gender)
                contact && (usersData[i].contact = contact)
                address && (usersData[i].address = address)
                photoUrl && (usersData[i].photoUrl = photoUrl)
                newData.push(usersData[i])
            }
        })

        writeFile(usersData)
        return res.status(200).json(successResponse(newData));

    } catch (err) {
        return res.status(500).json(errorResponse(err.message))
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.body;
        let users = readFile();
        const index = users.findIndex((user) => user.id === id)
        if (index < 0) {
            return res.status(404).json(errorResponse('User not found with this id'))
        }
        users.splice(index, 1);
        writeFile(users);
        return res.status(204).json(successResponse({ message: `User deleted. Id: ${id}.` }))

    } catch (err) {
        return res.status(500).json(errorResponse(err.message));
    }
}