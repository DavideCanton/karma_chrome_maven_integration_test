const PCR = require("puppeteer-chromium-resolver");
const {chromePathFile} = require('./karma.base-config');
const fs = require('fs');

// node waits for promise termination by default
PCR({
    defaultHosts: ["https://storage.googleapis.com"]
}).then(pcr =>
{
    fs.writeFileSync(chromePathFile, pcr.executablePath, {encoding: 'utf-8', mode: 0o644});
});