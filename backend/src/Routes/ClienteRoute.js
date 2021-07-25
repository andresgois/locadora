import { Router } 		from "express";

import ClienteController 	from '../Controllers/ClienteController';

const routes = new Router();


routes.get("/cliente",  ClienteController.index);
//routes.get("/cliente/:index",  ClienteController.indexOne);
//routes.post("/cliente",  ClienteController.store);
//routes.put("/cliente/:index",  ClienteController.update);
//routes.delete("/cliente/:index",  ClienteController.destroy);


export default routes;