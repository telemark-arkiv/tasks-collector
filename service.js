'use strict'

var Seneca = require('seneca')
var Mesh = require('seneca-mesh')
var envs = process.env
var Collector = require('./lib/collector')

var options = {
  seneca: {
    tag: envs.TASKS_COLLECTOR_SYSTEMNAME_TAG || 'tasks-collector-systemname'
  },
  mesh: {
    auto: true
  },
  systemname: {
    url: envs.TASKS_COLLECTOR_SYSTEMNAME_URL || 'http://www.systemname.no'
  },
  isolated: {
    host: envs.TASKS_COLLECTOR_SYSTEMNAME_HOST || 'localhost',
    port: envs.TASKS_COLLECTOR_SYSTEMNAME_PORT || '8000'
  }
}
var Service = Seneca(options.seneca)

if (envs.TASKS_COLLECTOR_SYSTEMNAME_ISOLATED) {
  Service.listen(options.isolated)
}
else {
  Service.use(Mesh, options.mesh)
}

Service.use(Collector, options.systemname)
