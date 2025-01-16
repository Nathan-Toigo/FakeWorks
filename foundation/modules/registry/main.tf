resource "scaleway_registry_namespace" "fakeworks_container_registry" {
  name        = "fakeworks-cr"
  description = "Fakeworks - Container registry"
  is_public   = false
}