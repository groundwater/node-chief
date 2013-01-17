General is designed to do one thing:
run applications on AWS.

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
