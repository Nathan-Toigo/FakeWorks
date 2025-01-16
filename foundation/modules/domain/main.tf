resource "scaleway_domain_record" "calculatrice-dev-bidet-toigo-polytech-dijon" {
  dns_zone = var.dns_zone
  name     = var.name
  type     = "A"
  data     = "1.2.3.4"
  ttl      = 3600
}