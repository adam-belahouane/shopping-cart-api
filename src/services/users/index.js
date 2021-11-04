import express from "express"
import userHandlers from "./handlers.js"

const usersRouter = express.Router()

usersRouter.route("/")
.get(userHandlers.getUsers)
.post(userHandlers.createNewUser)

usersRouter.route("/:id")
.get(userHandlers.getUserById)
.put(userHandlers.editUser)
.delete(userHandlers.deletetUserById)

export default usersRouter