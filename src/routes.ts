import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
//import { getCustomRepository } from "typeorm";

//import { SettingsRepository } from "./repositories/SettingsRepository";

const routes = Router();

/*
    Tipos de parametros
    Routes Params => parametros de rotas
    http://localhost:3333/settings/1

    Query Params => Flitros e buscas
    http://localhost:3333/settings/1?search=algumacoisa

    Body params => Passa objetos dentro da requisição{

    }
*/

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create)
  /*  const { chat, username } = request.body;
    
    const settingsRepository = getCustomRepository(SettingsRepository);

    const settings = settingsRepository.create({
        chat,
        username
    })

    await settingsRepository.save(settings);

    return response.json(settings);
})*/

export { routes };