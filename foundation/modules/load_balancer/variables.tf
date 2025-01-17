variable "environment" {
  type = string
  description = "Name of the environment (production, development, etc.)"
}

variable "lb_type" {
  type = map(string)
  description = "Type of load balancer (LB-S, LB-M, LB-L)"
  default = {
    "production" = "LB-M",
    "development" = "LB-S"
  }
}