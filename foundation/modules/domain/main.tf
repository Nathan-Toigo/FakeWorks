resource "scaleway_domain_record" "calculatrice-bidet-toigo-polytech-dijon" {
  for_each = toset(var.environment)
  dns_zone = var.dns_zone
  name     = "${var.upper_domain[each.key]}.${var.nom_binome_1}-${var.nom_binome_2}.${var.lower_domain}"
  type     = "A"
  data     = var.lb_ip["lb-production"].public_ip
  ttl      = 3600
}