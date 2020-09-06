# Proffy
Aplication made with react to facilitate the contact between students and teachers.

## Deploy with Docker and AWS
* The [Dockerfile](https://docs.docker.com/engine/reference/builder/) file execute the commands to build the images (the container that isn't running yet). 
* The [.dockerignore](https://docs.docker.com/engine/reference/builder/#dockerignore-file) avoids that some files go into the image, for example, node_modules and README.md.
* The [docker-compose.yml](https://docs.docker.com/compose/) file is "a tool for defining and running multi-container". The specification "ports" and "command" are important because when using Docker Compose the "EXPOSE" and "CMD" in the Dockerfile are not executed.
* The command `docker-compose up` starts the container. It's possible to run in detached mode, run the container in the background, adding an "-d" at the and of the code.
   
    * Run into the [issue #8688](https://github.com/facebook/create-react-app/issues/8688) and solved it accordingly to the [answer](https://github.com/facebook/create-react-app/issues/8688#issuecomment-602110747) and added `stdin_open: true` to my docker-compose.