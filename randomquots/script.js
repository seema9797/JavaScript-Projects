const text =document.getElementById("quote")
const author=document.getElementById("author")
const tweetButton=document.getElementById("tweet");


const getNewQuots=async()=>{

    var url="https://type.fit/api/quotes";


    const response=await fetch(url);
    const allQuotes=await response.json();

    const index=Math.floor(Math.random()*allQuotes.length);
    const quote=allQuotes[index].text;
    const author=allQuotes[index].author;

    if(author ==null){
        author ="Seema";
    }
    text.innerHTML=quote;
    author.innerHTML=`~ ${author}`;

 tweetButton.href=`https://twitter.com/intent/tweet?text= ${quote} ~ ${author}` 
}

getNewQuots();