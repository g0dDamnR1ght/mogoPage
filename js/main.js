let btnBlock = document.querySelectorAll('.block_btn'); 
let workText = document.querySelectorAll('.block-txt'); 
let cardSlider = document.querySelectorAll('.slider_card_wrap'); 
let btnPrevSlider = document.querySelector('.slider_card_button_prev'); 
let btnNextSlider = document.querySelector('.slider_card_button_next');
let cardSet = document.querySelectorAll('.sliderComent_card_wrap'); 
let input = document.querySelector('.impText');
let inpSubm = document.querySelector('.submit');

// добавить клик на btnBlock что бы скрывались сообщения  

function hideText(){
	for(let j = 0; j < btnBlock.length; j++){
		btnBlock[j].addEventListener('click', (e)=> {
			workText[j].classList.toggle('hide_txt'); 
		})
	}
}

hideText(); 

// карусель сделать , что бы при клике на кнопки право и лево переключались картинки 
let i = 0; 
function rightSlider(e){
	cardSlider[i].className = 'slider_card_wrap hide_txt'; 
	i++; 

	if( i >= cardSlider.length){
	 i = 0; 
		}

	cardSlider[i].className = 'slider_card_wrap'
}

function leftSlider(e){
	cardSlider[i].className = 'slider_card_wrap hide_txt'; 
	i--; 

	if( i < 0){
	 i = cardSlider.length - 1; 
		}

	cardSlider[i].className = 'slider_card_wrap'
}

btnPrevSlider.addEventListener('click', leftSlider);
btnNextSlider.addEventListener('click', rightSlider); 
	
function Carouel(){
	for(let j = 0; j < cardSet.length; j++){
		cardSet[j].addEventListener('click', (e)=>{
			cardSet[i].className = 'sliderComent_card_wrap hide_txt'; 
			i++; 

			if( i >= cardSet.length){
			 i = 0; 
				}

			cardSet[i].className = 'sliderComent_card_wrap'; 
		});
	}
	
}
Carouel(); 

inpSubm.addEventListener("click", (e)=>{
e.preventDefault(); 
alert('hello world'); 
// отправлять данные с инпута на бэкэнд с помощью fetch запроса 
}); 
