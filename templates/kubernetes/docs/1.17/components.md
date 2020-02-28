---
wrapper_template: kubernetes/docs/base_docs.html
markdown_includes:
  nav: kubernetes/docs/shared/_side-navigation.md
context:
  title: Components of Charmed Kubernetes 1.17
  description: Detailed description of Charmed Kubernetes release
keywords: component, charms, versions, release
tags:
    - reference
sidebar: k8smain-sidebar
permalink: 1.17/components.html
layout:
    - base
    - ubuntu-com
toc: false
bundle_revision: '372'
bundle_release: '1.17'
---

This page details the charms, snaps, images and other components
which go to make up the 1.17 release of Charmed Kubernetes.

Other information about this release can be found on the following pages:

 [documentation][]{: .p-button--neutral} [release notes][]{: .p-button--neutral}
 [upgrade notes][]{: .p-button--neutral} [bugs][]{: .p-button--neutral}
 [source][]{: .p-button--neutral} [1.17 milestone][]{: .p-button--neutral}

## Core charms

These charms are the core components or official optional components of the
release. These charms are maintained by the Charmed Kubernetes team.

{:.u-table-layout--auto}
| charm  | summary | docs | source | bugs | version | notes |
|--------|---------|------|--------|------|---------|-------|
| aws-iam | A charm that enables using AWS IAM to authenticate with Kubernetes| [docs](/kubernetes/docs/1.17/charm-aws-iam) | [source](https://github.com/charmed-kubernetes/charm-aws-iam) | | |
| aws-integrator | Charm to enable AWS integrations via Juju relations.| [docs](/kubernetes/docs/1.17/charm-aws-integrator) | [source](https://github.com/juju-solutions/charm-aws-integrator) | | |
| azure-integrator | Proxy charm to enable Azure integrations via Juju relations.| [docs](/kubernetes/docs/1.17/charm-azure-integrator) | [source](https://github.com/juju-solutions/charm-azure-integrator) | | |
| calico | A robust Software Defined Network from Project Calico| [docs](/kubernetes/docs/1.17/charm-calico) | [source](https://github.com/juju-solutions/layer-calico) | | |
| canal | A Software Defined Network based on Flannel and Calico| [docs](/kubernetes/docs/1.17/charm-canal) | [source](https://github.com/juju-solutions/layer-canal) | | |
| containerd | Containerd container runtime subordinate| [docs](/kubernetes/docs/1.17/charm-containerd) | [source]() | | |
| docker | Docker container runtime subordinate| [docs](/kubernetes/docs/1.17/charm-docker) | [source]() | | |
| docker-registry | Registry for docker images| [docs](/kubernetes/docs/1.17/charm-docker-registry) | [source](https://github.com/CanonicalLtd/docker-registry-charm) | | |
| easyrsa | Delivers EasyRSA to create a Certificate Authority (CA).| [docs](/kubernetes/docs/1.17/charm-easyrsa) | [source](https://github.com/charmed-kubernetes/layer-easyrsa) | | |
| etcd | Deploy a TLS terminated ETCD Cluster| [docs](/kubernetes/docs/1.17/charm-etcd) | [source](https://github.com/charmed-kubernetes/layer-etcd) | | |
| flannel | A charm that provides a robust Software Defined Network| [docs](/kubernetes/docs/1.17/charm-flannel) | [source](https://github.com/coreos/flannel) | | |
| gcp-integrator | Pharm to enable GCP integrations via Juju relations.| [docs](/kubernetes/docs/1.17/charm-gcp-integrator) | [source](https://github.com/juju-solutions/charm-gcp-integrator) | | |
| kata | Kata untrusted container runtime subordinate| [docs](/kubernetes/docs/1.17/charm-kata) | [source]() | | |
| keepalived | Failover and monitoring daemon for LVS clusters| [docs](/kubernetes/docs/1.17/charm-keepalived) | [source](https://github.com/juju-solutions/charm-keepalived) | | |
| kubeapi-load-balancer | Nginx Load Balancer| [docs](/kubernetes/docs/1.17/charm-kubeapi-load-balancer) | [source](https://nginx.org/en/) | | |
| kubernetes-master | The Kubernetes control plane.| [docs](/kubernetes/docs/1.17/charm-kubernetes-master) | [source](https://github.com/charmed-kubernetes/charm-kubernetes-master) | | |
| kubernetes-worker | The workload bearing units of a kubernetes cluster| [docs](/kubernetes/docs/1.17/charm-kubernetes-worker) | [source](https://github.com/charmed-kubernetes/charm-kubernetes-worker) | | |
| openstack-integrator | Proxy charm to enable OpenStack integrations via Juju relations.| [docs](/kubernetes/docs/1.17/charm-openstack-integrator) | [source](https://github.com/juju-solutions/charm-openstack-integrator) | | |
| tigera-secure-ee | Tigera Secure Enterprise Edition| [docs](/kubernetes/docs/1.17/charm-tigera-secure-ee) | [source](https://github.com/charmed-kubernetes/charm-tigera-secure-ee) | | |
| vsphere-integrator | Proxy charm to enable VMware vSphere integrations via Juju relations.| [docs](/kubernetes/docs/1.17/charm-vsphere-integrator) | [source](https://github.com/juju-solutions/charm-vsphere-integrator) | | |


## Snaps

The following snaps are used by this release of Charmed Kubernetes:

{:.u-table-layout--auto}
| snap  | confinement | summary | link |
|-------|-------------|---------|------|
|aws-cli| ? | Resource to side-load aws-cli snap in network-restricted deployments. | ? |
|core| ? | core snap | ? |
|etcd| ? | Snap package of etcd | ? |
|gcloud| ? | Resource to side-load gcloud snap in network-restricted deployments. | ? |
|cdk-addons| ? | CDK addons snap | ? |
|kube-apiserver| ? | kube-apiserver snap | ? |
|kube-controller-manager| ? | kube-controller-manager snap | ? |
|kube-proxy| ? | kube-proxy snap | ? |
|kube-scheduler| ? | kube-scheduler snap | ? |
|kubectl| ? | kubectl snap | ? |
|kubelet| ? | kubelet snap | ? |
|openstackclients| ? | Resource to side-load openstackclients snap in network-restricted deployments. | ? |


<!-- LINKS -->
[documentation]: /kubernetes/docs/
[release notes]: /kubernetes/docs/release-notes#1.17
[upgrade notes]: /kubernetes/docs/
[bugs]: /kubernetes/docs/
[source]: /kubernetes/docs/
[1.17 milestone]: /kubernetes/docs/


