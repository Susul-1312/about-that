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
    },
    {
        'title': "IGN UK Podcast #645: Chip 'n Dale 'n Cardy 'n Joe",
        'content': "Chip 'n Dale: Rescue Rangers, Saints Row, Top Gun: Maverick, and Tunic.",
        'timestamp': 1653086263
    }, {
        'title': 'Death Stranding 2: Norman Reedus Seemingly Confirms a Sequel',
        'content': 'Lead actor Norman Reedus has seemingly confirmed he and Hideo Kojima are working on a Death Stranding sequel.',
        'timestamp': 1653085768
    }, {
        'title': "Embracer Eyes 'Sequels, Remakes, Remasters, and Spin-offs' for Deus Ex, Tomb Raider, and More",
        'content': 'Embracer Group - the owner of Tomb Raider, Deus Ex, and other IPs bought from Square Enix in early May - sees "great potential" in making sequels, remakes, remasters, and spin-offs of these franchises.',
        'timestamp': 1653083278
    }, {
        'title': 'Hearthstone: Blizzard Refunds Players for Infamously Expensive Card - and Nerfs It',
        'content': "Blizzard has nerfed Hearthstone's infamous Drek'Thar card that it was selling for $25, and has offered refunds to the players who already bought it.",
        'timestamp': 1653080417
    }, {
        'title': "Assassin's Creed Origins Gets Game Pass Release Date",
        'content': "Assassin's Creed Origins now has an official Xbox Game Pass release date.",
        'timestamp': 1653070777
    }, {
        'title': 'Of Course Someone Remade the Absurdly Realistic Unreal Engine 5 Train Station Demo in Dreams',
        'content': "Someone has already remade the absurdly realistic Unreal Engine 5 train station demo inside PlayStation's Dreams.",
        'timestamp': 1653069999
    }, {
        'title': 'Pokémon Cards Just Added an Amazing New Ditto Mechanic',
        'content': 'The Pokémon GO trading card set is adding an amazing transforming Ditto mechanic straight from the game.',
        'timestamp': 1653067410
    }, {
        'title': 'Evil Dead: The Game Review',
        'content': 'Evil Dead: The Game is an asymmetric multiplayer game of cat and mouse that’s compelling and exhilarating, despite being rough around the edges.',
        'timestamp': 1653025450
    }, {
        'title': 'Syphon Filter Will Get Trophies When It Comes to New PlayStation Plus',
        'content': 'Games from the original PlayStation will receive retroactive Trophy support and the first one will be Syphon Filter. Hopefully, that means more games will have it in the future.',
        'timestamp': 1653022004
    }, {
        'title': "Halo: Season 1 Ending Explained - What Is Master Chief's Fate in Season 2?",
        'content': "Halo has ended its first season on Paramount+, but the fight is far from finished. 343 Industries' Kiki Wolfkill stops by to help IGN break down the events of the finale and what it means for Master Chief and Cortana's future.",
        'timestamp': 1653015197
    }, {
        'title': 'New PS Plus’ Games Lineup (Partially) Revealed - Beyond Episode 750',
        'content': "On this week's episode of Podcast Beyond!, we dig into new PlayStation Plus' games lineup so far, rumors of a Silent Hill return, and much more!",
        'timestamp': 1653004877
    }, {
        'title': 'Marvel Snap Is the Long-Awaited CCG From the Former Hearthstone Devs at Second Dinner',
        'content': 'Second Dinner, the independent studio founded by former Hearthstone director Ben Brode, is finally unveiling the mysterious Marvel project it’s been working on: Marvel Snap.',
        'timestamp': 1653004837
    }, {
        'title': 'Multiversus Preview',
        'content': '',
        'timestamp': 1653001238
    }, {
        'title': 'God of War Ragnarök Will Have More Than 60 Accessibility Features',
        'content': 'God of War Ragnarok will include more than 60 accessibility features when it arrives on PlayStation 4 and 5 later this year.',
        'timestamp': 1652999453
    }, {
        'title': 'Daily Deals: The Perfect PS5 TV Has Dropped to Its Lowest Price Ever',
        'content': "The perfect 4K TV for PS5 is currently down to its lowest price ever in the UK. There's also great savings to be found on PS5 SSDs, Samsung phone chargers, Horizon Forbidden West LEGO, and more.",
        'timestamp': 1652998008
    }, {
        'title': 'The Witcher 3 Next-Gen Versions Set for Q4 2022 Release',
        'content': 'CD Projekt Red has announced that the PS5 and Xbox Series X versions of The Witcher 3: Wild Hunt are planned to release at the end of this year.',
        'timestamp': 1652997829
    }, {
        'title': 'Sony Has Released Its First Official PS5 Bundle with Horizon Forbidden West',
        'content': 'Sony has released the first official PS5 bundle, packaging the console with Horizon Forbidden West at a small discount.',
        'timestamp': 1652994341
    }, {
        'title': 'Gearbox Has 9 AAA Games in Development as Owner Embracer Continues to Grow',
        'content': 'Gearbox currently has nine AAA games in development as it continues to grow alongside its colossal owner Embracer Group.',
        'timestamp': 1652992996
    }, {
        'title': 'Fortnite is Available For All GeForce Now Members',
        'content': 'After being in beta testing for five months, Nvidia has announced today that Fortnite is now available to all subscribers of GeForce Now.',
        'timestamp': 1652990426
    }, {
        'title': 'eFootball: New Update Launches in June, Finally Adds a Mobile Version',
        'content': "eFootball's next update will be available on June 2 with an official mobile version launching the same day.",
        'timestamp': 1652989155
    }
]

export async function get({params}) {
    return {status: 200, body: cards}
}
