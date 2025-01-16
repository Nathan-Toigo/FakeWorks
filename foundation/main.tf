terraform {
  required_providers {
    scaleway = {
      source = "scaleway/scaleway"
    }
  }
  required_version = ">= 0.13"
}



module "load_balancer" {
  source          = "./modules/load_balancer"
  environment     = "prod"
  lb_type         = "LB-M"
}

module "load_balancer" {
  source          = "./modules/load_balancer"
  environment     = "dev"
  lb_type         = "LB-S"
}
