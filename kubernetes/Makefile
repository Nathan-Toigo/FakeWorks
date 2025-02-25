KUBECTL_IMAGE=bitnami/kubectl:latest
DOCKER_BASE_COMMAND=docker run --rm
KUBE_BASE_COMMAND=$(DOCKER_BASE_COMMAND) $(VOLUME_MAP) $(CONTAINER_NAME) --user root:root  $(ENVIRONMENT) $(KUBECTL_IMAGE)
CONTAINER_NAME=--name fakeworks-kubectl
ENVIRONMENT=-e KUBECONFIG=$(KUBE_CONFIG_PATH)
KUBE_CONFIG_PATH=/home/.kube/config.yaml
VOLUME_MAP=-v ./configs/config.yaml:$(KUBE_CONFIG_PATH) -v ./apps:/apps
KUBE_NAMESPACE=bidet-toigo
KUBE_NAMESPACE_PARAM=--namespace=$(KUBE_NAMESPACE)


cmd:
	$(DOCKER_BASE_COMMAND) -it --entrypoint bash --user 1000:1000  $(VOLUME_MAP) $(ENVIRONMENT) $(CONTAINER_NAME) $(KUBECTL_IMAGE)

version:
	$(KUBE_BASE_COMMAND) version --client

get_namespace:
	$(KUBE_BASE_COMMAND) get namespace $(KUBE_NAMESPACE)

get_namespaces:
	$(KUBE_BASE_COMMAND) get namespace

get_pods:
	$(KUBE_BASE_COMMAND) get pods $(KUBE_NAMESPACE_PARAM)

get_replicasets:
	$(KUBE_BASE_COMMAND) get replicasets $(KUBE_NAMESPACE_PARAM)

create_namespace:
	$(KUBE_BASE_COMMAND) create namespace $(KUBE_NAMESPACE)

describe_namespace:
	$(KUBE_BASE_COMMAND) describe namespace $(KUBE_NAMESPACE)

KUBERNETES_SERVICE:=rabbitmq redis api frontend
KUBERNETES_REPLICASET:=$(KUBERNETES_SERVICE) consumer

set_up:
	@ echo "Setting up the application";
	@ echo "- Creating the namespace";
	@ $(KUBE_BASE_COMMAND) apply -f ./namespace.yaml;
	@ echo "- Setting the namespace";
	@ $(KUBE_BASE_COMMAND) config set-context --current --namespace=$(KUBE_NAMESPACE);
	@ echo "- Applying the ingress";
	@ $(KUBE_BASE_COMMAND) apply -f ./apps/ingress.yaml;
	@  $(foreach dir, $(KUBERNETES_REPLICASET), \
		echo "- Applying the deployment of ${dir}";\
		$(KUBE_BASE_COMMAND) apply -f ./apps/${dir}/deployment.yaml;\
	)
	@  $(foreach dir, $(KUBERNETES_SERVICE), \
		echo "- Applying the service of ${dir}";\
		$(KUBE_BASE_COMMAND) apply -f ./apps/${dir}/service.yaml;\
	)
	@ echo "- Adding the entry to /etc/hosts";
	@ sudo sed -i '$$a 34.77.144.136 calculatrice-bidet-toigo-polytech-dijon.kiowy.net' /etc/hosts
	@ echo "~~ Application has been set up ~~";

tear_down:
	@ echo "Tearing down the application";
	@ echo "- Deleting the ingress";
	@ $(KUBE_BASE_COMMAND) delete -f ./apps/ingress.yaml;
	@  $(foreach dir, $(KUBERNETES_REPLICASET), \
		echo "## ${dir}";\
		echo "- Deleting the deployment";\
		$(KUBE_BASE_COMMAND) delete -f ./apps/${dir}/deployment.yaml;\
	)
	@  $(foreach dir, $(KUBERNETES_SERVICE), \
		echo "## ${dir}";\
		echo "- Deleting the service";\
		$(KUBE_BASE_COMMAND) delete -f ./apps/${dir}/service.yaml;\
	)
	@ echo "- Deleting the namespace";
	@ $(KUBE_BASE_COMMAND) delete -f ./namespace.yaml;
	@ echo "- Removing the entry from /etc/hosts";
	@ sudo sed -i '/34.77.144.136 calculatrice-bidet-toigo-polytech-dijon.kiowy.net/d' /etc/hosts;
	@ echo "~~ Application has been torn down ~~" ;



port_forward:
	@ $(KUBE_BASE_COMMAND) --port 80:80 port-forward service/svc-frontend 8080:80