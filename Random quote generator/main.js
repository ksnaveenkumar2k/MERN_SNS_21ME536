var quotes =[
    {
    quote: "Live to improve Not to Impress.",
                author: "Naveenkumar"
    },

    {
        quote: "Nothing can be done without hope and Confidence.",
                    author: "Ambi"
    },

    {
        quote: "Life is so much simpler when you stop explaninig yourself to people and just do what works for you.",
                    author: "Elon Musk"
    },

    {
        quote: "Earn money because in the end people do not see your Heart,they see your Money.",
                    author: "Allen"
    },

    {
        quote: "Change your life, One thought at a time.",
                    author: "James Allen"
    },

    {
        quote: "We try work on things which billions of people will use everyday.",
                    author: "Sundar pichai"
    },

    {
        quote: "A person who is happy is not because everything is right in his life, He is happy because of his Attitude towords everything in his life is Right.",
                    author: "Sundar Pichai"
    },

    {
        quote: "Focus on education is a big strength.I want to see young people focus on creativity and take more Risks.",
                    author: "Sundar Pichai"
    },

    {
        quote: "The secret to a happy life is to find something you're willing to lose for it.",
                    author: "Haruki Murakami"
    }];

function generateRanQuote(){
    var randomindex = Math.floor(Math.random() * quotes.length);
    var randomquote = quotes[randomindex];

    document.getElementById("quote").innerHTML ="<h1 class ='display-4 fw-bold text-success'>" + randomquote.quote + '<br>' + "<h1 class='h5 text-warning'> Author: " + randomquote.author;
    
}