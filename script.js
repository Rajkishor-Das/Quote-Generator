let content = document.getElementById('content');
let author = document.getElementById('author');

const api_url = "https://api.quotable.io/random";
// When we initialize api_url inside the function then does not required any parameter.

async function generateQuote(url) {
  const response=await fetch(url)
  const data=await response.json()
  // console.log(data)

  content.innerHTML=data.content
  author.innerHTML=data.author
}

function tweet(){
  window.open("https://twitter.com/intent/tweet?text="+content.innerHTML+" --- by "+author.innerHTML, "Tweet Window", "width=500", "height=300")
}