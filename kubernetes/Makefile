KUBECTL_IMAGE=bitnami/kubectl:latest
DOCKER_BASE_COMMAND=docker run --rm
KUBE_BASE_COMMAND=$(DOCKER_BASE_COMMAND) $(VOLUME_MAP) $(CONTAINER_NAME) $(KUBECTL_IMAGE) $(KUBE_CONFIG_PARAM)
CONTAINER_NAME=--name fakeworks-kubectl
KUBE_CONFIG_PATH=/home/.kube/config
VOLUME_MAP=-v ./configs/config.yaml:$(KUBE_CONFIG_PATH)
KUBE_CONFIG_PARAM=--kubeconfig=$(KUBE_CONFIG_PATH)
KUBE_NAMESPACE=bidet-toigo
KUBE_NAMESPACE_PARAM=--namespace=$(KUBE_NAMESPACE)


cmd:
	$(DOCKER_BASE_COMMAND) -it --entrypoint bash $(VOLUME_MAP) $(CONTAINER_NAME) $(KUBECTL_IMAGE)

version:
	$(KUBE_BASE_COMMAND) version --client

get_namespace:
	$(KUBE_BASE_COMMAND) get namespace $(KUBE_NAMESPACE)

get_namespaces:
	$(KUBE_BASE_COMMAND) get namespace

create_namespace:
	$(KUBE_BASE_COMMAND) create namespace $(KUBE_NAMESPACE)

describe_namespace:
	$(KUBE_BASE_COMMAND) describe namespace $(KUBE_NAMESPACE)

