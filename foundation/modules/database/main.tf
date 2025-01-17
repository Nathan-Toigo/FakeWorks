// Le SGBD
resource "scaleway_rdb_instance" "fakeworks_rdb" {
  name           = "fakeworks-rdb-${var.environment}"
  node_type            = var.db_type[var.environment]
  engine         = "PostgreSQL-15"
  is_ha_cluster  = true
  disable_backup = true
  user_name      = var.db_user
  password       = var.db_password
}

// La base de données
resource "scaleway_rdb_database" "fakeworks_db" {
  instance_id    = scaleway_rdb_instance.fakeworks_rdb.id
  name           = "fakeworks-db-${var.environment}"
}