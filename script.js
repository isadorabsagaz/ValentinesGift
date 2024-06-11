
function selectOption(option){
    if(option === 'yes'){
        document.getElementById('question').innerText = "Happy Valentine's Day, my dear <3"; 
        displayCats(); 
    }
    else if(option === 'no'){
        document.getElementById('no-button').innerText = 'Really? :c';
        var yesButton = document.getElementById('yes-button'); 
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size'); 
        var newSize = parseFloat(currentFontSize)*2; 
        yesButton.style.fontSize = newSize + 'px'; 
    }   
    else{
        alert('invalid option!'); 
    }
}

function displayPopCat(){
    var imageContainer = document.getElementById('image-container'); 
    var catImage = new Image(200, 200);
    catImage.src = 'assets/pop-cat.gif';  
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

function displayCats(){
    document.getElementById('image-container').innerHTML = ''; 
    var imageContainer = document.getElementById('image-container'); 
    var catsImage = new Image(); 
    catsImage.src = 'assets/cats-heart.gif'; 
    catsImage.onload = function(){
        imageContainer.appendChild(catsImage);  
        document.getElementById('options').style.display = 'none';
        }

}

displayPopCat(); 

