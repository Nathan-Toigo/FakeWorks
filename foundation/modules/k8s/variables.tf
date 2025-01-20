variable "cluster_name" {
  type = string
  description = "Name of the cluster"
  default = "tf-cluster-fakeworks"
}

variable "pool_name" {
  type = string
  description = "Name of the pool"
  default = "tf-pool-fakeworks"
}

variable "pool_type" {
  type = string
  description = "Type of the pool"
  default = "DEV1-M"
}