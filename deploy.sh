#/bin/bash

set -e

echo "BUILDING..."
podman build -t color-switcher .

echo "Transferring Image"
podman image scp color-switcher ubuntu@4.144.133.214::

echo "Deploying Container"
ssh ubuntu "systemctl --user daemon-reload"
ssh ubuntu "systemctl --user restart app.service"