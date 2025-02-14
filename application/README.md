# Application


## Prerequisite

- [gcloud](https://cloud.google.com/sdk/docs/install?hl=fr)
- [docker](https://docs.docker.com/engine/install/)

And that's it ! All the rest is containerised !

## Project Overview

>This section covers the development of different services. For each service, we discuss:
>- The reasons behind the technology choices
>- Their architecture
>- Potential challenges encountered

### Frontend

#### Reasons
The frontend was developed using the **Angular** framework with **TypeScript**. This choice was made because Arno was already familiar with this framework, and Nathan was interested in discovering it through this project. 

#### The architecture
Here is the simplified architecture of the frontend application:

```tree
.
├── angular.json
├── dist
│   └── [Compiled JS files sent to the browser]
├── dockerfile
├── node_modules
│   └── [Everything]
│   └── [A lot]
│   └── [Of]
│   └── [Packages]
│   └── […]
├── src
│   ├── app
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   ├── features
│   │   │   └── [UI components used in the main component]
│   │   └── shared
│   │   │   └── [Shared UI components]
│   ├── assets
│   │   └── [Images and SVG files used for display]
│   ├── environments
│   │   └── [Dev and prod environment variables]
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
└── [Some TypeScript configuration files]
```

#### Challenges encountered

One of the biggest challenges we faced in choosing Angular over a simple HTML/CSS/JS app was the **increased complexity and learning curve**. We took some time to set up the project and Arno had to teach Nathan on how the frameworks works.

### Backend

#### Reasons

The backend was written in **Python** using the **Flask** package to set up the API. Additional packages such as **pika** and **redis** were installed for communication with *RabbitMQ* services and the *Redis* database. Minor packages like **flask_cors** were also used to enable CORS methods for the API. We chose this technology because it's pretty easy to setup :)

#### The architecture
Here is the architecture of the backend application:

```tree
.
├── Dockerfile
├── Dockerfile.dev
├── __pycache__
│   └── app.cpython-311.pyc
├── pyproject.toml
└── src
    ├── app.py
    ├── __pycache__
    │   └── app.cpython-311.pyc
    ├── routes
    │   ├── __init__.py
    │   ├── process.py
    │   ├── __pycache__
    │   └── result.py
    └── utils
        ├── __init__.py
        ├── __pycache__
        ├── rabbitMQ.py
        └── redis.py
```
#### Challenges encountered
It took a little time and testing to get the communication between *Redis* and *RabbitMQ* but nothing too crazy.

### Consumer

#### Reasons
Like the backend, the consumer was written in **Python** for the same reasons (it's easy). The packages used are **pika** and **redis** for communication with *RabbitMQ* and the *Redis* database, respectively.

#### The architecture
Here is the (awesome) architecture of the consumer application:

```tree
.
├── app.py
├── Dockerfile
└── Dockerfile.dev
```
#### Challenges encountered
Just like for the Backend, we took some time to set the communications between the app and *Redis* and *RabbitMQ*.

### RabbitMQ

Setting up the *RabbitMQ* service was quick. We simply created a service using pre-existing *RabbitMQ* images.

### Redis

Similar to *RabbitMQ*, the *Redis* database was set up by adding a service in the `docker-compose.yaml` file using an existing image.

## Quick start

>So you don't want to read all our README, you meanie ~ 
>
><img src="https://media.tenor.com/GF3gAxfRPOsAAAAM/anime-girl-meh.gif" style="width:50%;">
>
>Well, that's okay~ You don't want to lose some precious time after all, uwu

To start our app localy in dev mode, you only need to run

```
docker compose up
```

You wanna start it in production mode locally ? Then use

```
docker compose -f docker-compose.prod.yaml up 
```

That's it ! You can now test our app locally

## Our AWESOME Makefile

As a developer, we want things to be version controlled, even to the commands we use to build and push.
To achieve that, we've been using a Makefile. It consists of 3 main commands :
- init : Allows you to login into gcloud and auto configuration for our project.
- build-images : Will build each image and tag them appropriately
- push-images : Will push each image on the configured project in `europe-west1-docker.pkg.dev`

Also we've added a trivy image scan analysis but we did not use it intensively.

## Pushing to repository

Using our awesome makefile make it easy to push our images to the repo.

If you already did the init step, you only have to do the following

```
make build-images
make push-images
```

## Frontend

### Tech
<div align="center">
	<table>
		<tr style="background-color:white">
			<td><img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/angular.png" alt="Angular" title="Angular"/></td>
			<td><img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/typescript.png" alt="TypeScript" title="TypeScript"/></td>
			<td><img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/docker.png" alt="Docker" title="Docker"/></td>
		</tr>
	</table>
</div>

### Mockups

Since we need to create a calculator, we must design it. An obvious design that comes to mind is that of Numworks calculators. Arno spent an hour creating a reproduction on Figma that just needs to be reproduced in code. Here is the result:

![alt text](image.png)

On the left, the real one; on the right, the reproduction.

## API

### Tech

<div align="center">
	<table>
		<tr style="background-color:white">
			<td><img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png" alt="Python" title="Python"/></td>
			<td><img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/flask.png" alt="Flask" title="Flask"/></td>
			<td><img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="redis" title="redis"/></td>
			<td><img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rabbitmq.png" alt="RabbitMQ" title="RabbitMQ"/></td>
		</tr>
	</table>
</div>

We decided to use [flask-restful](https://flask-restful.readthedocs.io/en/latest/) to create our API.

### Packages to install

```python
pip install flask-restful
pip install redis
```

### Testing the API with curl

`Get`
```
curl -X GET 0.0.0.0:5000/api/v1/result?id=[REQUEST_ID]"
```

`Post`
```
curl -X POST 0.0.0.0:5000/api/v1/process -H "Content-Type: application/json" --data '{"calculation":"[CALCULATION]"}'
```

## Consumer

### Tech


<div align="center">
	<table>
		<tr style="background-color:white">
			<td><img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png" alt="Python" title="Python"/></td>
			<td><img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="redis" title="redis"/></td>
			<td><img width="50" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rabbitmq.png" alt="RabbitMQ" title="RabbitMQ"/></td>
		</tr>
	</table>
</div>

## Creating a virtual environment in Python - Ubuntu

```bash
virtualenv venv 
source venv/bin/activate
```

## Authors


<div align="center">
	<table>
		<tr>
			<td><img width="200" src="https://avatars.githubusercontent.com/u/71908560" alt="Arno BIDET" title="Arno BIDET"/></td>
			<td><img width="200" src="https://avatars.githubusercontent.com/u/97233327" alt="Nathan TOÏGO" title="Nathan TOÏGO"/></td>
		</tr>
        <tr>
			<td style="text-align:center;"><a href="https://github.com/ArnoBidet">Arno Bidet</a></td>
			<td style="text-align:center;"><a href="https://github.com/Nathan-Toigo">Nathan Toïgo</a>
		</tr>
	</table>
</div>
