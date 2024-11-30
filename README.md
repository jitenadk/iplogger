# IP Logger with Honeypot and Dashboard

A simple Node.js-based IP logger application that logs client IP addresses through a honeypot endpoint and displays the logs on a web-based dashboard.

## Features
- Log client IP addresses and fetch details from [ipinfo.io](https://ipinfo.io)
- Web-based Dashboard for viewing logs
- Honeypot endpoint to collect and log IP information
- Lightweight, easy-to-deploy, and customizable

## Prerequisites
Ensure you have the following installed:
1. Node.js (v14 or higher)
2. npm (Comes with Node.js)

## Installation

### Clone the Repository
```bash
git clone https://github.com/<username>/<repo>.git
cd <repo>
```

### Install Dependencies
```bash
npm install
```

## Configuration
By default, the Dashboard runs on port `8080` and the Honeypot runs on port `8081`. You can modify the ports in the `main.js` file:

```javascript
const portDashboard = 8080;
const portHoneypot = 8081;
```

## Running the Application

### Development Mode (with auto-restart)
```bash
npm run test-honeypot
```
Uses `nodemon` to auto-restart the server on file changes.

### Production Mode
```bash
npm run init-honeypot
```

## Accessing the Application

### Dashboard
View logged IP information:  
**URL**: http://127.0.0.1:8080/dashboard

### Honeypot
Simulates a trap endpoint to log client IP details:  
**URL**: http://127.0.0.1:8081/honeypot

### View Logs
Retrieve logs as JSON:  
**URL**: http://127.0.0.1:8080/logs

## File Structure
```
project/
├── node_modules/          # Installed dependencies
├── web/
│   ├── dashboard.html     # Frontend for the dashboard
│   ├── honeypot.html      # Honeypot success page
├── main.js                # Main application logic
├── package.json           # Project metadata and dependencies
├── package-lock.json      # Dependency tree for reproducible builds
└── README.md              # Project documentation
```

## How It Works

### Honeypot Endpoint
- Logs IP details from clients accessing `/honeypot`
- Fetches IP information from ipinfo.io
- Stores logs in memory

### Dashboard
- Serves `dashboard.html` to display collected IP logs
- Access logs through the `/logs` endpoint

### Error Handling
- Handles server errors and invalid IP requests gracefully

## Dependencies
The project uses the following Node.js packages:
- **axios**: For HTTP requests to fetch IP details
- **express**: For creating the web server
- **request-ip**: For extracting client IP addresses
- **path**: For handling file paths

Install all dependencies via:
```bash
npm install
```

## Contributing
1. Fork the repository
2. Create a new branch:
```bash
git checkout -b feature-name
```
3. Make your changes and commit:
```bash
git commit -m "Added new feature"
```
4. Push to the branch:
```bash
git push origin feature-name
```
5. Open a pull request

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
**Author**: Jiten Adhikari  
📧 Email: jitenadhikari001@gmail.com
