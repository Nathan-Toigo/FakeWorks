variable "environment" {
  type        = string
  description = "Nom de l'environnement (production, development, etc.)"
}

variable "engine" {
  type        = string
  description = "Moteur de la base de données (mysql, postgres, etc.)"
}

variable "instance_class" {
  type        = string
  description = "Type d'instance RDS (ex: db.t3.micro)"
}

variable "allocated_storage" {
  type        = number
  description = "Taille de stockage allouée (en Go)"
}

variable "username" {
  type        = string
  description = "Nom d'utilisateur de la base de données"
}

variable "password" {
  type        = string
  description = "Mot de passe de la base de données"
}

variable "security_groups" {
  type        = list(string)
  description = "Groupes de sécurité pour la base de données"
}
