// Toma los datos almacenados
const xhr = new XMLHttpRequest(),
    main = document.getElementById("main_simpson"),
    simpsonList = document.getElementById("simpson__list");

var url = "https://test-simpsons-assistcard.herokuapp.com/characters?id=";

// create and send the request
xhr.open(
    "GET", 
    "https://test-simpsons-assistcard.herokuapp.com/characters"
    );
    
xhr.send();
xhr.onload = () => {
    const data = xhr.response;

    // Convierte la info levantada en objetos JSON y la guarda en una variable.
    let dataJSON = JSON.parse(data);
    // ---------------------------------------------
    console.log(dataJSON);
    console.log(typeof(dataJSON));

    // Recorre cada objeto y genera una tarjeta.

    for (let character of dataJSON.data) {
        const listItem = document.createElement("BUTTON");
        listItem.setAttribute("id", character.id,);
        listItem.setAttribute("name", character.name);
        listItem.setAttribute("role", "button");
        listItem.classList.add("simpson__list__item");
        const img = document.createElement("SPAN");
        img.setAttribute("id", character.id,);
        img.setAttribute("name", character.name);
        img.classList.add("img");
        const name = document.createElement("H3");
        name.setAttribute("id", character.id);
        name.setAttribute("name", character.name);
        name.classList.add("name");
        name.textContent = character.name;
        listItem.setAttribute("id", character.id);
        //console.log(character.id);

        // const lastName = document.createElement('H6');
        // lastName.classList.add("lastname");
        // lastName.textContent = character.lastname;
        const div = document.createElement("DIV");
        div.classList.add("div");
        // div.setAttribute("id", character.id);
        // div.setAttribute("name", character.id);
        const article = document.createElement("ARTICLE");
        article.setAttribute("id", character.id);
        article.setAttribute("name", character.name);
        article.classList.add("article");

        div.appendChild(name);
        // div.appendChild(lastName);
        article.appendChild(img);
        article.appendChild(div);

        listItem.appendChild(article);

        main.appendChild(listItem);
    }
};


// const noButton = document.getElementById("no");
// noButton.addEventListener(click, () => {
//     console.log("hizo click en el botón NO");
//     // modalBody.classList.add(d-none);
// });

// Eliminar character
document.addEventListener("mouseup", (e) => {
    console.log(e);
    const id = e.target.getAttribute("id");
    const idNum = parseInt(id);
    const getName = e.target.getAttribute("name")
    const modalBody = document.getElementById("modal__body");
    const modalText = document.getElementById("modal__text");
    const yesButton = document.getElementById("yes");

    console.log(idNum);

    // Diferencia para no eliminar el <button> RESET y el <div> que contiene todo el contenido

    // if (id !== "reset" && id !== "main_simpson" && id !== "simpson__header") {
    if (typeof idNum == "number" && id !== null) {
        modalText.textContent = `¿Desea eliminar a ${getName}?`;
        modalBody.classList.remove("d-none"); // Muestra el modal para eliminar personaje
        yesButton.setAttribute("id", idNum);
    } else {
        console.log("No eligió un número");
    }
});

// window.addEventListener("click", (e) => {
//     const id = e.target.getAttribute("id");
//     console.log("Eligió un número");
//     console.log(url + id);

//     xhr.open("DELETE", url + id, true);
//     var deleteButton = document.getElementById(id);
//     deleteButton.remove();
//     xhr.send(null);
//     // }else{
//     //     console.log("No eligió un número");
//     // }
// });

// Botón R E S E T - Resetea los personajes
const reset = document.getElementById("reset");

reset.addEventListener("click", (e) => {
    console.log("Usted hizo click en RESET");
    
    xhr.open(
        "POST",
        "https://test-simpsons-assistcard.herokuapp.com/resetcharacterslist"
    );
    // Recarga la página
    location.reload(true);
    xhr.send();
});

// Instancia para cargar el LOADER 
document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".loader").style.visibility = "visible";
    } else {
        document.querySelector(".loader").style.display = "none";
        document.querySelector("body").style.visibility = "visible";
    }
};







