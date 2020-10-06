$('#love').click( function() {
   
    $.getJSON("https://api.adviceslip.com/advice/search/love", function( data ) {
  
    // $('#advice2').append("<li>" +  data.slips[0].advice +"</li>")
    for (i = 0; i < data.slips.length; i ++){
        $('#advice3').append("<li>" +  data.slips[i].advice +"</li>")
       }
   
    });
});

$('#parent').click( function() {
   
    $.getJSON("https://api.adviceslip.com/advice/search/parent", function( data ) {
  
    // $('#advice').append("<li>" +  data.slips[0].advice +"</li>")
    for (i = 0; i < data.slips.length; i ++){
        $('#advice').append("<li>" +  data.slips[i].advice +"</li>")
       }
   
    });
});

$('#life').click( function() {
   
    $.getJSON("https://api.adviceslip.com/advice/search/life", function( data ) {
  
    // $('#advice4').append("<li>" +  data.slips[0].advice +"</li>")
    for (i = 0; i < data.slips.length; i ++){
        $('#advice4').append("<li>" +  data.slips[i].advice +"</li>")
       }
   
    });
});


$('#eat').click( function() {
   
    $.getJSON("https://api.adviceslip.com/advice/search/eat", function( data ) {
  
    // $('#advice3').append("<li>" +  data.slips[0].advice +"</li>")

    console.log(data.slips[0].advice)
   for (i = 0; i < data.slips.length; i ++){
    $('#advice3').append("<li>" +  data.slips[i].advice +"</li>")
   }
    });
});

$("#clear").click(function(){
   
    $("#advice").empty();
    $("#advice2").empty();
    $("#advice3").empty();
    $("#advice4").empty();
   

});
$('#search').click( function() {
    var look = $("#input").val()
    $.getJSON("https://api.adviceslip.com/advice/search/" + look , function( data )
     {
      
    // $('#advice2').append("<li>" +  data.slips[0].advice +"</li>")
    for (i = 0; i < data.slips.length; i ++){
        $('#advice3').append("<li>" +  data.slips[i].advice +"</li>")
       }
   
    });
});