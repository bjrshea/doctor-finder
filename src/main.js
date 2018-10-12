import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import BetterDoctor from './BetterDoctor.js';

$(document).ready(function() {
  $('#user-button').click(function() {
    let newBetterDoctor = new BetterDoctor;
    const symptoms = $('#symptoms').val();
    $('#symptoms').val('');
    const doctorFirstName = $('#doctor-first-name').val();
    $('#doctor-first-name').val('');
    const doctorLastName = $('#doctor-last-name').val();
    $('#doctor-last-name').val('');
    $.ajax({
      url: `https://api.betterdoctor.com/2016-03-01/doctors?first_name=${doctorFirstName}&last_name=${doctorLastName}&query=${symptoms}&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apiKey}`,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {
        newBetterDoctor.name = response.data[0].practices[0].name;
        newBetterDoctor.picture = response.data[0].profile.image_url;
        newBetterDoctor.street = response.data[0].practices[0].visit_address.street;
        newBetterDoctor.city = response.data[0].practices[0].visit_address.city;
        newBetterDoctor.state = response.data[0].practices[0].visit_address.state;
        newBetterDoctor.zip = response.data[0].practices[0].visit_address.zip;
        newBetterDoctor.patients = response.data[0].practices[0].accepts_new_patients;
        newBetterDoctor.phoneNumber = response.data[0].practices[0].phones[0].number;
        newBetterDoctor.website = response.data[0].practices[0].website;

        if (newBetterDoctor.patients == true) {
          newBetterDoctor.patients = "Yes";
        } else {
          newBetterDoctor.patients = "No";
        }

        if (newBetterDoctor.website == undefined) {
          newBetterDoctor.website = "n/a";
        }

        $('#results').html('<h2>Results:</h2><p>' + newBetterDoctor.name + '</p><img src="' + newBetterDoctor.picture + '"><p>' + newBetterDoctor.street + '</p><p>' + newBetterDoctor.city + ', ' + newBetterDoctor.state + " " + newBetterDoctor.zip + '</p><br><p>Accepting new patients: ' + newBetterDoctor.patients + '</p><p>Phone number: ' + newBetterDoctor.phoneNumber + '</p><p>Website: ' + newBetterDoctor.website + '</p>')
      },
      error: function() {

      }
    });
  });
});
