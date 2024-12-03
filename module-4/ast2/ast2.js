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
            const html = `<article><h3>${tvshow.show.name}</h3></article>`
        }
    } catch(error){console.log(error.message)}
})