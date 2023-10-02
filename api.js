


const public_key = "b46ecdf683f91ea5fdb20dc8f7fd6955";

var timee = Date.now();
// console.log(timee);
const timestamp = 1695506584671;
// const timestamp = timee;

const hash_value = "88ba17a30637e72455d89fad9f135f80";







//  const url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${public_key}&hash=${hash_value}&nameStartsWith=${inputval}`;
//   const url = "https://gateway.marvel.com/v1/public/characters?ts=1695506584671&apikey=b46ecdf683f91ea5fdb20dc8f7fd6955&hash=88ba17a30637e72455d89fad9f135f80&nameStartsWith=spider";


//  document.getElementsById("wrapper-container");


 async function  subm() {
    var input_search_val =    document.getElementById("searchbar").value;
   
if (input_search_val == "") {
    alert("type superhero name ");
    
}


// console.log(gg());

const  url = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${public_key}&hash=${hash_value}&nameStartsWith=${input_search_val}`;
console.log(url);
    const response = await fetch(url);
    const jsonData = await response.json();
    console.log(jsonData.data.results);
    // arr= jsonData.data.results;
    // console.log(arr);

    jsonData.data["results"].forEach((element) => {
       let imgg = document.createElement("img");
       let title = document.createElement("p");  
       let detilss = document.createElement("p");
       let idd = document.createElement("p");

       
  
      
    imgg.src = element.thumbnail.path+"."+element.thumbnail.extension;
    
    title.className ="superheroimg_title";
    imgg.className="superheroimg";
    detilss.className = "superhero_detail";
    
    idd.innerHTML = element.id;
    title.innerHTML = element.name;
    detilss.innerHTML = element.description;

   
    // idd.innerHTML = element.id
    console.log(element.id)
    // details.innerHTML element.
    // console.log(element.thumbnail.path+"."+element.thumbnail.extension);
    console.log(imgg.src);
    document.getElementById("superhero_img").appendChild(imgg);
     document.getElementById("superhero_img").appendChild(idd);
    document.getElementById("superhero_img").appendChild(title);
    document.getElementById("superhero_img").appendChild(detilss);
    // document.getElementById("searchbar").value = "click backspce";
   
    

    
})
 }
