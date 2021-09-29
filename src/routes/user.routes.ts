import { Router } from "express";

import { CreateUserController } from "../modules/users/useCases/createUser/CreateUserController";
import { DeleteUserController } from "../modules/users/useCases/deleteUser/DeleteUserController";
import { ReadUserController } from "../modules/users/useCases/readUser/ReadUserController";
import { UpdateUserController } from "../modules/users/useCases/updateUser/UpdateUserController";

const userRoutes = Router();

const createUserController = new CreateUserController();
const readUserController = new ReadUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

userRoutes.post("/create", createUserController.handle);
userRoutes.get("/read/:id", readUserController.handle);
userRoutes.put("/update/:id", updateUserController.handle);
userRoutes.delete("/delete/:id", deleteUserController.handle);

export { userRoutes };
