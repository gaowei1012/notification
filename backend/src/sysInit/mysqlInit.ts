import { mysqlServer } from '@/config'
import { Sequelize } from 'sequelize'
import { init_db_model } from '@/models/tables'

let sequelize = new Sequelize(mysqlServer)

sequelize
  .authenticate()
  .then(() => {
    let connectMsg = '数据库连接成功' + mysqlServer.host + ':' + mysqlServer.port + '/' + mysqlServer.database
    // 初始化表
    init_db_model(sequelize)
    console.log('\x1b[32m%s\x1b[0m', connectMsg)
  })
  .catch((err) => {
    let connectError = '连接数据库 ' + mysqlServer.host + ':' + mysqlServer.port + '/' + mysqlServer.database + ' 出错:' + err.message;
    console.log('\x1b[31m%s\x1b[0m', connectError);
  })

export { sequelize }
