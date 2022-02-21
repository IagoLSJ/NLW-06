import axios from "axios";
import "dotenv/config"
import {Router} from "express";
import { AuthenticateUseController } from "./controller/AuthenticateUseController";
import { CreateMessageController } from "./controller/CreateMessageController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";
import { GetLast3MessagesController } from "./controller/GetLast3MessagesController";
import {ProfileUserController} from "./controller/ProfileUserController"
const router = Router();

router.get('/github', (req,res)=>{
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENTE_ID}`)
})

router.get('/signin/callback', (req,res)=>{
    const {code} = req.query;
    return res.json(code);
})

router.post("/authenticate", new AuthenticateUseController().handle);

router.post("/messages", ensureAuthenticated, new CreateMessageController().handle);

router.get("/messages/last3", new GetLast3MessagesController().handle);

router.get("/profile", ensureAuthenticated, new ProfileUserController().handle);

export {router}