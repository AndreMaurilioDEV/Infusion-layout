(function(){

    const images = document.querySelectorAll('.slider')
    const btnPrev = document.getElementById('prev-btn');
    const btnNext = document.getElementById('next-btn');

    let currentSlide = 0;

    // cada imagem é uma posição do array. imagem[0] e imagem[1]

    function hideSlider(){ // esconder slide
        images.forEach((item) => item.classList.remove('on'))
        // cada item(imagem) vai ter o on removido
    }

    function showSlide(){ // mostrar slide
        images[currentSlide].classList.add('on') 
        // o slide que estiver na posição 0 vai receber a class on
    }

    function nextSlider(){
        hideSlider(); // remove a class on
        if(currentSlide === images.length -1){ // se tiver no ultimo slider 
            currentSlide = 0 // vai voltar pra o primeiro
        }else{
            currentSlide++ // se nao for o ultimo slider, soma +1 pra adiantar
        }
        showSlide();
    }



    function prevSlider(){
        hideSlider();
        if(currentSlide === 0){ // slider atual for o primeiro
            currentSlide = images.length -1 // vai passar o slider
        }else{
            currentSlide-- // caso seja o ultimo vai voltando
        }
        showSlide();
    }


    btnNext.addEventListener('click', nextSlider);
    btnPrev.addEventListener('click', prevSlider);


    const texts = document.querySelectorAll('.text')
    const btnPrevTxt = document.getElementById('prev-btn-text')
    const btnNextTxt = document.getElementById('next-btn-text')

    let currentText = 0;

    function HideText(){
        texts.forEach((item) => item.classList.remove('on-text'));
    }

    function ShowText(){
        texts[currentText].classList.add('on-text');
    }

    function NextText(){
        HideText();
        if(currentText === texts.length -1){
            currentText = 0;
        }else{
            currentText++;
        }

        ShowText();
    }

    function PrevText(){
        HideText();
        if(currentText === 0){
            currentText = images.length -1
        }else{
            currentText--;
        }
        ShowText();
    }

    btnNextTxt.addEventListener('click', NextText);
    btnPrevTxt.addEventListener('click', PrevText);




    
    const buttonMobile = document.querySelector('.btn-mobile')
    

    function MostrarMenu(){
        const nav = document.getElementById('nav')
        nav.classList.toggle('active')
    }

    buttonMobile.addEventListener('click', MostrarMenu);




})(); 


