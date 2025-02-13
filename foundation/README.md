# Terraform

So we had to provision resources following this schema :

```mermaid
graph LR
  subgraph k8s ["Kubernetes Cluster"]
    direction TB
    node1
    node2
    node3
  end
  lbA["LoadBalancer
        (production)"] --> k8s
  lbB["LoadBalancer
        (development)"]  --> k8s
  dns1(["DNS
        calculatrice-dev.polytech-dijon.kiowy.net"]) --> lbB
  dns2(["DNS
        calculatrice.polytech-dijon.kiowy.net"]) --> lbA
  k8s --> db["Database
              (production)"]
  k8s --> reg[container registry]
  k8s --> db2["Database
              (develop)"]
```

## Run our thing !

As I HATE installing things, I containerized terraform. You can easily test our thing using the make commands in our make file :

|Command|Description|
|-|-|
|tf-init|To make terraform acknowledge our modules|
|tf-fmt|To format|
|tf-validate|To validate|
|tf-plan|To plan|


## Result of `terraform plan`

So let's do it :
```
$ make tf-plan
docker run --rm -v .:/foundation -w /foundation hashicorp/terraform:latest plan  

Terraform used the selected providers to generate the following execution
plan. Resource actions are indicated with the following symbols:
  + create

Terraform will perform the following actions:
```
### Databases
```
  # module.database["development"].scaleway_rdb_database.fakeworks_db will be created
  + resource "scaleway_rdb_database" "fakeworks_db" {
      + id          = (known after apply)
      + instance_id = (known after apply)
      + managed     = (known after apply)
      + name        = "fakeworks-db-development"
      + owner       = (known after apply)
      + region      = (known after apply)
      + size        = (known after apply)
    }

  # module.database["development"].scaleway_rdb_instance.fakeworks_rdb will be created
  + resource "scaleway_rdb_instance" "fakeworks_rdb" {
      + backup_same_region        = (known after apply)
      + backup_schedule_frequency = (known after apply)
      + backup_schedule_retention = (known after apply)
      + certificate               = (known after apply)
      + disable_backup            = true
      + endpoint_ip               = (known after apply)
      + endpoint_port             = (known after apply)
      + engine                    = "PostgreSQL-15"
      + id                        = (known after apply)
      + is_ha_cluster             = true
      + name                      = "fakeworks-rdb-development"
      + node_type                 = "DB-GP-S"
      + organization_id           = (known after apply)
      + password                  = (sensitive value)
      + project_id                = (known after apply)
      + read_replicas             = (known after apply)
      + region                    = (known after apply)
      + settings                  = (known after apply)
      + user_name                 = "fakeworks"
      + volume_size_in_gb         = (known after apply)
      + volume_type               = "lssd"

      + load_balancer (known after apply)

      + logs_policy (known after apply)
    }

  # module.database["production"].scaleway_rdb_database.fakeworks_db will be created
  + resource "scaleway_rdb_database" "fakeworks_db" {
      + id          = (known after apply)
      + instance_id = (known after apply)
      + managed     = (known after apply)
      + name        = "fakeworks-db-production"
      + owner       = (known after apply)
      + region      = (known after apply)
      + size        = (known after apply)
    }

  # module.database["production"].scaleway_rdb_instance.fakeworks_rdb will be created
  + resource "scaleway_rdb_instance" "fakeworks_rdb" {
      + backup_same_region        = (known after apply)
      + backup_schedule_frequency = (known after apply)
      + backup_schedule_retention = (known after apply)
      + certificate               = (known after apply)
      + disable_backup            = true
      + endpoint_ip               = (known after apply)
      + endpoint_port             = (known after apply)
      + engine                    = "PostgreSQL-15"
      + id                        = (known after apply)
      + is_ha_cluster             = true
      + name                      = "fakeworks-rdb-production"
      + node_type                 = "DB-GP-M"
      + organization_id           = (known after apply)
      + password                  = (sensitive value)
      + project_id                = (known after apply)
      + read_replicas             = (known after apply)
      + region                    = (known after apply)
      + settings                  = (known after apply)
      + user_name                 = "fakeworks"
      + volume_size_in_gb         = (known after apply)
      + volume_type               = "lssd"

      + load_balancer (known after apply)

      + logs_policy (known after apply)
    }
```

### Domain record

```
  # module.domain["development"].scaleway_domain_record.calculatrice-bidet-toigo-polytech-dijon will be created
  + resource "scaleway_domain_record" "calculatrice-bidet-toigo-polytech-dijon" {
      + data            = "1.2.3.4"
      + dns_zone        = "kiowy.net"
      + fqdn            = (known after apply)
      + id              = (known after apply)
      + keep_empty_zone = false
      + name            = "calculatrice-dev.bidet-toigo.polytech-dijon.kiowy.net"
      + priority        = (known after apply)
      + project_id      = (known after apply)
      + root_zone       = (known after apply)
      + ttl             = 3600
      + type            = "A"
    }

  # module.domain["production"].scaleway_domain_record.calculatrice-bidet-toigo-polytech-dijon will be created
  + resource "scaleway_domain_record" "calculatrice-bidet-toigo-polytech-dijon" {
      + data            = "1.2.3.4"
      + dns_zone        = "kiowy.net"
      + fqdn            = (known after apply)
      + id              = (known after apply)
      + keep_empty_zone = false
      + name            = "calculatrice.bidet-toigo.polytech-dijon.kiowy.net"
      + priority        = (known after apply)
      + project_id      = (known after apply)
      + root_zone       = (known after apply)
      + ttl             = 3600
      + type            = "A"
    }
```

### K8s cluster
```
  # module.k8s.scaleway_k8s_cluster.cluster-k8s-fakeworks will be created
  + resource "scaleway_k8s_cluster" "cluster-k8s-fakeworks" {
      + apiserver_url               = (known after apply)
      + cni                         = "cilium"
      + created_at                  = (known after apply)
      + delete_additional_resources = false
      + id                          = (known after apply)
      + kubeconfig                  = (sensitive value)
      + name                        = "tf-cluster-fakeworks"
      + organization_id             = (known after apply)
      + private_network_id          = (known after apply)
      + project_id                  = (known after apply)
      + region                      = (known after apply)
      + status                      = (known after apply)
      + type                        = (known after apply)
      + updated_at                  = (known after apply)
      + upgrade_available           = (known after apply)
      + version                     = "1.29.1"
      + wildcard_dns                = (known after apply)

      + auto_upgrade (known after apply)

      + autoscaler_config (known after apply)

      + open_id_connect_config (known after apply)
    }

  # module.k8s.scaleway_k8s_pool.pool-k8s-fakeworks will be created
  + resource "scaleway_k8s_pool" "pool-k8s-fakeworks" {
      + autohealing            = false
      + autoscaling            = false
      + cluster_id             = (known after apply)
      + container_runtime      = "containerd"
      + created_at             = (known after apply)
      + current_size           = (known after apply)
      + id                     = (known after apply)
      + max_size               = (known after apply)
      + min_size               = 1
      + name                   = "tf-pool-fakeworks"
      + node_type              = "DEV1-M"
      + nodes                  = (known after apply)
      + public_ip_disabled     = false
      + region                 = (known after apply)
      + root_volume_size_in_gb = (known after apply)
      + root_volume_type       = (known after apply)
      + size                   = 1
      + status                 = (known after apply)
      + updated_at             = (known after apply)
      + version                = (known after apply)
      + wait_for_pool_ready    = true
      + zone                   = (known after apply)

      + upgrade_policy (known after apply)
    }
```

### Virtual Private Cluster Network
```
  # module.k8s.scaleway_vpc_private_network.pn-k8s-fakeworks will be created
  + resource "scaleway_vpc_private_network" "pn-k8s-fakeworks" {
      + created_at      = (known after apply)
      + id              = (known after apply)
      + is_regional     = (known after apply)
      + name            = (known after apply)
      + organization_id = (known after apply)
      + project_id      = (known after apply)
      + region          = (known after apply)
      + updated_at      = (known after apply)
      + vpc_id          = (known after apply)
      + zone            = (known after apply)

      + ipv4_subnet (known after apply)

      + ipv6_subnets (known after apply)
    }
```

### Load balancer
```
  # module.load_balancer["development"].scaleway_lb.fakeworks_load_balancer will be created
  + resource "scaleway_lb" "fakeworks_load_balancer" {
      + assign_flexible_ip      = false
      + id                      = (known after apply)
      + ip_address              = (known after apply)
      + ip_id                   = (known after apply)
      + ip_ids                  = (known after apply)
      + ipv6_address            = (known after apply)
      + name                    = "lb-development"
      + organization_id         = (known after apply)
      + project_id              = (known after apply)
      + region                  = (known after apply)
      + ssl_compatibility_level = "ssl_compatibility_level_intermediate"
      + type                    = "LB-S"
      + zone                    = (known after apply)
    }

  # module.load_balancer["production"].scaleway_lb.fakeworks_load_balancer will be created
  + resource "scaleway_lb" "fakeworks_load_balancer" {
      + assign_flexible_ip      = false
      + id                      = (known after apply)
      + ip_address              = (known after apply)
      + ip_id                   = (known after apply)
      + ip_ids                  = (known after apply)
      + ipv6_address            = (known after apply)
      + name                    = "lb-production"
      + organization_id         = (known after apply)
      + project_id              = (known after apply)
      + region                  = (known after apply)
      + ssl_compatibility_level = "ssl_compatibility_level_intermediate"
      + type                    = "LB-M"
      + zone                    = (known after apply)
    }
```

### Container registry
```
  # module.registry.scaleway_registry_namespace.fakeworks_container_registry will be created
  + resource "scaleway_registry_namespace" "fakeworks_container_registry" {
      + description     = "Fakeworks - Container registry"
      + endpoint        = (known after apply)
      + id              = (known after apply)
      + is_public       = false
      + name            = "fakeworks-cr"
      + organization_id = (known after apply)
      + project_id      = (known after apply)
      + region          = (known after apply)
    }
```

### Command conclusion
```
Plan: 12 to add, 0 to change, 0 to destroy.

─────────────────────────────────────────────────────────────────────────────

Note: You didn't use the -out option to save this plan, so Terraform can't
guarantee to take exactly these actions if you run "terraform apply" now.
```

## Schema of what is planned 


```mermaid
 graph
  subgraph k8s ["Cluster Kubernetes cluster-k8s-fakeworks"]
    direction TB
    node["
        pool-k8s-fakeworks"]
  end
  lbA["fakeworks_load_balancer
        (production)"] --> k8s
  lbB["fakeworks_load_balancer
        (development)"]  --> k8s
  dns1(["DNS
        calculatrice-dev.bidet-toigo.polytech-dijon.kiowy.net"]) --> lbB
  dns2(["DNS
        calculatrice-bidet-toigo-polytech-dijon.polytech-dijon.kiowy.net"]) --> lbA
  k8s --> db["fakeworks_db
              (production)"]
  k8s --> reg["container registry
                fakeworks_container_registry"]
  k8s --> db2["fakeworks_db
              (develop)"]
```

But it's a little bit more complicated. A database cannot be provisionnised alone, nor can a pool.

Thus, for each :

|Module|Resources & type|Description (if needed)|
|-|-|-|
|Database|**fakeworks_rdb** - scaleway_rdb_instance|Represents an entire managed database instance on Scaleway RDB. Defines the engine used (postgres) among ohter|
|Database|**fakeworks_db** - scaleway_rdb_database|Represents the fakeworks_rdb instance.|
|Domain|**calculatrice-bidet-toigo-polytech-dijon** - scaleway_domain_record|One for production|
|Domain|**calculatrice-bidet-toigo-polytech-dijon** - scaleway_domain_record|The other for dev|
|K8s|**cluster-k8s-fakeworks** - scaleway_k8s_cluster|Use resources from the pool to run its things|
|K8s|**pool-k8s-fakeworks** - scaleway_k8s_pool|Resources made available for use as a pool of resources|
|K8s|**pn-k8s-fakeworks** - scaleway_vpc_private_network| Private network for the cluser |
|load_balancer|**fakeworks_load_balancer** - scaleway_lb| One for production |
|load_balancer|**fakeworks_load_balancer** - scaleway_lb| The other for dev |
|registry|**fakeworks_container_registry** - scaleway_registry_namespace|-|

## Point of interest

As we are some old dev with the grandiloquent DRY principle drilled in our skull to the very core, we wanted to avoid at all cost to repeat resources for dev and prod, thus we made full use of terraform capabilities to generate those in a streamlined way.

First in the `domain/variables.tf` we will find things like :

```
variable "environment" {
  type = string
  description = "Name of the environment (production, development, etc.)"
}

variable "upper_domain" {
  type = map(string)
  description = "Type of load balancer (LB-S, LB-M, LB-L)"
  default = {
    "production" = "calculatrice",
    "development" = "calculatrice-dev"
  }
}
```
In upper domain, we define a dictionnary. Depending on the key, we will change the value of the variable returned.

Also, the file takes an argument named `environment`. This is the one beeing used as the value accessor in our `upper_domain` variable.

Thus in the `domain/main.tf`, it is used as 

```
resource "scaleway_domain_record" "calculatrice-bidet-toigo-polytech-dijon" {
  ...
  name     = ...${var.lower_domain}"
  ...
}
```

Then in the main `variable.tf` at the base of our foundation, we find the following :
```
variable "environments" {
  type    = list(string)
  default = ["production", "development"]
}
```

Used as 


```
module "domain" {
  for_each     = toset(var.environments)
  ...
  environment  = each.key
  ...
}
```

Very smart right ?

Also we passed values around using `outputs.tf` in `load_balancer` to pass the load balancer ip to the DNS.