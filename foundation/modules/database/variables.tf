variable "environment" {
  type        = string
  description = "Name of the environment (production, development, etc.)"
}

variable "node_type" {
  type        = string
  description = "Type of the node (DB-GP-S, DB-GP-M, etc.)"
}

variable "DB_USER" {
  type = string
}

variable "DB_PASSWORD" {
  type = string
}