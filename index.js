const hrs = document.querySelector('.zero');
const mins = document.querySelector('.zero1');
const secs = document.querySelector('.zero2');
const slot = document.querySelector('.sl');
// const turn = document.querySelector('');


function timeChanger(){
    let da = new Date();
    let hr = da.getHours();
    let mi = da.getMinutes();
    let se = da.getSeconds();
    hrs.textContent = `${add((hr % 12) || 12)}`;
    mins.textContent = `${add(mi)}`;
    secs.textContent = `${add(se)}`;
    slot.textContent = `${hr >= 12 ? 'PM' : 'AM'}`;
    // turn.textContent = `${hr >= 12 ? 'GOOD AFTERNOON !!' : 'GOOD MORNING !!'}`
}
setInterval(timeChanger,1000);

function add(arange) {
    return arange < 10 ? '0'.concat(arange) : arange;
}
  
  function changeImg(){
  
  const data1 = document.querySelector('#date1')
  const value1 = Number(data1.value);
  const data2 = document.querySelector('#date2')
  const value2 = Number(data2.value);
  const data3 = document.querySelector('#date3')
  const value3 = Number(data3.value);
  const image1 = document.querySelector('.homeimg');
  const text = document.querySelector('.heading1');
  // const chilling = document.querySelector('.head');
  const gooday = document.querySelector('.goo');

  let da = new Date();
  let change = da.getHours();

  
      if(value1 === change){
          text.style.display = "block";
          text.textContent = "wake up !!";
          image1.style.backgroundImage = "url(./wakeup.png)";
          gooday.textContent = "Good Morning";
      }
      else if (value2 === change){
          text.style.display = "block";
          text.textContent = "LET'S HAVE SOME LUNCH !!";
          image1.style.backgroundImage = "url(./lunch.png)";
          gooday.textContent = "Good Afternoon";
      }
      else if(value3 === change){
          text.style.display = "block";
          text.textContent = "GOOD NIGHT !!";
          image1.style.backgroundImage = "url(./sleep.png)";
          gooday.textContent = "Good Night";
      }
      else{
          text.style.display = "none";
          image1.style.backgroundImage = "url(./chillman.png)";
      }
  }
  changeImg();
  
  
  const naacho = document.querySelector('.party');
  naacho.addEventListener('click' , eve);
  
  function eve(){
      const image1 = document.querySelector('.homeimg');
      const text = document.querySelector('.heading1');
      text.textContent = `LET'S NAACHO`;
      image1.style.backgroundImage = "url(./party2.svg)";
      naacho.textContent = "Double click to stop Party !!";
  }
  
  naacho.addEventListener('dblclick', remove);
  function remove(){
      naacho.textContent = "Party Time !!";
      changeImg();
  }



