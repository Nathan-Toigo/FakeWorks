variable "environments" {
  type    = list(string)
  default = ["production", "development"]
}

variable "domain" {
  type    = string
  default = "polytech-dijon.kiowy.net"
}


variable "nom_binome_1" {
  type    = string
  default = "bidet"
}

variable "nom_binome_2" {
  type    = string
  default = "toigo"
}

variable "db_user" {
  type    = string
  default = "fakeworks"
}

variable "db_password" {
  type    = string
  default = "fakeworks"
}

