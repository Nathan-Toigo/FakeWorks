resource "scaleway_lb" "fakeworks_load_balancer" {
  name               = "lb-${var.environment}"
  type               = var.lb_type[var.environment]
  assign_flexible_ip = false
}