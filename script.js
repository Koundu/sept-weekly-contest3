const url = `https://api.nasa.gov/planetary/apod?api_key=`
const key = `icMvkBVssmPaZumtAyVQnSxD2q9lXwBK6TgcTMRA`;
const searchForm = document.getElementById("search-form");
const searchBtn = searchForm.querySelector('button');
const searchHistory = document.getElementById("search-history");
// const key = `DEMO_KEY`


fetch(url+key)
    .then(response =>  response.json())
    .then(data => {
        getCurrentImageOfTheDay(data);
        console.log(data.url);
        return data})
    .then(data =>
        searchBtn.addEventListener('click',(event)=>{
            event.preventDefault()
            getImageOfTheDay();
        })
        )
    .catch(err => console.log(err))

    function getCurrentImageOfTheDay(data){
        const imgContainer = document.getElementById("current-image-container");
        const img = document.createElement('img');
        const heading = document.createElement('h2');
        const para = document.createElement('p');
        para.innerText = data.explanation
        heading.innerText = data.title;
        img.src = data.url;
        img.style.width = "fit-content";
        img.style.height = "fit-content";
        imgContainer.appendChild(img);
        imgContainer.appendChild(heading);
        imgContainer.appendChild(para);
    }


    function getImageOfTheDay(){
            const date = searchForm.querySelector('input[type="date"]').value;
        fetch(url+key+"&date="+date)
            .then(response =>  response.json())
            .then(data => {getCurrentImageOfTheDay(data)
                    return data;})
            .then(saveSearch(data.date));
    }

    function saveSearch(date){
        const list = document.createElement('li');
        const anchor = document.createElement('a');
        a.href = date;
        list.innerText = date;
        list.appendChild(anchor);
        searchHistory.appendChild(list);
    }


