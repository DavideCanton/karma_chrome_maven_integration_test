const {chromePathFile, confFactory} = require('./karma.base-config');
const fs = require('fs');

module.exports = function (config)
{
    const path = fs.readFileSync(chromePathFile, {encoding: 'utf-8'}).trim();
    try
    {
        fs.unlinkSync(chromePathFile);
    } catch (e)
    {
        console.warn(`Temp file ${chromePathFile} deletion failed: ${e}`);
    }

    try
    {
        const st = fs.statSync(path, {});
        if (!st.isFile())
        {
            console.error(`Chrome binary expected at ${path} not found`);
            process.exit(1);
        }
    } catch (e)
    {
        console.error(e);
        process.exit(1);
    }

    process.env.CHROME_BIN = path;

    const conf = confFactory(config);
    conf.singleRun = true;
    conf.browsers = ['ChromeHeadless'];
    config.set(conf);
};
