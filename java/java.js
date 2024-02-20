

    
 let clicks = 0;
 const seatPrice= 550;
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