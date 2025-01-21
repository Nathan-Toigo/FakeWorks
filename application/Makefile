IMAGE_NAME=gcr.io/google.com/cloudsdktool/google-cloud-cli:stable
SESSION_VOLUME_NAME=fakeworks-gcloud-session-volume
CONTAINER_NAME=fakeworks-gcloud-cli
WORKDIR=/home/fakeworks
SCRIPTS_DIR=./scripts
DOCKER_REGISTRY=europe-west1-docker.pkg.dev/polytech-dijon/polytech-dijon
DOCKER_IMAGE_PREFIX=bidet-toigo
DOCKER_TAG=latest
DOCKERFILES_LOCATIONS:=frontend consumer api

init:
	docker run -it --rm \
		--name $(CONTAINER_NAME) \
		-v $(SESSION_VOLUME_NAME):/root/.config/gcloud \
		-v $(SCRIPTS_DIR):$(WORKDIR) \
		-w $(WORKDIR) \
		--user=root \
		$(IMAGE_NAME) bash init.sh

build-images:
	$(foreach dir, $(DOCKERFILES_LOCATIONS), \
		@echo "Building image for $(dir)"; \
		cd ./$(dir); \
		docker build -t $(DOCKER_REGISTRY)/$(DOCKER_IMAGE_PREFIX)-$(dir):$(DOCKER_TAG) .; \
		cd ..; \
	)

push-images:
	$(foreach dir, $(DOCKERFILES_LOCATIONS), \
		@echo "Pushing image for $(dir)"; \
		docker push $(DOCKER_REGISTRY)/$(DOCKER_IMAGE):$(DOCKER_TAG); \
	)

start-cli:
	docker run -it --rm \
		--name $(CONTAINER_NAME) \
		-v $(SESSION_VOLUME_NAME):/root/.config/gcloud \
		-v $(SCRIPTS_DIR):$(WORKDIR) \
		-w $(WORKDIR) \
		$(IMAGE_NAME) bash