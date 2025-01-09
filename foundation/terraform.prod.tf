
resource "scaleway_domain_record" "calculatrice-bidet-toigo-polytech-dijon" {
  dns_zone = "kiowy.net"
  name     = "www"
  type     = "A"
  data     = "1.2.3.4"
  ttl      = 3600
}