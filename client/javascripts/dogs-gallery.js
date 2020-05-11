// jshint esversion: 6

// Fail Hanlder
let failHandler = () => {
  console.log("Fail -- unknown breed");

  $(".photos")
    .empty()
    .html("<h3>Error -- breed not found<h3>");
};

//1. Define the onclick handler
let clickHandler = function() {
  let imgElem, breedTag;
  // splitting user input by spaces
  let value = $('input[type = "text"]')
    .val()
    .toLowerCase();
  let result = value.split(" ");
  //console.log(result);
  if (result.length == 1) {
    // differentiating the words for the URL
    breedTag = result[0];
  } else {
    breedTag = result[1] + "/" + result[0];
  }
  //console.log(breedTag);
  /*
  if (result[1] != undefined) {
    return `/${result[1]}`;
  }*/

  let prefixURL = "https://dog.ceo/api/breed/";
  let suffixURL = "/images/random/6";

  //console.log(breedTag)
  let requestURL = prefixURL + breedTag + suffixURL;
  console.log(requestURL);

  //clear old photos
  $(".photos").html("");
  //document.querySelector(".photos").innerHTML = "";

  $.getJSON(requestURL, function(dogResponse) {
    // console.log(dogResponse.message)
    dogResponse.message.forEach(function(imgURL, index) {
      // console.log(`${imgURL} ${index}`)

      // create a new element to hold the image
      let imgElem = $("<img>");
      //let imgElem = document.createElement("img");
      imgElem.hidden = true;

      // set the attribute to the response url
      imgElem.attr("src", imgURL);
      imgElem.attr("width", "100");

      // attach the img tag to the main

      $(".photos").append(imgElem);
      //document.querySelector(".photos").appendChild(imgElem);
      imgElem.hidden = false;
    });
  }).fail(failHandler);
};

//2. Register the onclick handler for each button after the DOM is complete
window.addEventListener("load", () => {
  //select the buttons
  let buttonElem = document.querySelector("button");
  buttonElem.addEventListener("click", clickHandler);
});
