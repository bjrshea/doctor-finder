import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import BetterDoctor from './BetterDoctor.js';

$(document).ready(function() {
  $('#user-button').click(function() {
    const symptoms = $('#symptoms').val();
    let newBetterDoctor = new BetterDoctor;
    $('#symptoms').val('');
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptoms}&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apiKey}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        newBetterDoctor.firstName = response.data[0].profile.first_name
        newBetterDoctor.lastName = lastName;
        newBetterDoctor.street = street;
        newBetterDoctor.city = city;
        newBetterDoctor.state = state;
        newBetterDoctor.zip = zip;
        newBetterDoctor.phoneNumber = phoneNumber;
        console.log(newBetterDoctor.firstName);
      },
      error: function() {
        console.log("hi");
      }
    });
  });
});
