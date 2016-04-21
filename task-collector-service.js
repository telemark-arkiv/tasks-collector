var Seneca = require('seneca')
var Mesh = require('seneca-mesh')
var envs = process.env

var options = {
  seneca: {
    tag: envs.TASKS_COLLECTOR_TAG || 'tasks-collector'
  },
  mesh: {
    auto: true
  },
  isolated: {
    host: envs.TASKS_COLLECTOR_HOST || 'localhost',
    port: envs.TASKS_COLLECTOR_PORT || '8000'
  }
}
var Service = Seneca(options.seneca)

if (envs.TASKS_COLLECTOR_COMPILIO_ISOLATED) {
  Service.listen(options.isolated)
}
else {
  Service.use(Mesh, options.mesh)
}

Service.act({info: 'services', type: 'tasks'}, function (error, msg) {
  console.log(msg)
})

/*
Service.act({cmd: 'collect-tasks', system: 'compilo', user: 'gasg'}, function (error, msg) {
  console.log(msg)
})
*/
