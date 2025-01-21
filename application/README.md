# Application

## Mockups

Since we need to create a calculator, we must design it. An obvious design that comes to mind is that of Numworks calculators. Arno spent an hour creating a reproduction on Figma that just needs to be reproduced in code. Here is the result:

![alt text](image.png)

On the left, the real one; on the right, the reproduction.

## API

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

## Creating a virtual environment in Python - Ubuntu

```bash
virtualenv venv 
source venv/bin/activate
```
