import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";

const example_zone = new gcp.dns.ManagedZone("example-zone", {
    description: "Example DNS zone",
    dnsName: "my-domain.com.",
    labels: {
        foo: "bar",
    },
});

const txtRecord = new gcp.dns.RecordSet("my-txt-record", {
    managedZone: example_zone.name,
    name: "foo.my-domain.com.",
    type: "TXT",
    rrdatas: ["rec1", "rec2"],
    ttl: 3600,
}, { deleteBeforeReplace: true });