import { Request, Response } from "express";
import { AuthenticateUseService } from "../services/AuthenticateUseService";

class AuthenticateUseController{
    async handle(req: Request, res: Response){
        const {code} = req.body;
        const service = new AuthenticateUseService();
        try {
            const result = await service.execute(code);
            return res.json(result)
        } catch (err) {
            return res.json(err.message)
        }
        

       
    }
}

export {AuthenticateUseController}