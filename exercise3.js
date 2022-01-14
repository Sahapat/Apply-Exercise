import puppeteer from 'puppeteer'

(async () => {
    const fundName = process.argv.slice(2)
    
    if (fundName.length === 0) {
        console.error('Not Provide Fund to read, The first arguments is fund name to read NAV')
        return
    }

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--use-gl=egl']
    })
    const page = await browser.newPage()
    await page.goto('https://codequiz.azurewebsites.net/')
    await page.click('input[value=Accept]')

    await page.waitForSelector('table')
    const targetEl = await page.$('table')

    const htmlTableString = await page.evaluate(el => el.innerHTML, targetEl)
    
    let focusHtmlString = htmlTableString.slice()

    const targetContentIndexStart = htmlTableString.indexOf(fundName)
    if (targetContentIndexStart === -1) {
        console.log(`not found Nav with fund name ${fundName}`)
        return await browser.close()
    }
    focusHtmlString = focusHtmlString.slice(targetContentIndexStart)
    const resultContentIndexStart = focusHtmlString.indexOf('<td>')

    // reading result
    let result = ''
    let focusResultIndex= resultContentIndexStart+4
    while(focusHtmlString[focusResultIndex] !== '<') {
        result += focusHtmlString[focusResultIndex]
        focusResultIndex++
    }

    console.log(result)

    await browser.close()
})()
