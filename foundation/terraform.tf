variable "DB_USER" {
  type = string
}

variable "DB_PASSWORD" {
  type = string
}

variable "NOM_BINOME_1" {
  type = string
  default = "bidet"
}

variable "NOM_BINOME_2" {
  type = string
  default = "toigo"
}

terraform {
  required_providers {
    scaleway = {
      source = "scaleway/scaleway"
    }
  }
  required_version = ">= 0.13"
}

resource "scaleway_registry_namespace" "main" {
  name        = "fakeworks-cr"
  description = "Fakeworks - Container registry"
  is_public   = false
}