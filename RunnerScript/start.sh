#!/bin/bash

cat << "EOF"
  ___                _   ___                
 / __|_ __  __ _ _ _| |_| __|__ _ _  __ ___ 
 \__ \ '  \/ _` | '_|  _| _/ -_) ' \/ _/ -_)
 |___/_|_|_\__,_|_|  \__|_|\___|_||_\__\___|
                                            
Name : SmartFence System
Description : Internet of Things Early Warning System and Monitoring For Fence
Version : 1.0.0
EOF

echo -e "[+] Checking Docker..."
if ! command -v docker &> /dev/null; then
    echo "[-] Docker is not installed. Please install Docker first."
    exit 1
fi

echo -e "\n[*] Running Microservice ..."
cd ../microservices
echo -e "[+] Running Database ..."
cd DatabaseService && docker compose up -d
echo -e "[+] Running Device Management ..."
cd ../DevicesManagement && docker compose up -d
echo -e "[+] Running Sensor Management ..."
cd ../SensorMQTT && docker compose up -d
echo -e "[+] Running Users Management ..."
cd ../UsersManagement && docker compose up -d
echo -e "[+] Running AnalyticsManagement Service ..."
cd ../AnalyticsManagement && docker compose up -d
echo -e "[+] Running LandingPoint Service ..."
cd ../LandingEndpoint && docker compose up -d
# cd ../UsersManagement && docker compose up -d

echo -e "[+] All Services are running ..."

echo -e "\n[*] Running Clouflare Tunnel ..."
cd ../../scripts

# curl to http://localhost:7072 to ensure the service is up
echo -e "[+] Waiting for the service to be ready ..."
while ! curl -s http://localhost:7072 > /dev/null; do
    echo -n "."
    sleep 1
done
if [ $? -ne 0 ]; then
    echo -e "\n[-] Service is not responding. Please check the logs."
    exit 1
fi

# Start the tunnel and extract the public URL
bash tunnel.sh
