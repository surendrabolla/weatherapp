let inputele=document.getElementById("location-input");
let tempele=document.getElementById("temp-value");
let locele=document.getElementById("location");
let weatherdesc=document.getElementById("weather")
let btnn=document.getElementById("btn");

let apiKey='cab6b598abcacc9061229f34e5611b7b';

btnn.onclick=function(){
    if(inputele.value==""){
        alert("enter the valid location")
    }
    else{
        loc=inputele.value;
        url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`
        fetch(url).then(res=>res.json())
        .then(data=>{
            console.log(data)
            const{name}=data
            const{feels_like}=data.main
            const{description}=data.weather[0]
            tempele.innerText=Math.floor(feels_like-273);
            locele.innerText=name;
            weatherdesc.innerText=description

        })
        .catch(()=>{
            alert("enter the valid location")
        })
        inputele.value=""
    }
}