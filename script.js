const generateMemeBtn = document.querySelector(".memeBtn")
const memeTitle = document.querySelector(".meme_title")
const memeImage = document.querySelector("img")
const memeAuther = document.querySelector(".meme_author")



const updateDetails = (url, title, author) =>{
    memeImage.setAttribute("src", url)
    memeTitle.innerHTML =title
    memeAuther.innerHTML = `Mwme by :${author}`
}

const generateMeme = async () =>{
   try {
    const data = await fetch("https://meme-api.com/gimme/wholesomememes")
    const responseData = await data.json()
    console.log(responseData);
    updateDetails(responseData.url, responseData.title, responseData.author)

   } catch (error) {
    console.log("Error in API", error);
    
   }
   
}

generateMemeBtn.addEventListener("click", generateMeme)
generateMeme()