resource "scaleway_domain_record" "calculatrice-bidet-toigo-polytech-dijon" {
  dns_zone = var.dns_zone
  name     = "${var.upper_domain[var.environment]}.${var.nom_binome_1}-${var.nom_binome_2}.${var.lower_domain}"
  type     = "A"
  data     = "1.2.3.4"
  ttl      = 3600
}