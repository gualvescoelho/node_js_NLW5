import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsServices";

class SettingsController{
    async create(request, response){
        const { chat, username } = request.body;
    
        const settingsService = new SettingsService();

        try{ //verifica se o usuario ja nao é cadastrado 
         const settings = await settingsService.create({ chat, username });

         return response.json(settings);
        }catch(err)    {
            return response.status(400).json({
                message: err.message,
            });
        }
    }
}

export { SettingsController }