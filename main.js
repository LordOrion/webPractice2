document.querySelector("#open-nav-menu").addEventListener("click", () => {
    document.querySelector("header nav .wrapper").classList.add("nav-open");
})


document.querySelector("#close-nav-menu").addEventListener(("click"), () => {
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
})

document.querySelector(".weather-group").addEventListener("click", (event) => {

    console.log(event.target.id)

})


setInterval(() => {
    let time = new Date();
    document.querySelector("span[data-time=hours]").textContent = time.getHours().toString().padStart(2, "0");
    document.querySelector("span[data-time=minutes]").textContent = time.getMinutes().toString().padStart(2, "0");
    document.querySelector("span[data-time=seconds]").textContent = time.getSeconds().toString().padStart(2, "0");
}, 1000)


//This is going to be an array of Objects
const galleryImages = [
    {
        src: "./assets/gallery/image1.jpg",
        alt: "Thumbnail Image 1"
    },
    {
        src: "./assets/gallery/image2.jpg",
        alt: "Thumbnail Image 2"
    },
    {
        src: "./assets/gallery/image3.jpg",
        alt: "Thumbnail Image 3"
    },
    // {
    //     src: "./assets/gallery/img1.png",
    //     alt: "Thumbnail Image 4"        
    // }
];

let i=0;

let mainImage = document.querySelector("#gallery > img");
let thumbnails = document.querySelector("#gallery .thumbnails");

mainImage.src = galleryImages[i].src;
mainImage.alt = galleryImages[i].alt;


/*
// Every 4 Seconds the main Picture will be changed.

setInterval(() => {
    if(i == galleryImages.length - 1) {
        i = 0;
    } else {
        i++;
    }

    // console.log(i);
    mainImage.src = galleryImages[i].src;
    mainImage.alt = galleryImages[i].alt;
}, 4000); 

*/

galleryImages.forEach((image, index) => {
    let thumbNl = document.createElement("img");
    thumbNl.src = image.src;
    thumbNl.alt = image.alt;
    thumbNl.dataset.arrayIndex = index;
    thumbNl.dataset.selected = (index === 0) ? true : false;


    thumbNl.addEventListener("click",(event) => {

        let selectedThumNL = galleryImages[event.target.dataset.arrayIndex];
        mainImage.src = selectedThumNL.src;
        mainImage.alt = selectedThumNL.alt;

        thumbnails.querySelectorAll("img").forEach((img) => {
            img.dataset.selected = false;
        })

        event.target.dataset.selected = true;


    })

    thumbnails.appendChild(thumbNl);

})


