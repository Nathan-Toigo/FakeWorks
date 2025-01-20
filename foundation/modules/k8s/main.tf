resource "scaleway_vpc_private_network" "pn-k8s-fakeworks" {}

resource "scaleway_k8s_cluster" "cluster-k8s-fakeworks" {
  name    = var.cluster_name
  version = "1.29.1"
  cni     = "cilium"
  private_network_id = scaleway_vpc_private_network.pn-k8s-fakeworks.id
  delete_additional_resources = false
}

resource "scaleway_k8s_pool" "pool-k8s-fakeworks" {
  cluster_id = scaleway_k8s_cluster.cluster-k8s-fakeworks.id
  name       = var.pool_name
  node_type  = var.pool_type
  size       = 1
}