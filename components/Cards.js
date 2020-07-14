// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

function createArticle(data){
 
    const card = document.createElement('div'),
          headline = document.createElement('div'),
          author = document.createElement('div'),
          imgContainer = document.createElement('div'),
          img = document.createElement('img');
          name = document.createElement('span');

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')
    img.src = data.authorPhoto;

    
    headline.textContent = data.headline;
    name.innerHTML = `by ${data.authorName}`;


    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    // card.appendChild(name);
    

    card.addEventListener('click', event=>{
        console.log(headline.innerHTML)
    })
    return card;
}

const cardContainer = document.querySelector('.cards-container');
const articles = 'https://lambda-times-backend.herokuapp.com/articles'
axios.get(articles)
.then(function(res){
    
    // const section = res.data.articles;
    let sections = []
    Object.entries(res.data.articles).forEach((entry) =>{
        sections.push(entry)
    })
    // console.log(sections);

   
    sections.forEach(articles =>{
        if(articles.length>1){
            // console.log(articles)
            let testObject;
            articles.forEach(article =>{
                if(article === Object(article)){
                    testObject = article
                }
            })
            console.log(testObject)
            testObject.forEach(singles =>{
                 const newArticle = createArticle(singles);
                console.log(newArticle)
                cardContainer.appendChild(newArticle);
            })
            
        }
    })


    // let innerArticles = []
    // selectArticles.forEach(section =>{
    //     console.log(section);
    //     section.forEach(articles =>{
    //         // console.log(articles.length);
    //         // articles.forEach(article =>{
    //         //     console.log(article)
    //         // })
    //         // const newArticle = createArticle(articles);
    //         // console.log(newArticle)
    //         // cardContainer.appendChild(newArticle);
        // })
    // })

})
.catch(function(error){
    debugger
    console.log(error)
})