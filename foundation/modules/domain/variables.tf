variable "environment" {
  type = list(string)
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

variable lower_domain {
  type = string
  default = "polytech-dijon.kiowy.net"
}

variable "nom_binome_1" {
  type = string
  default = "bidet"
}

variable "nom_binome_2" {
  type = string
  default = "toigo"
}

variable "dns_zone" {
  type = string
  default = "kiowy.net"
}

variable "name" {
  type = string
  default = "www"
}

variable "lb_ip" {
  type = map(string)
  description = "IP of the load balancer"
}