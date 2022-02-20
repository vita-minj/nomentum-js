const quotes = [
    {
        quote: "You miss 100% of the shots you dont't take",
        auther: "Wayne Gretzky", 
    },
    {
        quote: "Success is journey, not a destination",
        auther: "Ben Sweetland", 
    },
    {
        quote: "I will prepare, and some day my chancewill come",
        auther: "Abraham Lincoln", 
    },
    {
        quote: "If you do not walk today, you'll have to run tomorrow",
        auther: "Anonymous", 
    },
    {
        quote: "Do not take life too seriously. No one will get out of it alive",
        auther: "Elbert Stevenson", 
    },
    {
        quote: "Be nice to people on your way up because you'll meet them again on your way down",
        auther: "Wilson Mizner", 
    },
    {
        quote: "The world will not change until we do",
        auther: "Jim Walls", 
    },
    {
        quote: "As you grow older, you'll find the only things you regret are the things you didn't do",
        auther: "Zachary Scott ", 
    },
    {
        quote: "Learn from the mistakes of others. You can't live long enough to make them all yourself ",
        auther: "Carlyle", 
    },
];
const quote = document.querySelector("#quote span:first-child"); 
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = `- ${todayQuote.auther} -`;