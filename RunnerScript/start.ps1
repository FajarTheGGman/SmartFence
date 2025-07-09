# SmartFence PowerShell Initialization Script
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

@"
  ___                _   ___                
 / __|_ __  __ _ _ _| |_| __|__ _ _  __ ___ 
 \__ \ '  \/ _` | '_|  _| _/ -_) ' \/ _/ -_)
 |___/_|_|_\__,_|_|  \__|_|\___|_||_\__\___|
                                            
Name : SmartFence System
Description : Internet of Things Early Warning System and Monitoring For Fence
Version : 1.0.0
"@

Write-Host "[+] Checking Docker..."
if (-not (Get-Command docker -ErrorAction SilentlyContinue)) {
    Write-Error "[-] Docker is not installed. Please install Docker first."
    exit 1
}

Write-Host "`n[*] Running Microservices ..."
Set-Location ../microservices

Write-Host "[+] Running Database ..."
Set-Location DatabaseService
docker compose up -d

Write-Host "[+] Running Device Management ..."
Set-Location ../DevicesManagement
docker compose up -d

Write-Host "[+] Running Sensor Management ..."
Set-Location ../SensorMQTT
docker compose up -d

Write-Host "[+] Running Users Management ..."
Set-Location ../UsersManagement
docker compose up -d

Write-Host "[+] Running LandingPoint Service ..."
Set-Location ../LandingEndpoint
docker compose up -d

Write-Host "[+] All Services are running ..."

Write-Host "`n[*] Running Cloudflare Tunnel ..."
Set-Location ../../scripts

# Wait for the service on port 7072
Write-Host "[+] Waiting for the service to be ready ..."
do {
    try {
        $response = Invoke-WebRequest -Uri "http://localhost:7072" -UseBasicParsing -TimeoutSec 2
        Start-Sleep -Seconds 1
    } catch {
        Write-Host -NoNewline "."
        Start-Sleep -Seconds 1
    }
} while (-not $response)

Write-Host "`n[+] Service is responding. Starting tunnel..."

# Run the tunnel (make sure tunnel.sh is PowerShell compatible or call WSL/bash)
bash ./tunnel.sh
