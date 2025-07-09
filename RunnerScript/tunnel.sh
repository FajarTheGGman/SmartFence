#!/bin/bash

OUTFILE="tunnel_url.txt"
LOGFILE="cloudflared.log"

# Clean old files
rm -f "$OUTFILE" "$LOGFILE"

# Start cloudflared in background and redirect output to a log file
cloudflared tunnel --url http://localhost:7072 --no-autoupdate > "$LOGFILE" 2>&1 &

# Get the PID so we can optionally manage it later
CLOUDFLARED_PID=$!

# Wait for the tunnel URL to appear in the log
echo "⏳ Waiting for tunnel to initialize..."

while ! grep -qE 'https://[a-zA-Z0-9.-]+\.trycloudflare\.com' "$LOGFILE"; do
  sleep 1
done

# Extract and save the URL
URL=$(grep -oE 'https://[a-zA-Z0-9.-]+\.trycloudflare\.com' "$LOGFILE" | head -n 1)
echo "$URL" > "$OUTFILE"
echo -e "\n[+] SmartFence Ready to use"
echo "✅ Tunnel URL saved to $OUTFILE: $URL"
echo -e "[=] Type : HTTPS"
DOMAIN=$(grep -oE '[a-zA-Z0-9.-]+\.trycloudflare\.com' "$LOGFILE" | head -n 1)
echo -e "[+] Domain : $DOMAIN"

# 🔄 Update JSONBin with the tunnel URL
echo "[*] Updating JSONBin with the Tunnel URL..."

curl --location --request PUT 'https://api.jsonbin.io/v3/b/686c90988a456b7966bd3a54' \
--header 'Content-Type: application/json' \
--header 'X-Master-Key: $2a$10$Vg87Byt/MjrdFfi.JetedOUS.mNgVdweDguB/0QnIZK0ACL0eUPTy' \
--data "{\"TUNNEL_API\": \"$URL\"}"

echo "[+] JSONBin updated with TUNNEL_API = $URL"

# (Optional) Wait for the cloudflared process to exit
wait $CLOUDFLARED_PID

