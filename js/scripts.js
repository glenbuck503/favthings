$(document).ready(function() {
  $("#favthings").submit(function(event) {
    event.preventDefault();

    let color = $("input#color").val();
    let sport = $("input#sport").val();
    let city= $("input#city").val();
    let number = $("input#number").val();
    let car = $("input#car").val();
    let movie= $("input#movie").val();

    let arrayAnswers =[];

    arrayAnswers.push(color,sport,city,number,car,movie);




    
    $(".fav").append("<li>" + arrayAnswers[1] + "</li>");
    $(".fav").append("<li>" + arrayAnswers[0] + "</li>");
    $(".fav").append("<li>" + arrayAnswers[3] + "</li>");
		$(".fav").show();
     
    
  });
});


