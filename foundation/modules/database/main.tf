// Le SGBD
resource "scaleway_rdb_instance" "main" {
  for_each = toset(var.environment)
  name           = "fakeworks-rdb-${each.key}"
  node_type            = var.db_type[each.key]
  engine         = "PostgreSQL-15"
  is_ha_cluster  = true
  disable_backup = true
  user_name      = var.db_user
  password       = var.db_password
}

// La base de données
resource "scaleway_rdb_database" "main" {
  for_each = toset(var.environment)
  instance_id    = scaleway_rdb_instance.main[each.key].id
  name           = "fakeworks-db-${each.key}"
}