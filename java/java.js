 function buyTicket(){
    const element = document.getElementById('ticket');
    element.scrollIntoView({ behavior: "smooth" });
 }   
 let clicks = 0;
 const seatPrice= 550;
 const seatNumber= 8;
function seatClicked2(){
  clicks += 1;
  number = document.getElementById("clicks").innerHTML = clicks;
  const clicked = document.getElementById('A2')
  clicked.style.backgroundColor ='green';
  const seatName = clicked.innerText;
  const replacedSeat2= document.getElementById('replaced-seat2');
  replacedSeat2.innerText=seatName; 
  const seatDetails=document.getElementById('seat-details2') 
  seatDetails.classList.remove('hidden');
  let totalPrice = document.getElementById('total-price');
  totalPrice.innerText = number * seatPrice ; 
  const seatReaming= document.getElementById('total-seat');
  seatReaming.innerText= seatNumber - number;
     
}
 function seatClicked(){
  clicks += 1;
  number = document.getElementById("clicks").innerHTML = clicks;
  const clicked = document.getElementById('A1')
  clicked.style.backgroundColor ='green'; 
  seatName=clicked.innerText;
  const replacedSeat= document.getElementById('replaced-seat');
  replacedSeat.innerText=seatName; 
  const seatDetails=document.getElementById('seat-details1') 
  seatDetails.classList.remove('hidden');
  let totalPrice = document.getElementById('total-price');
  totalPrice.innerText = number * seatPrice ;
  const seatReaming= document.getElementById('total-seat');
  seatReaming.innerText= seatNumber - number;
 }
 function seatClicked3(){
    clicks += 1;
    number = document.getElementById("clicks").innerHTML = clicks;
    const clicked = document.getElementById('A3')
    clicked.style.backgroundColor ='green';
    seatName=clicked.innerText;
    const replacedSeat= document.getElementById('replaced-seat3');
    replacedSeat.innerText=seatName; 
    const seatDetails=document.getElementById('seat-details3') 
    seatDetails.classList.remove('hidden')
    let totalPrice = document.getElementById('total-price');
    totalPrice.innerText = number * seatPrice ;
    const seatReaming= document.getElementById('total-seat');
    seatReaming.innerText= seatNumber - number;
 }
 function seatClicked4(){
  clicks += 1;
  number = document.getElementById("clicks").innerText = clicks;
  const clicked = document.getElementById('A4')
  clicked.style.backgroundColor ='green'; 
  seatName=clicked.innerText;
  const replacedSeat2= document.getElementById('replaced-seat4');
  replacedSeat2.innerText = seatName;  
  const seatDetails=document.getElementById('seat-details4'); 
  seatDetails.classList.remove('hidden'); 
  let totalPrice = document.getElementById('total-price');
  totalPrice.innerText = number * seatPrice ; 
  const seatReaming= document.getElementById('total-seat');
  seatReaming.innerText= seatNumber - number;
 }
 function seatClicked5(){
  clicks += 1;
  number = document.getElementById("clicks").innerText = clicks;
  const clicked = document.getElementById('B1')
  clicked.style.backgroundColor ='green'; 
  seatName=clicked.innerText;
  const replacedSeat2= document.getElementById('replaced-seat5');
  replacedSeat2.innerText = seatName;  
  const seatDetails=document.getElementById('seat-details5'); 
  seatDetails.classList.remove('hidden'); 
  let totalPrice = document.getElementById('total-price');
  totalPrice.innerText = number * seatPrice ;
  const seatReaming= document.getElementById('total-seat');
  seatReaming.innerText= seatNumber - number;
 }
 function seatClicked6(){
  clicks += 1;
  number = document.getElementById("clicks").innerText = clicks;
  const clicked = document.getElementById('B2')
  clicked.style.backgroundColor ='green'; 
  seatName=clicked.innerText;
  const replacedSeat2= document.getElementById('replaced-seat6');
  replacedSeat2.innerText = seatName;  
  const seatDetails=document.getElementById('seat-details6'); 
  seatDetails.classList.remove('hidden'); 
  let totalPrice = document.getElementById('total-price');
  totalPrice.innerText = number * seatPrice ;
  const seatReaming= document.getElementById('total-seat');
  seatReaming.innerText= seatNumber - number;
 }
 function seatClicked7(){
  clicks += 1;
  number = document.getElementById("clicks").innerText = clicks;
  const clicked = document.getElementById('B3')
  clicked.style.backgroundColor ='green'; 
  seatName=clicked.innerText;
  const replacedSeat2= document.getElementById('replaced-seat7');
  replacedSeat2.innerText = seatName;  
  const seatDetails=document.getElementById('seat-details7'); 
  seatDetails.classList.remove('hidden'); 
  let totalPrice = document.getElementById('total-price');
  totalPrice.innerText = number * seatPrice ;
  const seatReaming= document.getElementById('total-seat');
  seatReaming.innerText= seatNumber - number;
 }
 function seatClicked8(){
  clicks += 1;
  number = document.getElementById("clicks").innerText = clicks;
  const clicked = document.getElementById('B4')
  clicked.style.backgroundColor ='green'; 
  seatName=clicked.innerText;
  const replacedSeat2= document.getElementById('replaced-seat8');
  replacedSeat2.innerText = seatName;  
  const seatDetails=document.getElementById('seat-details8'); 
  seatDetails.classList.remove('hidden'); 
  let totalPrice = document.getElementById('total-price');
  totalPrice.innerText = number * seatPrice ;
  const seatReaming= document.getElementById('total-seat');
  seatReaming.innerText= seatNumber - number;
 }

 function success(){
  const successSection= document.getElementById('done');
  successSection.classList.remove('hidden')

  const mainSection = document.getElementById('main-section')
  mainSection.classList.add('hidden')
 }
 function returnToMain(){
  const mainSection =document.getElementById('main-section')
  mainSection.classList.remove('hidden')
  
  const successSection= document.getElementById('done');
  successSection.classList.add('hidden')
 }