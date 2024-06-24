import knex from "knex";

const knexInstance = knex({
  client: "postgresql",
  connection: {
    database: "db_cars_orm",
    user: "postgres",
    password: "admin",
  },
});

export default knexInstance;