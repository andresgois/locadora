import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
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
		this.server.set('views', path.join(__dirname, 'views'));
		this.server.set('view engine','ejs');
		this.server.use(express.static(path.resolve(__dirname,'..','..','public')));		
		this.server.use(express.json());
		this.server.use(bodyParser.urlencoded({extended: false}))
		this.server.use(bodyParser.json());		
	}

	routes(){
		this.server.use(Cliente);
	}

}


export default new App().server;