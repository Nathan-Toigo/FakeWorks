variable "environment" {
  type    = string
  default = "production" # Peut être override avec terraform plan/apply
}

variable "domain" {
  type    = string
  default = "polytech-dijon.kiowy.net"
}

variable "dns_names" {
  type = map(string)
  default = {
    production = "calculatrice.${var.domain}"
    development = "calculatrice-dev.${var.domain}"
  }
}
