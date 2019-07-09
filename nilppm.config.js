module.exports = {
  // sequelize配置参数请参考 http://docs.sequelizejs.com/manual/dialects.html
  sequelize: {
    database: '',
    username: '',
    password: '',
    options: {
      dialect: 'mysql',
      host: '',
      pool: {
        max: 10,
        min: 3
      }
    }
  },
  // 需要redis支持来缓存数据
  redis: '192.168.2.xxx:6379',
  // 缓存前缀名
  redis_prefix: 'nilppm:npm',
  // 本服务对外暴露绑定的域名，注意：需要带上http://
  registryHost: 'http://127.0.0.1:9000',
  // NPM允许上传的私有scope数组
  scopes: ['@html5', '@node'],
  // 当不指定用户体系的时候，我们可以直接指定邮箱后缀来生成用户
  defaultEmailSuffix: '@example.com',
  // 管理员账户足
  admins: ['anyone'],
  // 是否开启下载量统计
  // 开启的话，下载时候速度略微慢一些
  statistics: false,

  // 当我们使用自定义用户体系的时候，
  // 我们需要提供一个获取用户信息的接口
  // 这个不是必须，是可选参数函数。
  // async getUserInfo(account) {},
  
  // 当我们使用自定义用户体系的时候，
  // 我们需要提供一个验证用户是否为有效用户的接口
  // 这个不是必须，是可选参数函数。
  // async userLogin(account, password, currentdate){},

  // 这是一个特殊的函数，用来做NPM:Login行为的HOOK函数。
  // 比如说上报登录次数，收集登录环境参数等。
  // 这个函数不是必须，而是可选，一般没什么用处，可以省略。
  // async npmLogin(ctx, v) {},
}