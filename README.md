# Node-RED work

## Initial Node-RED setup

* There are docker-compose file examples for both Node-RED and RabbitMQ.
* The docker images for both auto-select the correct architecture, so  it ran fine on my M1 MacBook Pro.
* The network settings from the example RabbitMQ docker-compose config are unneccesary and would prevent the two containers from communicating.
* The RabbitMQ Docker image supports setting the username/password to something non-default. I haven’t done this for the purposes of the demo but it looks straightforward, would need to update the config inside Node-RED though

## Adding the custom Node-RED AMQP plugin

* The plugin listed on the Node-RED website is quite old - last updated 3 years ago. 
* https://github.com/abreits/node-red-contrib-amqp
* https://www.npmjs.com/package/node-red-contrib-amqp
* The latest version of the package listed on npm is broken
    * The published version of 1.0.2 does not include the build JS files, so doesn’t work at all
    * The solution is to use version 1.0.1 
* In addition to this problem, the package has a transitive dependency through amqp-ts on a very old version of the amqplib package.
    * This package has a node engine requirement of “up to” node version 6.
    * It appears to work fine on modern versions of node, but it’s very out of date
    * The maintainer of the Node-RED plugin has indicated that the upgrade is a significant change, and subsequent forks of that project have no updated to the latest version successfully.
