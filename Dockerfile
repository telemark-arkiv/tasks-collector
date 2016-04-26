###########################################################
#
# Dockerfile for tasks-collector
#
###########################################################

# Setting the base to nodejs 4.4.3
FROM mhart/alpine-node:4.4.3

# Maintainer
MAINTAINER Geir Gåsodden

#### Begin setup ####

# Installs git
RUN apk add --update --no-cache git

# Extra tools for native dependencies
RUN apk add --no-cache make gcc g++ python

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Env variables
ENV TASKS_COLLECTOR_SYSTEMNAME_TAG tasks-collector-systemname
ENV TASKS_COLLECTOR_SYSTEMNAME_URL http://system.no
ENV TASKS_COLLECTOR_SYSTEMNAME_HOST localhost
ENV TASKS_COLLECTOR_SYSTEMNAME_PORT 8000

# Startup
CMD ["node", "service.js", "--seneca-log=type:act"]