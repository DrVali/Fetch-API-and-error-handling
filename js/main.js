`use strict`;
 function getCountery(e){
  const response = fetch(`https://restcountries.com/v3.1/name/${e}`).then(
  (response)=>response.json()).then(
    
    function(data){
      if(data){
      const div=document.createElement("div");
      div.classList.add("divMain");
      document.body.append(div);
      const nameContry=document.createElement("label");
      nameContry.textContent="name of contery: ";
      div.append(nameContry);
      const Contry=document.createElement("label");
      let ConteryName1=data[0].name.common;
      Contry.innerHTML=`${ConteryName1}`;
      div.append(Contry);
      const br=document.createElement("br");
      let capital=data[0].capital.flat();
      div.append(br);
      const capitalContery=document.createElement("label");
      capitalContery.textContent="capital is: ";
      div.append(capitalContery);
      const capitalName=document.createElement("label");
      capitalName.textContent=`${capital}`;
      div.append(capitalName);
      const br1=document.createElement("br");
      div.append(br1);
      const lContery=document.createElement("label");
      lContery.textContent="population number is: ";
      div.append(lContery);
      const populationEl=document.createElement("label");
      populationEl.textContent=`${data[0].population}`;
      div.append(populationEl);
      }
      else throw "this is not a contry";  

    }

    
    ).catch((err)=>{
      if(err.message==="Failed to fetch"){
      const div2=document.createElement("div");
      div2.classList.add("divMain");
      document.body.append(div2);
      const nameContry12=document.createElement("label");
      nameContry12.textContent="net::ERR_INTERNET_DISCONNECTED ";
      div2.append(nameContry12);}
          else{
      const div=document.createElement("div");
      div.classList.add("divMain");
      document.body.append(div);
      const nameContry1=document.createElement("label");
      nameContry1.textContent="this is not a country  name ";
      div.append(nameContry1);
          }
  }).finally(()=> console.log("end finally"));
}


