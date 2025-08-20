//AOS

AOS.init({duration:1000, once:true});

//menu toggle

function toggleMenu(){
    document.getElementById("navLinks").classList.toggle("active");
}


//typing effect

new Typed("#typing", {
    strings: ['Web Developer.' ,  'Web Designer.' , 'UI/UX Designer.', 'Crative Thinker.'],
    typeSpeed:60, backSpeed: 30, backDelay:1000, loop:true
});

 