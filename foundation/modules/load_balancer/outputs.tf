// On expose l'ID du load balancer pour que le module domain puisse le récupérer
output "lb_id" {
  description = "ID of the load balancer"
  value = scaleway_lb.fakeworks_load_balancer.id
}