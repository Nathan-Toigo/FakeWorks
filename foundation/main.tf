module "k8s" {
  source      = "./modules/k8s"
  environment = var.environment
}

module "load_balancer" {
  source      = "./modules/load_balancer"
  environment = var.environment
}

module "dns" {
  source      = "./modules/dns"
  environment = var.environment
}

module "database" {
  source      = "./modules/database"
  environment = var.environment
}
