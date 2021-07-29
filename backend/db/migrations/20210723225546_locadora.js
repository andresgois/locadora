
exports.up = function(knex, Promise)  {
  return knex.schema.createTable('modelo', function(table) {
    table.increments('modelo_cod').primary();
    table.string('modelo_desc').notNullable();
  })
  .then(function() {
    return knex.schema.createTable('marca',function(table){
      table.increments('marca_cod').primary();
      table.string('marca_desc').notNullable();
    });
  })
  .then(function() {
    return knex.schema.createTable('cliente',function(table){
      table.increments('cliente_cod').primary();
      table.string('cliente_nome').notNullable();
      table.string('cliente_email').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  })
  .then(function() {
    return knex.schema.createTable('automovel',function(table){
      table.increments('auto_cod').primary();
      table.string('auto_nome').notNullable();

      table.integer('marca_cod',11).unsigned().references('marca_cod').inTable('marca');
      table.integer('modelo_cod',11).unsigned().references('modelo_cod').inTable('modelo');
    });
  })
  .then(function() {
    return knex.schema.createTable('locacao',function(table){
      table.increments('locacao_cod');
      table.string('locacao_km',20).notNullable();
      table.timestamp('dt_cadastro').defaultTo(knex.fn.now());

      table.integer('auto_cod',11).unsigned().references('auto_cod').inTable('automovel');
      table.integer('cliente_cod',11).unsigned().references('cliente_cod').inTable('cliente');
    });
  })
  .then(function() {
    return knex.schema.createTable('operador',function(table){
      table.increments('op_cod');
      table.string('op_nome').notNullable();
      table.string('op_email').notNullable();
      table.timestamp('dt_cadastro').defaultTo(knex.fn.now());
    });
  })
};

exports.down = function(knex, Promise)  {
  return knex.schema.dropTable('locacao')
                    .dropTable('automovel')
                    .dropTable('cliente')
                    .dropTable('marca')
                    .dropTable('modelo')
                    .dropTable('operador')
};
