// scrolling title tag script
var tabLabel = " - " + document.title;
function tabScroll() {
    document.title = tabLabel;
    tabLabel = tabLabel.substring(1, tabLabel.length) + tabLabel.substring(0, 1);
    const last = tabLabel.charAt(tabLabel.length - 1);
    if (last == ' ') {
        setTimeout(tabScroll, 0);
    } else {
        if (last == '-') {
            setTimeout(tabScroll, 3000);
        } else {
            setTimeout(tabScroll, 250);
        }
    }
}
tabScroll();
function wipeTransition() {
    let t = document.getElementById('transitionRectangle');
    t.classList.add("animTrans");
    function stpTrn() {
        t.classList.remove("animTrans");
    }
    let removeTimer = setTimeout(stpTrn, 1200);
}
let theme = 0;
function rotateTheme() {
    const r = document.querySelector(':root');
    let highlights = [
        "#a3a29a",
        "#e8d6c0",
        "#6fd14d",
        "#b4b8be",
        "#f1f2da",
        "#f0f6f0",
        "#e4d6cf",
        "#f0f0f0"
    ];
    let midtone1s = [
        "#c56981",
        "#92938d",
        "#ff6868",
        "#72797e",
        "#ffce96",
        "#7fa663",
        "#9b9880",
        "#8f9bf6"
    ];
    let midtone2s = [
        "#545c7e",
        "#a1281c",
        "#3767ff",
        "#ff2247",
        "#ff7777",
        "#c93038",
        "#7b505c",
        "#ab4646"
    ];
    let shadows = [
        "#282328",
        "#000000",
        "#282727",
        "#32383e",
        "#00303b",
        "#222323",
        "#322623",
        "#161616"
    ];
    if (theme+1 >= highlights.length) {
        theme = 0;
    } else {
        theme = theme+1;
    }
    wipeTransition();
    r.style.setProperty('--highlight', highlights[theme]);
    r.style.setProperty('--midtone1', midtone1s[theme]);
    r.style.setProperty('--midtone2', midtone2s[theme]);
    r.style.setProperty('--shadow', shadows[theme]);
}
font = 0;
function rotateFont() {
    const f = document.querySelector('body');
    const transition = document.getElementById('transitionRectangle');
    let fonts = [
        'DM Sans',
        'Barlow',
        'Cutive Mono',
        'Fredoka One',
        'Kosugi Maru',
        'Public Sans',
        'Sen',
        'Space Mono',
        'Arial Rounded'
    ];
    if (font+1 >= fonts.length) {
        font = 0;
    } else {
        font = font+1;
    }
    wipeTransition();
    f.style.fontFamily = fonts[font] + ", Tahoma";
}
function trolle() {
    alert("aha! you've been fooled, and the button actually did something! -183exe");
}
let links = [
    "https://youtube.com/c/182exe",
    "https://youtube.com/channel/UC-L7G3CaIMmQDCbWSdOS1kA",
    "https://discord.gg/nTBKbg9gGu",
    "https://namemc.com/search?q=182exe",
    "https://namemc.com/search?q=Resourcepac",
    "https://pvprp.com/profile/182exe",
    "https://resourcepacks24.de/profile/182exe",
    "https://github.com/182exe/",
    "https://ko-fi.com/182exe",
    "https://hypixel.net/members/182exe.4237691/",
    "https://182exe.xyz/matrix/",
    "https://182exe.xyz/jibbertyper",
    "https://182exe.xyz/linkbandit",
    "https://182exe.xyz/rotcustom",
    "https://182exe.xyz/links?id=youtube",
    "https://182exe.xyz/pingpong",
]
function openLink(target) {
    window.open(links[target], '_blank');
}
var quotes = [
    "Some people are like slinkies. They aren't really good for anything, but it brings a smile to your face when you push them down a flight of stairs",
    "Bro stop putting the cereal in the fridge",
    "Bean Burrito",
    "Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.",
    "That’s why New York is so great, though. Everyone you care about can despise you and you can still find a bagel so good, nothing else matters. Who needs love when you’ve got lox? They both stink, but only one tastes good.",
    "You should really come with a warning label.",
    "When I'm eating cereal and the 8 foot tall screaming skinless corpse reappears for two seconds before vanishing again.",
    "Why do they call it rush hour when nothing moves?",
    "They said to not give up on my dreams, so I went back to sleep.",
    "One day I will make them onions cry, ya hear me!?",
    "A day without sunshine is, like, night.",
    "Procrastination - The art of keeping up with yesterday.",
    "If you want a guarantee, buy a toaster.",
    "Reality continues to ruin my life.",
    "Tinder: A woman's ego boost and a man's waste of time.",
    "You miss 100% of the shots you don't shoot",
    "Bread: The best thing since wheat",
    "I ran out of ideas, time to do some internet thievery",
    "I don't get paid enough for this.",
    ":troll:",
    "Why do you read these?",
    "clickbait works really well; it's just not very highly appreciated",
    "one failure does not mean demise",
    "Its all shits and giggles until someone giggles and shits.",
    "i have never been more excited to put illegal software on the phone of whoever i first talk to",
    "never judge a foot by its toes",
    "who are you and why are you eating my bathtub?",
    "vending machine related deaths rise year by year",
    "\/give @a diamond 64",
    "look behind you",
    "*you're",
    "join my discord to suggest quotes and stuff",
    "me when",
    "If I had a penny for every time I clicked in Fortnite, I'd be broke.",
    "20 Dollars later...",
    "Join my discord if you want to suggest quotes to be added here!",
    "One time in second grade I fell off the play structure and hit my head on a pole",
    "Reasons why 'nobody asked' is a terrible argument: 1. You don't actually know that nobody asked 2. This is a public internet chat, I can say what I want and I don't care whether or not you think that someone 'asked.' 3. If everyone had to have someone else ask a question before another person could say something, then that would mean that every word ever spoken would be an answer. And that's just not how it works.",
    "Your imagination can be revamped into literally anything. It's very useful when you're bored. Just go imagine gaming.",
    "have you subscribed?",
];
const usedQuotes = [];
let quotesUsed = 0;
function genQuote() {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    while (usedQuotes.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random() * (quotes.length));
    }
    usedQuotes.push(randomNumber);
    document.getElementById('quoteBox').innerHTML = "\"" + quotes[randomNumber] + "\"";
    if ( quotesUsed === quotes.length ) {
        quotesUsed = 0;
    }
}

// start all nessecary functions
function init() {
    const splash = document.getElementById("splash");
    const transition = document.getElementById("transitionRectangle");
    splash.style.opacity=0;
    transition.classList.add("animRect");
    function endSplash() {
        splash.remove();
        transition.classList.remove("animRect");
        transition.classList.remove("splashStateRect");
        transition.classList.add("noAnimRect");
    }
    let d = setTimeout(endSplash, 1000);
    
}
