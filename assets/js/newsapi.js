



$("#newsUS").on("click", function() {
  // query_me2 =

  var search = prompt("Search For Giphy's", "BLM");
  () => {
      
      if (search == null || search == "") {
        txt = "User cancelled the prompt.";
      } else {
        txt = search + " is a GREAT choice";
      }
      document.getElementById("demo").innerHTML = txt;
    }

 
  alert("I work")
 const the_key = "oFQdE3yr3rTHfKMq8jpAAfo2eZhEcUnS";
 const theCall = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + the_key + "&limit=5";

 $.ajax({
  url: theCall,
  method: "GET"
}).then(function(response) {
  console.log(response); // console test to make sure something returns
$("#giph").empty(); // erasing anything in this div id so that it doesnt keep any from the previous click
var results = response.data; //shows results of gifs
if (results == ""){
  alert("There isn't a gif for this selected button");
}
for (var i=0; i<results.length; i++){

    var gifDiv = $("<div>"); //div for the gifs to go inside
    gifDiv.addClass("gifDiv");
    // pulling rating of gif
    var gifRating = $("<p>").text("Rating: " + results[i].rating);
    gifDiv.append(gifRating);
    // pulling gif
    var gifImage = $("<img>");
    gifImage.attr("src", results[i].images.fixed_height_small_still.url); // still image stored into src of image
    gifImage.attr("data-still",results[i].images.fixed_height_small_still.url); // still image
    gifImage.attr("data-animate",results[i].images.fixed_height_small.url); // animated image
    gifImage.attr("data-state", "still"); // set the image state
    gifImage.addClass("image");
    gifDiv.append(gifImage);
    // pulling still image of gif
    // adding div of gifs to gifsView div
    $("#giph").prepend(gifDiv);
  }


  // const the_image = $('<img>').attr("src", response.data.url);

  
}
)
  $("#newz").removeClass("nope");
});




  
  