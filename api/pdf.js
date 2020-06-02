import chrome from 'chrome-aws-lambda';
import puppeteer from 'puppeteer-core';

const exePath = process.platform === 'win32'
    ? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
    : process.platform === 'linux'
    ? '/usr/bin/google-chrome'
    : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

export default async (req, res) => {
    const url = `${req.headers['x-forwarded-proto']}://${req.headers.host}`;

    const { body } = req;

    await chrome.font('https://raw.githack.com/googlei18n/noto-emoji/master/fonts/NotoColorEmoji.ttf');

    const browser = await puppeteer.launch(
        process.env.NODE_ENV === 'production'
        ? {
            args: [
                ...chrome.args,
                '--enable-font-antialiasing',
                '--font-render-hinting=none',
                '--ppapi-antialiased-text-enabled=1'
            ],
            executablePath: await chrome.executablePath,
            headless: chrome.headless,
        }
        : {
            args: [],
            executablePath: exePath,
            headless: true
        }
    );

    const page = await browser.newPage();

    await page.setViewport({
        width: 794,
        height: 1123,
        deviceScaleFactor: 1,
    });

    await page.goto(`${url}/#/${body}`, {
        waitUntil: [
            'domcontentloaded',
            'networkidle0'
        ]
    });

    const pdf = await page.pdf({
        format: 'A4',
        printBackground: true
    });

    await browser.close();

    res.setHeader('Content-Type', 'application/pdf'),
    res.setHeader('Content-Length', pdf.length),

    res.send(pdf);
};
