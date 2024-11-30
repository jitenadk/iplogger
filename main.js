const path = require("path");
const axios = require("axios");
const express = require("express");
const requestIp = require("request-ip");

// Dashboard server configuration
const dashboardHost = "127.0.0.1";
const dashboardPort = 8080;

// Honeypot server configuration
const honeypotHost = "127.0.0.1";
const honeypotPort = 8081;

// Logs storage
let logs = [];

function startDashboardServer() {
    const app = express();
    const server = app.listen(dashboardPort, dashboardHost);

    server.on("listening", () => {
        console.log(`
        [+] Dashboard server listening on :: http://${dashboardHost}:${dashboardPort}/dashboard`);
    });

    app.get("/dashboard", (req, res) => {
        res.status(200).sendFile(path.join(__dirname, "web", "dashboard.html"));
    });

    app.get("/logs", (req, res) => {
        res.status(200).json(logs);
    });

    app.use((req, res) => {
        res.status(404).send("Dashboard: Route not found.");
    });
}

function startHoneypotServer() {
    const app = express();
    const server = app.listen(honeypotPort, honeypotHost);
    app.use(requestIp.mw());

    server.on("listening", () => {
        console.log(`
        [+] Honeypot server listening on :: http://${honeypotHost}:${honeypotPort}/honeypot`);
    });

    app.get("/honeypot", async (req, res) => {
        const ip = req.clientIp;

        try {
            const response = await axios.get(ip === "127.0.0.1" ? "https://ipinfo.io/" : `https://ipinfo.io/${ip}`);
            const ipDetails = response.data;
            logs.push(ipDetails);
        } catch (err) {
            console.error("[!] Failed to fetch IP details:", err.message);
        }

        res.status(200).sendFile(path.join(__dirname, "web", "honeypot.html"));
    });

    app.use((req, res) => {
        res.status(404).send("Honeypot: Route not found.");
    });
}

startDashboardServer();
startHoneypotServer();
