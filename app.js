console.log("cliked");
fetch('https://restcountries.eu/rest/v2/all')
.then(res=>res.json())
.then(data=>displayCountry(data))


const displayCountry= countries=>{
  //console.log(countries);
  const uldiv=document.getElementById('countrtyName');
  for(var i=0;i<countries.length;i++){
      console.log(countries[i].name);
      const lidiv= document.createElement('div');
    lidiv.className='country';
    const countryInfo=`
    <h3>${countries[i].name}</h3>
    <h4>${countries[i].capital}</h4>
    `
    lidiv.innerHTML=countryInfo;
    uldiv.appendChild(lidiv);

}

}