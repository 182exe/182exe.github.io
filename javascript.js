/* Quote Bank */
var quotes = [
  "Some people are like slinkies. They aren't really good for anything, but it brings a smile to your face when you push them down a flight of stairs",
  ";l;;gmlxzssaw. -US Strategetic Command on Twitter",
  "Bro stop putting the cereal in the fridge",
  "Bean Burrito",
  "Sometimes I like to think about my past actions, and then imagine how I could have made them SO much worse.",
  "Every hour spent shopping with parents is 6 years back on earth",
  "iusehuzuni is an abusive McDonalds Employee.",
  "Gentlemen, you can’t fight in here. This is the war room!",
  "Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.",
  "I want my children to have all the things I couldn't have as a kid. Then I want to move in with them.",
  "Never follow anyone else’s path. Unless you’re in the woods and you’re lost and you see a path. Then by all means follow that path.",
  "Common sense is like deodorant. The people who need it most never use it.",
  "As you get older, three things happen. The first is your memory goes, and I can’t remember the other two.",
  "That’s why New York is so great, though. Everyone you care about can despise you and you can still find a bagel so good, nothing else matters. Who needs love when you’ve got lox? They both stink, but only one tastes good.",
  "Here’s some advice: At a job interview, tell them you’re willing to give 110 percent. Unless the job is a statistician.",
  "You should really come with a warning label.",
  "Feed your own ego. I’m busy.",
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
  "Who named Africa?",
  "Bread: The best thing since wheat",
  "Commas save lives",
  "What the hell is a tree?",
  "I ran out of ideas, time to do some internet thievery",
  "I don't get paid enough for this.",
  ":troll:",
  "why do you read these?",
  "clickbait works really well; it's just not very highly appreciated",
  "javascript is baby mode coding",
  "one failure does not mean demise",
  "never give up",
  "try your very hardest; it will *always* pay off.",
  "one day, all of us will die. so live your life to its fullest.",
  "learn from your problems",
  "honesty is incredibly important",
  "Its all shits and giggles until someone giggles and shits.",
  "i have never been more excited to put illegal software on the phone of whoever i first talk to",
  "never judge a foot by its toes",
  "the day that someone rick rolls rick astley is the day that humanity evolves.",
  "chaos is funny.",
  "heheheha",
  "who are you and why are you eating my bathtub?",
  "vending machine related deaths rise year by year",
  "sub to 182exe",
  "who is dream",
  "javascript is kinda like baby mode java, and scratch is just baby mode javascript.",
  "\/give @a diamond 64",
  "look behind you",
  "*you're",
  "join my discord to suggest quotes and stuff",
  "me when",
  "how are people still getting hacked with fake discord links?",
  "If I had a penny for every time I clicked in Fortnite, I'd be broke.",
  "20 Dollars later...",
  "Nobody has explained to me what's so bad about furries, with actual reasons. Like sure, you might find them weird, and some of them have done disgusting things, but that usually doesn't define a whole fandom, like fr, from what I've seen most of them are really chill people.",
  "Spoon cults exist",
  "Top or bottom? (like, do you eat through more of the bottom or the top part of the bread in a cheeseburger?)",
  "You matter",
  "Join my discord if you want to suggest quotes to be added here!",
  "Roblox is better than Facebook Metaverse you can't change my mind.",
  "One time in second grade I fell off the play structure and hit my head on a pole",
  "Reasons why 'nobody asked' is a terrible argument: 1. You don't actually know that nobody asked 2. This is a public internet chat, I can say what I want and I don't care whether or not you think that someone 'asked.' 3. If everyone had to have someone else ask a question before another person could say something, then that would mean that every word ever spoken would be an answer. And that's just not how it works.",
  "Your imagination can be revamped into literally anything. It's very useful when you're bored. Just go imagine gaming.",
  "Money add then multiply",
  "have you subscribed?",
];

// Create clientside array that will be used to store already used quote IDs //
const usedQuotes = [];

// Create a variable to show how many quotes there was generated //
let quotesUsed = 0;

// New Quote Function (checks for already used quotes using the usedQuotes //
function newQuote() {
  
  // Generate a random number //
  let randomNumber = Math.floor(Math.random() * (quotes.length));
  
  // While the random number generated is in usedQuotes, generate a new number so as there is not any repeats //
  while (usedQuotes.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * (quotes.length));
  }
  
  // Add 1 to the amount of quotes used //    quotesUsed = quotesUsed + 1;
  
  // Add the number that the random value chose to usedQuotes //
  usedQuotes.push(randomNumber);
  
  // Give HTML the quote based on the value of the random number //
  document.getElementById('quoteDisplay').innerHTML = "\"" + quotes[randomNumber] + "\"";
  if ( quotesUsed === quotes.length ) {
    quotesUsed = 0;
  }
}
