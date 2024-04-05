// This sets up the api and gets data
async function clickedEvent(enter_painting) {
    fetch(`https://api.artic.edu/api/v1/artworks/${enter_painting}`)
    .then(response => {

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        return response.json();
    })
    .then(data => {
        
        let show_id = data.data.id
        let show_artist = data.data.artist_title
        let show_description = data.data.description
        let show_date_display = data.data.date_display
        let show_place_of_origin = data.data.place_of_origin
        let show_title = data.data.title

        display_painting.innerHTML = `<img class="floating_img" src="images/paintings/${show_id}.jpg" alt="Love of Winter"><h2 style="margin: 10px;">${show_title}</h2><div class="floating_div"><h4>Artist:</h4><p class="floating_text">${show_artist}</p></div><div class="floating_div"><h4>Date:</h4><p class="floating_text">${show_date_display}</p></div><div class="floating_div"><h4>Place of Origin:</h4><p class="floating_text">${show_place_of_origin}</p></div><h4>Description:</h4><iframe srcdoc="<!DOCTYPE html><p>${show_description}</p>" height="200" width="400" title="test"></iframe><a href="index.html"><button class="floating_button">exit</button></a>`
        console.log(data.data)
    })
    .catch(error => console.error(error));
}

// This sets up a floating platform
let display_painting = document.createElement("div")
display_painting.setAttribute("class", "floating_platform")

// These paintings corrsponds to the order of painting classes
let display_painting_1 = document.getElementsByClassName("p1")[0]
display_painting_1.addEventListener("click", function() {
    clickedEvent(109780)
    document.body.append(display_painting)
})

let display_painting_2 = document.getElementsByClassName("p2")[0]
display_painting_2.addEventListener("click", function() {
    clickedEvent(90048)
    document.body.append(display_painting)
})

let display_painting_3 = document.getElementsByClassName("p3")[0]
display_painting_3.addEventListener("click", function() {
    clickedEvent(72801)
    document.body.append(display_painting)
})

let display_painting_4 = document.getElementsByClassName("p4")[0]
display_painting_4.addEventListener("click", function() {
    clickedEvent(3072)
    document.body.append(display_painting)
})

let display_painting_5 = document.getElementsByClassName("p5")[0]
display_painting_5.addEventListener("click", function() {
    clickedEvent(16487)
    document.body.append(display_painting)
})

let display_painting_6 = document.getElementsByClassName("p6")[0]
display_painting_6.addEventListener("click", function() {
    clickedEvent(14620)
    document.body.append(display_painting)
})

let display_painting_7 = document.getElementsByClassName("p7")[0]
display_painting_7.addEventListener("click", function() {
    clickedEvent(44017)
    document.body.append(display_painting)
})

let display_painting_8 = document.getElementsByClassName("p8")[0]
display_painting_8.addEventListener("click", function() {
    clickedEvent(45838)
    document.body.append(display_painting)
})
