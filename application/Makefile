PROJECT_ID=polytech-dijon
DOCKER_REGISTRY=europe-west1-docker.pkg.dev/polytech-dijon/polytech-dijon
DOCKER_IMAGE_PREFIX=bidet-toigo
DOCKER_TAG=latest
DOCKERFILES_LOCATIONS:=frontend consumer api

init:
	gcloud auth login;
	gcloud config set project $(PROJECT_ID);
	gcloud auth configure-docker europe-west1-docker.pkg.dev;

build-images:
	$(foreach dir, $(DOCKERFILES_LOCATIONS), \
		docker build -t $(DOCKER_REGISTRY)/$(DOCKER_IMAGE_PREFIX)-$(dir):$(DOCKER_TAG) ./$(dir); \
	)

push-images:
	$(foreach dir, $(DOCKERFILES_LOCATIONS), \
		docker push $(DOCKER_REGISTRY)/$(DOCKER_IMAGE_PREFIX)-$(dir):$(DOCKER_TAG);\
	)

trivy:
	$(foreach dir, $(DOCKERFILES_LOCATIONS), \
		trivy image $(DOCKER_REGISTRY)/$(DOCKER_IMAGE_PREFIX)-$(dir):$(DOCKER_TAG);\
	)