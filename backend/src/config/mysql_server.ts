let mysqlServer: any = {};

if (process.env.NODE_ENV === 'dev') {
  mysqlServer = {
    host: 'localhost',
    username: 'root',
    password: '961204',
    database: 'notification',
    port: 3306,
    dialect: 'mysql',
    logging: true,
    force: true,
    timezone: '+08:00', //改为标准时区
    baseDir: 'modelsql', // change default dir model to modelsql
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
    },
    define: {
      timestamps: false, // don't add the timestamp attributes (updatedAt, createdAt)
    },
  };
} else if (process.env.NODE_ENV === 'test') {
  mysqlServer = {
    host: '47.92.94.8',
    username: 'root',
    password: '961204',
    database: 'notification',
    port: 3307,
    dialect: 'mysql',
    logging: true,
    force: true,
    timezone: '+08:00', //改为标准时区
    baseDir: 'modelsql', // change default dir model to modelsql
    dialectOptions: {
      dateStrings: true,
      typeCast: true,
    },
    define: {
      timestamps: false, // don't add the timestamp attributes (updatedAt, createdAt)
    },
  };
} else if (process.env.NODE_ENV === 'Sequelize') {
  mysqlServer = {
    host: '47.92.94.8',
    username: 'root',
    password: 'QWD@20210907',
    database: 'xc_bzy',
    port: 3307,
  };
}

export default mysqlServer
