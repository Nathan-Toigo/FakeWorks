variable "environment" {
  type        = string
  description = "Name of the environment (production, development, etc.)"
}

variable "lb_type" {
  type        = string
  description = "Type of load balancer (LB-S, LB-M, LB-L)"
}