// Deterministically renders story.html frame-by-frame by scrubbing all CSS animations.
const { chromium } = require('playwright')
;(async () => {
    const [html, outDir, seconds, fps] = [process.argv[2], process.argv[3], +process.argv[4], +process.argv[5]]
    const b = await chromium.launch()
    const p = await b.newPage({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1.5 })
    await p.goto('file://' + html)
    await p.waitForTimeout(800)
    await p.evaluate(() => document.getAnimations().forEach((a) => a.pause()))
    const total = Math.round(seconds * fps)
    for (let f = 0; f < total; f++) {
        const t = (f / fps) * 1000
        await p.evaluate((t) => document.getAnimations().forEach((a) => { a.currentTime = t }), t)
        await p.screenshot({ path: `${outDir}/f${String(f).padStart(5, '0')}.jpg`, type: 'jpeg', quality: 92 })
    }
    await b.close()
})()
