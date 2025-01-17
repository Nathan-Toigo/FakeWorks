variable "environment" {
  type = string
  description = "Name of the environment (production, development, etc.)"
}


variable "db_type" {
  type = map(string)
  description = "Type of the node (DB-GP-S, DB-GP-M, etc.)"
  default = {
    "production" = "DB-GP-M",
    "development" = "DB-GP-S"
  }
}

variable "db_user" {
  type = string
}

variable "db_password" {
  type = string
}