var queryURL = "http://newsapi.org/v2/top-headlines?country=us&apiKey=bb51fe787c4c4a2daa4ab1fb86aae71d";



$("#newsUS").on("click", function() {


$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    // const USAData = response.data;

    // for (var i = 0; USAData < 3; i++) {
    //     console.log(USAData);
    // }

    console.log(response.data);
  });

  $("#newz").removeClass("nope");
});

