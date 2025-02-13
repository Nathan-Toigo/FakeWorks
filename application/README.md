# Application


## Prerequisite

- [gcloud](https://cloud.google.com/sdk/docs/install?hl=fr)
- [docker](https://docs.docker.com/engine/install/)

And that's it ! All the rest is containerised !

## Quick start

So you don't want to read all our README, you meanie ~ 

<img src="https://media.tenor.com/GF3gAxfRPOsAAAAM/anime-girl-meh.gif" style="width:50%;">

Well, that's okay~ You don't want to lose some precious time after all, uwu

To start our app localy in dev mode, you only need to run

```
docker compose up
```

You wanna start it in production mode locally ? Then use

```
docker compose -f docker-compose.prod.yaml up 
```

That's it ! You can now test our app locally

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

# Authors


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