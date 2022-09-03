import { Router } from "express";
import { createUser, getAllUsers, getRandomUser } from "../controllers/user.controllers";

const userRouter = Router()
userRouter.get('/random', getRandomUser)
userRouter.get('/all', getAllUsers)
userRouter.post('/save', createUser)


// userRouter.route('/:id')
//     .get(getOneProductController)
//     .delete(verifyJWT, isAdmin, deleteProductController)

export default userRouter