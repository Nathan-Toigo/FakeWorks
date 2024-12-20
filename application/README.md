# Application

## Maquettages

Puisqu'on doit faire une calculatrice doit être réalisé, il faut en réaliser le design. Un design évident qui vient alors est celui des calculatrices Numworks. Arno a donc passé une heure à réaliser une reproduction sur figma qui n'a plus qu'à être reproduit en code. Voici le résultat :

![alt text](image.png)

À gauche la vraie, à droite la reproduction.

## API

Nous avons décidé d'utiliser [flask-restful](https://flask-restful.readthedocs.io/en/latest/) afin de réaliser notre API

### Packets à installer

```python
pip install flask-restful
pip install redis
```

### Test par curl de l'API


`Get`
```
curl -X GET 0.0.0.0:5000/api/v1/result?id=[REQUEST_ID]"
```

`Post`
```
curl -X POST 0.0.0.0:5000/api/v1/process -H "Content-Type: application/json" --data '{"calculation":"[CALCULATION]"}'
```

## Création d'environnement virtuel sous python - UBuntu

```bash
virtualenv venv 
source venv/bin/activate
```