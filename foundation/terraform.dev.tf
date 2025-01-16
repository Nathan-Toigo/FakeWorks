resource "scaleway_domain_record" "calculatrice-dev-bidet-toigo-polytech-dijon" {
  dns_zone = "kiowy.net"
  name     = "www"
  type     = "A"
  data     = "1.2.3.4"
  ttl      = 3600
}

resource "scaleway_lb" "dev" {
  name               = "dev-lb"
  type               = "LB-S"
  assign_flexible_ip = false
}

// Le SGBD
resource "scaleway_rdb_instance" "main" {
  name           = "fakeworks-rdb-dev"
  node_type      = "DB-DEV-S" // pour un env de dev
  engine         = "PostgreSQL-15"
  is_ha_cluster  = true
  disable_backup = true
  user_name      = var.DB_USER
  password       = var.DB_PASSWORD
}

// La base de données
resource "scaleway_rdb_database" "main" {
  instance_id    = scaleway_rdb_instance.main.id
  name           = "fakeworks-db-dev"
}