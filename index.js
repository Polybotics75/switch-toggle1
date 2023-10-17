
//GET THE SWITCH INPUT
var switchInput = document.querySelector('.switch-input#switch');

//ADD EVENTLISTENER TO THE SWITCH TO LISTEN FOR CLICK
switchInput.addEventListener('click', () => {
    switchToggle();
});


function switchToggle(){
    
    //GET SWITCH CONTAINER
    var switchContainer = document.querySelector('.switch-container');

    switchContainer.classList.toggle('active')
    
}