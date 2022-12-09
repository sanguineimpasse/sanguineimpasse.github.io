let isDay = true;

const moonIcon = document.querySelector('.moon-icon');

moonIcon.addEventListener('click', ()=> {
    if(isDay){
        //if not in night mode, change image to night mode image
        document.getElementById('background').src = 'img/birdswingforest-bg.png';
        //change icon to sun
        document.getElementById('icon').src = 'img/sun-l.png';

        document.getElementById('monke').src = 'img/monke-n.png';

        document.getElementById('hello').innerHTML = 'Hello... World?';

        //.innerHTML = '<img src="http://a.deviantart.net/avatars/r/a/rachelsrandomart.gif?12"></img>'

        //set bool to false
        isDay = false;
    }else{
        //else set image to day mode
        document.getElementById('background').src = 'img/blisspass-bg.png';
        //change icon to moon
        document.getElementById('icon').src = 'img/moon-l.png';

        document.getElementById('monke').src = 'img/monke.png';

        document.getElementById('hello').innerHTML = 'Hello, World!';

        //set bool to true
        isDay = true;
    }
});