const options = {
    dragging: false,
    touchZoom: false,
    doubleClick: false,
    scrollWheelZoom: false,
    zoomControl: false

}

// create map
const map = L.map('mapid', options).setView([-27.2078357,-49.6535597], 14)

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)


// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]

})


 

// create add marker
L
.marker([-27.2078357,-49.6535597], {icon})
.addTo(map)

// image galery
function selectImage(event){
    const button = event.currentTarget

    console.log(button.children)

    // REMOVER TODAS AS CLASSES . ACTIVE 
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove("active")
    }

    // SELECIONAR A IMAGEM CLICADA 

        const image = button.children[0]
        const imageContainer = document.querySelector(".orphanage-details > img")

    // ATUALIZAR O CONTAINER DA IMAGEM 

    imageContainer.src = image.src


    // ADICIONAR A CLASSE . ACTIVE PARA ESTE BOTAO 
    button.classList.add("active")

}