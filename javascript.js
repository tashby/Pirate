> public/javascripts/robot/frontend.js
$('#make').on('click touch', function () {
 if ($('#make').hasClass('noselection') === true) {
  alert('Please select a drink first.');
 return;
 }

 if ($('#make').hasClass('disabled') === true) {
  return;
 }