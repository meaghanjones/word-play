$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = $("input#sentence").val();
    var newArr = [];

    blanks = blanks.split(" ");
    blanks.forEach(function(blank){
      if (blank.length >= 3){
        newArr.push(blank);
      }
    });
    newArr = newArr.reverse().join(" ");
    $(".new-sentence").text(newArr);
    event.preventDefault();
  });
});
