module "load_balancer" {
  for_each    = toset(var.environments)
  source      = "./modules/load_balancer"
  environment = each.key
}

module "database" {
  for_each    = toset(var.environments)
  source      = "./modules/database"
  db_user     = var.db_user
  db_password = var.db_password
  environment = each.key
}

module "domain" {
  for_each     = toset(var.environments)
  source       = "./modules/domain"
  nom_binome_1 = var.nom_binome_1
  nom_binome_2 = var.nom_binome_2
  environment  = each.key
  // On récupère l'ID du load balancer pour le passer au module domain
  // On utilise la syntaxe module.<module_name>.<output_name>
  // Ici, le nom du module est load_balancer suivi de l'environnement
  lb_id        = module.load_balancer[each.key].lb_id
}

module "registry" {
  source      = "./modules/registry"
}

module "k8s" {
  source          = "./modules/k8s"
}