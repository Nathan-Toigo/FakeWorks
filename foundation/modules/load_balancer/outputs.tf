output "lb_id" {
  description = "ID of the load balancer"
  value = scaleway_lb.fakeworks_load_balancer.id
}