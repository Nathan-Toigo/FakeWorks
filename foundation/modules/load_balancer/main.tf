resource "scaleway_lb" "fakeworks_load_balancer" {
  for_each = toset(var.environment)
  name               = "lb-${each.key}"
  type               = var.lb_type[each.key]
  assign_flexible_ip = false
}