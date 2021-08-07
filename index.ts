import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";

const example_zone = new gcp.dns.ManagedZone("example-zone", {
    description: "Example DNS zone",
    dnsName: "my-domain.com.",
    labels: {
        foo: "bar",
    },
});