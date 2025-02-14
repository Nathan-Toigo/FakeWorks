# EXAMEN PRATIQUE - ILIA-SQR - Virtualisation & Cloud Computing
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

## Tech

<div align="center">
	<table>
		<tr>
			<td><img width="200" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/angular.png" alt="Angular" title="Angular"/></td>
			<td><img width="200" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/typescript.png" alt="TypeScript" title="TypeScript"/></td>
			<td><img width="200" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png" alt="Python" title="Python"/></td>
			<td><img width="200" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/flask.png" alt="Flask" title="Flask"/></td>
			<td><img width="200" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png" alt="redis" title="redis"/></td>
			<td><img width="200" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png" alt="Kubernetes" title="Kubernetes"/></td>
			<td><img width="200" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/terraform.png" alt="Terraform" title="Terraform"/></td>
			<td><img width="200" src="https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rabbitmq.png" alt="RabbitMQ" title="RabbitMQ"/></td>
		</tr>
	</table>
</div>

## Sommaire

* [Fondation](foundation/README.md)
* [Kubernetes](application/README.md)
* [Application](kubernetes/README.md)

## Développement des services

>Cette partie traite du développement des différents services. pour chaque service, nous parlons :
>- Des raisons du choix de la technologie
>- De leur architecture
>- Des potentiels problèmes rencontrés

### Frontend

#### Les raisons
Le frontend à été développé avec le framework Angular, en utilisant typescript. La raison pour ce choix est qu'Arno était déjà familié avec ce framework et Nathan était intéressé à l'idée de le découvrir à travers un projet. Voici l'architecture simplifié :

```tree
.
├── angular.json
├── dist
│   └── [Fichiers compilés en JS envoyé au navigateur]
├── dockerfile
├── node_modules
│   └── [Tout]
│   └── [Plein]
│   └── [De]
│   └── [Paquets]
│   └── […]
├── src
│   ├── app
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   ├── features
│   │   │   └── [composants d'affichage utilisés dans le composant principal]
│   │   └── shared
│   │   │   └── [composants d'affichage partagés]
│   ├── assets
│   │   └── [Des images et fichiers svg utilisés pour l'affichage]
│   ├── environments
│   │   └── [variables d'environnement de dev et de prod]
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
└── [Quelques fichiers de configurations de Typescript]
```

Cette structure nous à permis d'avoir un environnement propre et propice à l'évolution.

### Backend 

Le backend à été écrit en python, en utilisant le paquet **Flask** pour la mise en place de l'API. D'autres paquets ont étés installés comme **pika** et **redis** pour la communication avec les services *RabbitMQ* et la base *Redis* ou des paquets mineurs comme **flask_cors** pour lutilisation des méthodes CORS pour l'api.

Voici l'architecture de l'application :

```tree
.
├── Dockerfile
├── Dockerfile.dev
├── __pycache__
│   └── app.cpython-311.pyc
├── pyproject.toml
└── src
    ├── app.py
    ├── __pycache__
    │   └── app.cpython-311.pyc
    ├── routes
    │   ├── __init__.py
    │   ├── process.py
    │   ├── __pycache__
    │   └── result.py
    └── utils
        ├── __init__.py
        ├── __pycache__
        ├── rabbitMQ.py
        └── redis.py
```



### Consumer

Comme le backend, le consumer à été écrit en python. Les paquets utilisés sont **pika** et **redis** pour la communication avec *RabbitMQ* pour le premier et la communication avec la base *Redis* pour le second.

Voici l'architecture de l'application :

```tree
.
├── app.py
├── Dockerfile
└── Dockerfile.dev
```

### RabbitMQ

La mise en place du service *RabbitMQ* à été rapide. Il a suffit de créer un service depuis les images de RabbitMQ déjà existantes.

### Redis

Comme pour le service *RabbitMQ*, la base *Redis* a été mise en place en ajoutant un service dans le fichier `docker-compose.yaml` en utilisant une image déjà existante.

## Mise en production des services









