const countries = () => {
  fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => displayCountry(data));
};
countries();
const displayCountry = (data) => {
  const countriesDiv = document.getElementById("contries");
  data.forEach((country) => {
    // console.log(country);
    const h3 = document.createElement("h3");
    const div = document.createElement("div");
    div.classList.add("count");
    div.innerHTML = `
    <h3>Name:${country.name}</h3>
    <h4>alpha3Code:--${country.alpha3Code}</h4>
    <h5>Area:--${country.area}</h5>
    <p>${country.capital}</P>
    <button onclick="loadCountries('${country.name} ')">Details</button>
    `;
    // h3.innerText = `Name:${country.name}--alpha3Code-- ${country.alpha3Code} area--${country.area} `;
    // div.appendChild(h3);
    countriesDiv.appendChild(div);
  });
};

const loadCountries=name=>{
    // console.log(name);
    const url= `https://restcountries.com/v2/name/${name}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayName(data[0]))
};

const displayName= count=>{
    // console.log(count);
    const countryDIv=document.getElementById('name');
    countryDIv.innerHTML=`
    <h5>Name ::${count.name}</h5>
    <p>Region --${count.region}</p>
    <p>Area --${count.area}</p>
    <img width='100px' src='${count.flag}'>
    `

}