General is designed to do one thing:
run applications on AWS.

**Note** This project is part of [binary-fusion](https://github.com/jacobgroundwater/binary-fusion)
and aspects from that project may leak into this one.

- general _may_ become the application container for BF
- node.js core is focused on performance,
and `libuv` makes coordinating multiple subprocesses extremely easy

## Overview

- upstart runs general
- general runs the application
- environment variables are loaded in via EC2 `user-data`

## Details

- an upstart script is provided under `share/upstart.conf`
    - this should be installed on your EC2 image at
    `/etc/init/general.conf`
    - the script _should_ auto-start
- the application _must_ be deployed at
`/home/ubuntu/bundle` and Procfile at
`/home/ubuntu/bundle/Procfile`

## Todo

- configure upstart script
