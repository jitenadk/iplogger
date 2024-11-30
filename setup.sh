#!/bin/bash

# Check if script is running as root
if [ "$(id -u)" -ne 0 ]; then
    echo "[-] Installer script must be run as root."
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "[!] Node.js is not installed. Installing it now..."
    sudo apt update && apt install nodejs -y
else
    echo "[+] Node.js is already installed!"
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "[!] Node package manager (npm) is not installed. Installing it now..."
    sudo apt update && apt install npm -y
else
    echo "[+] npm is already installed!"
fi

# Check and install required Node.js packages
echo "[*] Checking and installing required Node.js packages..."
packages=("express" "axios" "request-ip" "path" "nodemon")
for package in "${packages[@]}"; do
    if ! npm list -g "$package" &> /dev/null; then
        echo "[!] $package is not installed. Installing it now..."
        npm install -g "$package"
    else
        echo "[+] $package is already installed!"
    fi
done

echo ""
echo "[+] All required packages are installed."