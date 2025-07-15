# SmartFenceSystem.ps1

Write-Host @"
  ___                _   ___                
 / __|_ __  __ _ _ _| |_| __|__ _ _  __ ___ 
 \__ \ '  \/ _` | '_|  _| _/ -_) ' \/ _/ -_)
 |___/_|_|_\__,_|_|  \__|_|\___|_||_\__\___|
                                            
Name : SmartFence System
Description : Internet of Things Early Warning System and Monitoring For Fence
Version : 1.0.0
"@ -ForegroundColor Cyan

Write-Host "`n[+] Checking Docker..."
if (-not (Get-Command docker -ErrorAction SilentlyContinue)) {
    Write-Host "[-] Docker is not installed. Please install Docker first." -ForegroundColor Red
    exit 1
}

Write-Host "`n[*] Running Microservice ..."

# Save the starting location to return to it later
$BaseDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location -Path (Join-Path $BaseDir "..")

Write-Host "[+] Running Database ..."
Set-Location -Path ".\DatabaseService"
docker compose up -d

Write-Host "[+] Running Device Management ..."
Set-Location -Path "..\DevicesManagement"
docker compose up -d

Write-Host "[+] Running Sensor Management ..."
Set-Location -Path "..\HardwareService"
docker compose up -d

Write-Host "[+] Running Users Management ..."
Set-Location -Path "..\UsersManagement"
docker compose up -d

Write-Host "[+] Running AnalyticsManagement Service ..."
Set-Location -Path "..\AnalyticsManagement"
docker compose up -d

Write-Host "[+] Running LandingPoint Service ..."
Set-Location -Path "..\LandingEndpoint"
docker compose up -d

Write-Host "[+] All Services are running ..."

Write-Host "`n[*] Running Cloudflare Tunnel ..."
Set-Location -Path "..\RunnerScript"

# Wait for service to be ready
Write-Host "[+] Waiting for the service to be ready ..."
while ($true) {
    try {
        $response = Invoke-WebRequest -Uri "http://localhost:7072" -UseBasicParsing -TimeoutSec 3
        if ($response.StatusCode -eq 200) { break }
    } catch {
        Write-Host -NoNewline "."
        Start-Sleep -Seconds 1
    }
}

Write-Host "`n[+] Service is ready."

# Start tunnel script
Write-Host "[+] Starting tunnel.sh ..."
Start-Process -FilePath "bash" -ArgumentList "tunnel.sh" -NoNewWindow -Wait
