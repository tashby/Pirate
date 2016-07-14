
//$('#make').on('click touch', function () {
 if ($('#make').hasClass('noselection') === true) {
  alert('Please select a drink first.');
 return;
 }

 if ($('#make').hasClass('disabled') === true) {
  return;
 }

 $(function() {
  loadQuestions();
  $("#submit").click(function(e) {
    e.preventDefault();

    typeCheck(userType);
    $(".your-drink").text(theBartender.getDrink(userPrefs));
  });
});