/*Business logic*/
function Place(personName,placeName)
{
  this.myName=personName;
  this.placeName=placeName;
}
Place.prototype.result=function()
{
  return this.myName+" You visited "+this.placeName;
}
/*User interface*/
$(document).ready(function()
{
  $("form#form").submit(function(event)
{
  event.preventDefault();
  var person=$("input#name").val();
  var place=$("input#place").val();
  var newPlace = new Place(person,place);

  $("ul#places").append("<li><span class='place'>"+newPlace.result()+"</span></li>");
  $("input#name").val("");
  $("input#place").val("");

  $("#places").click(function()
{
  $("#show").show();
  $("#head").text("Name: "+person);
  $("#tail").text("Place visited: "+place);
});
});

});
