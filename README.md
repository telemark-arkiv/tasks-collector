# tasks-collector

[![Greenkeeper badge](https://badges.greenkeeper.io/telemark/tasks-collector.svg)](https://greenkeeper.io/)
Seed for our task collectors.

Each collector is supposed to collect a user's tasks from a given system.

## Naming conventions
Service tag ```tasks-collector-<systemname>```

## Inbound messages
This microservice listens for the following messages


- ```{cmd: 'collect-tasks', type: 'user'}```

## Outbound messages
This microservice emits the following messages

- ```{info: 'tasks', type:'user'}```

## Docker
Build the image

```
$ docker build -t tasks-collector-<systemname> .
```

Start

```
$ docker run -d --net host --name tasks-collector-<systemname> tasks-collector-<systemname>
```

From hub.docker.com

```
$ docker run -d --net host --name tasks-collector-<systemname> telemark/tasks-collector-<systemname>
```

Call the service

```
$ curl -d '{"cmd":"collect-tasks", "type": "user", "user":"gasg"}' -v http://192.168.99.100:8000/act
```