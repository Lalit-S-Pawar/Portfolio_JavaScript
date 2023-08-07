// Header toggle
let Menubtn = document.getElementById('Menubtn')

Menubtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// Typing Effect
let typed = new Typed('.auto-input',{
    strings:['Front-End Web Developer !','Web Designer !','YouTuber !'],
    typedSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true,
})
