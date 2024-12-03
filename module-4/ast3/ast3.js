// Define the API URL
let form = document.querySelector("#tv-show")


form.addEventListener('submit',async function(evt) {
    evt.preventDefault()
    const query = document.querySelector('input[name=q]').value;
    try{
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        const tvshows = await response.json();
        console.log(tvshows)
        for(const tvshow of tvshows){
            const html = `<article><h2>${tvshow.show.name}</h2><a href="${tvshow.show.url}" target="_blank">${tvshow.show.url}</a><img src="${tvshow.show.image?.medium}" alt="${tvshow.show.name}"><div>${tvshow.show.summary}<div></article>`
            document.getElementById("result").innerHTML+=html
        }
    } catch(error){console.log(error.message)}
})