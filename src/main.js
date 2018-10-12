import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#user-button').click(function() {
    const symptoms = $('#symptoms').val();
    let clear = $('#symptoms').val('');
    $.ajax({
     url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptoms}&location=or-portland&skip=0&limit=10&user_key=`,
     type: 'GET',
     data: {
       format: 'json'
     },
   });
 });
});
