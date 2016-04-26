'use strict'

var envs = process.env
var pkg = require('../package.json')

module.exports = function (options) {
  var seneca = this

  seneca.add('cmd:collect-tasks, type:user', getTasksFromCollector)

  return {
    name: envs.TASKS_COLLECTOR_<systemname>_TAG || 'tasks-collector-<systemname>'
  }
}

function getTasksFromCollector (args, callback) {
  var seneca = this
  var user = args.user
  var result = {
    system: pkg.name,
    user: user,
    data: [
      {
        systemid: 'collector',
        timestamp: new Date().getTime(),
        title: 'Viktig melding for alle',
        url: 'http://www.collector.no'
      }
    ]
  }

  seneca.act({info: 'tasks', type: 'user', data: result})

  callback(null, {ok: true})
}
