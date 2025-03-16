const express = require("express");
const os = require("os");

const app = express();
const port = 3000;

app.get("/stats", (req, res) => {
    const cpuUsage = os.loadavg()[0] * 10; // Estimasi CPU Usage
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = ((totalMem - freeMem) / totalMem) * 100;

    res.json({
        cpu: Math.round(cpuUsage),
        memory: Math.round(usedMem)
    });
});

app.listen(port, () => {
    console.log(`Server status berjalan di port ${port}`);
});
