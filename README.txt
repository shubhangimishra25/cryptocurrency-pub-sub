Introduction-
This git hub repository holds the code of an end to end dockerized application which is made by the following frameworks that react node.js and Mongo DB for the database In this application you are supposed to run the frontend web application and be able to add your favorite cryptos in the database via server

Components

Server-
The first folder broker contains the server-side code of the application and has a separate docker image
I have used volumes and bind-mount concept to persist the data on server-side on logs folder and it connects to my frontend application through port no 80 and it uses authentication before writing on mongo DB I have assigned this container to a network that is in the same network as my Mongo DB is henceforth there is no need to use the network you have to run the following command example if you want to create a container on a network
For the source code live update that is you don’t have to build the restart the container again and again I have added a dependency of nodemon which helps with that

Example
docker run --rm --name broker -p 80:80 --network cryptos-net smish12/distributed_phase_1_broker

Client-
The folder frontend contains the client-side code of my application and has a separate docker image it is based on react framework I have not assigned this container to a network because of the following reasons- For react, that's different, there, we just run NPM start which does only one thing, it starts a development server, which serves this basic react application. The react code, however, is not executed inside of the container. This always runs in the browser and that means that our code here where we reach out to cryptos broker does not run in the container where docker would be able to translate this, it runs in the browser and the browser has no idea what cryptos broker should be. And therefore using the container names here is simply not an option because this code here is not executed in a docker container, it's running in a browser. The only thing which is running in a docker container here, is the development server, serving this application, we need to ensure that on the localhost, these endpoints can be reached and that simply means, that we still need to publish port 80 on the broker application, so that that application is also still available on a local host because our front-end application needs that access. Because of the way react works, and because react applications have browser-side JavaScript code, and not JavaScript code that runs inside of the docker container.

NOTE
Now that's something specific to this React project set up here. You need to run it in interactive mode, by adding the -it options to the docker run command so that you don't just start the container and be done with it, but that you let the container know that you want to be able to also enter commands and interact with it. We're not going to do that, but the React project is set up the way that if it doesn't receive this input, this input trigger you could say, it immediately stops the server because no one's interested anyway. I guess that's kind of the logic there. So we need to add -it here.
And if I now run this,

Example
docker run --rm --name frontend -p 3000:3000 -it smish12/distributed_phase_1_frontend

Database-
Here there is no folder of database and there is no local DB installed we have just used the official mongo image available in the docker hub to recreate a container and have assigned it to the same network as the broker server so that both of them communicates

Example
docker run --rm --name mongo --network cryptos-net smish12/distributed_phase_1_database

Docker compose
Docker-compose helps to minimize the commands we have to run while maintaining our images and containers so for that you need to mention your docker-compose.yaml file and it has some special keys which docker understands and helps to resolve the containers accordingly

NOTE
You don't have to mention the network as docker-compose builds a default network and attaches our file ip accordingly

COMMAND
You just have to type in this command for initializing the app
docker-compose up


DEPLOYMENT

You have to clone the git repository and just write this command to run the application

docker-compose up	 
