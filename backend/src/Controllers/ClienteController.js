import knex from '../../db/knex';

class Conta{

	async index(req, res){
		const dados = await knex.select("*").table("cliente");
		return res.json({dados});
	}
/*
  async indexOne(req, res){
		try{			
			const id = parseInt(req.params.index);
			const dados = await database.select("*").where({"id_pagamento": id}).table("tipo_pagamento");
			let idx = dados[0].id_pagamento;
			let pag = dados[0].pagamento
			let vencimento = dados[0].vencimento
			let melhor_dia_compra = dados[0].melhor_dia_compra
		
			return res.json({
				"id_pagamento":idx,
				"pagamento":pag,
				"vencimento":vencimento,
				"melhor_dia_compra":melhor_dia_compra
			});

		}catch(err){
			res.status(400).json({msg: "Erro ao Procurar registro"})
		}
	}

	async store(req, res){
		var { data_compra, descricao, parcelas, valor, id_pagamento } = req.body;
		await database.insert(req.body).into("conta");
		return res.json({ok: "Dados inseridos com sucesso"});
	}

	async update(req, res){
		try{
			const id = parseInt(req.params.index);
			const {data_compra, descricao, parcelas, valor, id_pagamento} = req.body;
			await database.where({"id_conta": id}).update(req.body).table("conta");
			res.json({msg: "Item atualizado com sucesso"});
		}catch(err){
			res.status(400).json({msg: "Erro ao atualizar registro "})
		}
	}

	async destroy(req, res){
		try{
			const id = parseInt(req.params.index);
			await database.where({"id_conta": id}).delete().table("conta")
			res.json({msg: "Item deletado com sucesso"});	
		}catch(err){
			res.status(400).json({msg: "Erro ao deletar registro "})
		}
	}*/

}


export default new Conta();