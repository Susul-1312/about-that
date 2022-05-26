const cards = [
    {
        "title": "An interesting Title",
        "content": "Things have indeed happened recently. I ate some pie. It was really good",
        "timestamp": 1653059744000
    },
    {
        "title": "An OS specific power issue",
        "content": "My laptops been pretty weird recently. Random shutdowns, not even shutdowns, a sudden lack of power, which, in hindsight, started after i plugged in my old HDD to use as a backup drive. The astute thinkpad fans among you will likely have realised whats happened now, but I'll walk you through what I had to figure out. Eventually, after some pondering and many many shutdowns and autosaves saving the day, I concluded that it wasn't just coincidence, it did always happen when I moved the laptop. Initially, i thought it was obviosu then - a loose connection either in the new battery from china, or the clips or contacts had worn out in the laptop. But no. all these were fine. I could wiggle the battery back and forth in its socket without issue, but if i moved the laptop in a certain way, all hell broke loose. My next port of call was loose connections inside the motherboard - but with me still stuck on a train for a few hours, I thought I'd just have to stick with constantly saving my work. Then, after one of these random shutdowns, I forgot to select windows booting up (I've been having to use Autodesk software so its been windows all the time recently) and before I could hit a key, the countdown had counted down and Fedora was booting up. I went to hit the point on the laptop case I thought triggered these shutdowns, and nothing happened. I hit it again - still nothing. Then something dawned on me - what I'd been assuming was a hardware problem, only happened in Windows. I did some googling - my laptop, an x230, has an accellerometer to detect shocks and turn off the laptop to protect the delicate hard drives these laptops were shipped with (of course, this was a feature that only works in Windows). Later software updates disabled this when SSDs are installed, but something caused it to reactivate when I plugged in my old HDD using an adapter. After booting back into windows, I had to install Lenovo vantage again and disable the feature through Lenovos ancient bloatware. All fixed. No longer am I plagued by random shutdowns! Fuck windows. Pos.",
        "timestamp": 1
    },
    {
        "title": "Contact made with extra-terrestrials",
        "content": "NASA has just received word that communication was made with a race of inteligent biped lizards, approximately 15 years ago. Human ships landed on a frozen moon to meet with who they're hoping are humanity's soon-to-be allies. Linguists appeared to have significant issues trying to translate as the universal translator AI was striking on the day due to working hours.",
        "timestamp": 7974810000
    }
]

export async function get({}) {
    return {status: 200, body: {cards}}
}
