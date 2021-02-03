const fetchSimpsons = () => {
    const url ="https://simpsons-quotes-api.herokuapp.com/quotes"
    axios.get(url)
        .then(function(response){
            return response.data;
        })
        .then(function(quote){
            console.log("quote:", quote)
        
    
    const simpsonHtml =`
    <h1>${quote[0].character}</h1>
    <img src="${quote[0].image}" />
    <p>${quote[0].quote}</p>`

    document.querySelector('#simpson').innerHTML = simpsonHtml;
    })
}

fetchSimpsons();