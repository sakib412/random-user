import { Router } from "express";
import { getRandomUser } from "../controllers/user.controllers";

const userRouter = Router()
userRouter.get('/random', getRandomUser)

// userRouter.route('/:id')
//     .get(getOneProductController)
//     .delete(verifyJWT, isAdmin, deleteProductController)

export default userRouter