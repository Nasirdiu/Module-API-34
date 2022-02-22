const loadKanye =()=>{
    fetch('https://api.kanye.rest/')
    .then(res=> res.json())
    .then(data=> displayLoad(data))

}

const displayLoad =kanya =>{
    const kanyeQuta=document.getElementById('quta');
    // console.log(kanya);
    kanyeQuta.innerText=kanya.quote;
}