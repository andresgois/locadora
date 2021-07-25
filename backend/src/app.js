import express from 'express';
//import cors from "cors";
import { Cliente } from './Routes';


class App{

	constructor(){
		this.server = express();

		this.middleware();
		this.routes();
	}

	middleware(){
		//this.server.use(cors());
		this.server.use(express.json());
	}

	routes(){
		this.server.use(Cliente);
	}

}


export default new App().server;