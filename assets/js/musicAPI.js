 // Example queryURL for Giphy API
 
// This function does the following : 

// 1. It grabs the 


 $("#social").on("click", function (){
   
   var txt;
   var person = prompt("Music Choice", "Kelly Rowland");
  () => {
      
      if (person == null || person == "") {
        txt = "User cancelled the prompt.";
      } else {
        txt = person + " is a GREAT choice";
      }
      document.getElementById("demo").innerHTML = txt;
    }

   //  const api_key = "8d684ee8cd314070a5ddc327ad002e5b";
    const query_me = "https://rest.bandsintown.com/artists/" + person + "?app_id=codingbootcamp";
   //  var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=Atlanta&appid=7ba67ac190f85fdba2e2dc6b9d32e93c&units=imperial"
   
    $.ajax({
       url: query_me,
       method: "GET"
     }).then(function(response) {
    // var td = ("<td>")
       console.log(response)



      //  Grabbing data to append to div
      // const theName = $("<h2>").text(response.name);
      const theImage = $("<img>").attr("src", response.thumb_url);
      // const theEvents = $("<h3>").text();
       
      //  Appending the data captured from the Api call - used the inspect in order to locate that data i would like to retrieve 
      $("#So").append(theImage);
      alert(response.name + " has a total of " + response.tracker_count + " Tracks & Counting")
      //  $("#artist").append(theName, theEvents);
      
     

     });
     $("#So").removeClass("nope");

    
 
 });



//  Use image overlay for background 