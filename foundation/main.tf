module "load_balancer" {
  source      = "./modules/load_balancer"
  environment = var.environment
}

module "database" {
  source      = "./modules/database"
  environment = var.environment
  db_user     = var.db_user
  db_password = var.db_password
}

module "domain" {
  source      = "./modules/domain"
  environment = var.environment
  nom_binome_1 = var.nom_binome_1
  nom_binome_2 = var.nom_binome_2
  lb_ip = module.load_balancer.lb_ips
}