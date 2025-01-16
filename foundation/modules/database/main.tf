// Le SGBD
resource "scaleway_rdb_instance" "main" {
  name           = "fakeworks-rdb-${var.environment}"
  node_type      = var.node_type
  engine         = "PostgreSQL-15"
  is_ha_cluster  = true
  disable_backup = true
  user_name      = var.DB_USER
  password       = var.DB_PASSWORD
}

// La base de données
resource "scaleway_rdb_database" "main" {
  instance_id    = scaleway_rdb_instance.main.id
  name           = "fakeworks-db-${var.environment}"
}