# Introduction

Chief is an **Application Container** for use with Amazon Web Service Auto-Scaling Groups.

# About

An _application container_ provides the following:

1. setup environment variables
2. start a set of processes based on a `Procfile`

## AWS Auto-Scaling Groups

A auto-scaling groups are great.
Chief helps make them even better.

### Installation

1. Install Chief — `npm install -g chief`
2. Export an Upstart Job — `sudo chief upstart -o /etc/init/chief.conf`
3. Install an **Application Bundle** to `/home/ubuntu/bundle/master`

Chief reads the environment configuration from the AWS [user-data property][1], and passes it to your application.

[1]: http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AESDG-chapter-instancedata.html

## Application Bundles

Chief can run any kind of application, not just Node.js.
Chief runs Procfile application; the root of your bundle must contain a `Profile` like the following:

    web: node server.js
    log: node logger.js

## Production

Chief is designed to work in production.
Each process in your Procfile is started independently, and will be restarted if it crashes.

- application logs are kept at `/var/log/chief/<proc-key>.log`
- start using upstart — `sudo start chief`
- stop using upstart — `sudo stop chief`

# Todos

- configure upstart script via command line
- support process scaling i.e. `web=2,log=1`
- add log aggregation

