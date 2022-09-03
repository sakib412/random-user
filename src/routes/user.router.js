import { Router } from "express";
import { bulkUpdate, createUser, deleteUser, getAllUsers, getRandomUser, updateUser } from "../controllers/user.controllers";

const userRouter = Router()
userRouter.get('/random', getRandomUser)
userRouter.get('/all', getAllUsers)
userRouter.post('/save', createUser)
userRouter.patch('/update', updateUser)
userRouter.patch('/bulk-update', bulkUpdate)
userRouter.delete('/delete', deleteUser)


export default userRouter