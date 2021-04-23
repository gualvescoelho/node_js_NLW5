import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";


const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username",settingsController.findByUsername);
routes.put("/settings/:username",settingsController.update);

routes.post("/users",usersController.create);

routes.post("/messages",messagesController.create);
routes.get("/messages/:id",messagesController.showByUser)

export { routes };


//import { getCustomRepository } from "typeorm";

//import { SettingsRepository } from "./repositories/SettingsRepository";

/*
    Tipos de parametros
    Routes Params => parametros de rotas
    http://localhost:3333/settings/1

    Query Params => Flitros e buscas
    http://localhost:3333/settings/1?search=algumacoisa

    Body params => Passa objetos dentro da requisição{

    }
*/

//const settingsController = new SettingsController();

//routes.post("/settings", settingsController.create)
  /*  const { chat, username } = request.body;
    
    const settingsRepository = getCustomRepository(SettingsRepository);

    const settings = settingsRepository.create({
        chat,
        username
    })

    await settingsRepository.save(settings);

    return response.json(settings);
})*/

//export { routes };