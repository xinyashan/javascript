
let root = document.getElementById('root'); 
let container = document.createElement('div'); 

let theLogo = document.createElement('img'); 
theLogo.src = 'colorful1.jpg';

root.appendChild(container); 
container.appendChild(theLogo); 


let request = new XMLHttpRequest();
// get, post, delete, put, patch

request.open('GET','https://jsonplaceholder.typicode.com/users', true);


request.onload = function () {
    let data = JSON.parse(this.response);


    if (request.status >= 200 && request.status < 400) {
        data.forEach(users => {
            let card = document.createElement("div");

            let header1 = document.createElement("h1");
            header1.textContent = users.name;
            header1.classList.add('w3-card', 'w3-container', 'w3-border-red');

            container.appendChild(card);
            card.appendChild(header1);
          
        });

    } else {

        console.log("error");
        let errorMessage = document.createElement("marquee");
        errorMessage.textContent = "Oh no it's not working!";
        rootDIV.appendChild(errorMessage); 
    }

}

request.send();