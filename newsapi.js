let newsAPI = "https://newsdata.io/api/1/news?apikey=pub_1587182a01008cb52a7126bd86ebf14540dc8&language=en";

let main = document.querySelector(".main-screen");
let categories=["Business","Technology","Science","Health","Sports","Entertainment"];


for(let i=0; i<categories.length; i++){
    let div = document.createElement("div");
    div.innerText = categories[i];
    div.className = "categories";

    div.addEventListener("click",function(){
        fetchCategoryNews(categories[i]);
    });

    if(i==0){
        fetchCategoryNews(categories[i]);
    }
    main.querySelector(".categories").appendChild(div);
}

async function fetchCategoryNews(category){
    main.querySelector(".news-list").innerHTML="";
    try{
        const res = await fetch(newsAPI + "&category=" + category.toLowerCase());
        const data = await res.json();
        console.log(data); 
        let news = data.results;
        console.log(news);

        for(let i=0; i<4; i++){
            let div=document.createElement("div");
            div.className="item";

            div.innerHTML=
            `<div class ="details">
            <h2>${news[i].title}</h2>
            <p>${news[i].description}</p>
            </div>
            `;

            main.querySelector(".news-list").appendChild(div);
        }


    }catch(msg){}
}