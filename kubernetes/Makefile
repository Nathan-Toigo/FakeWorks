IMAGE_NAME=gcr.io/google.com/cloudsdktool/google-cloud-cli:stable
SESSION_VOLUME_NAME=fakeworks-gcloud-session-volume
CONTAINER_NAME=fakeworks-gcloud-cli
WORKDIR=/home/fakeworks
SCRIPTS_DIR=./scripts

init:
	docker run -it --rm \
		--name $(CONTAINER_NAME) \
		-v $(SESSION_VOLUME_NAME):/root/.config/gcloud \
		-v $(SCRIPTS_DIR):$(WORKDIR) \
		-w $(WORKDIR) \
		--user=root \
		$(IMAGE_NAME) bash init.sh

start-cli:
	docker run -it --rm \
		--name $(CONTAINER_NAME) \
		-v $(SESSION_VOLUME_NAME):/root/.config/gcloud \
		-v $(SCRIPTS_DIR):$(WORKDIR) \
		-w $(WORKDIR) \
		$(IMAGE_NAME) bash

