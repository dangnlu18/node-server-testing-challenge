// Update with your config settings.

const sqlite = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations:{
    directory:'./migrations',
  },
  seeds:{
    directory:'./seeds'
  },
}

module.exports = {

  development: {
    ...sqlite,
    connection: {
      filename: './users.db3'
    }
  },

  test:{
    ...sqlite,
    connection:{
      filename: './test.db3',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
