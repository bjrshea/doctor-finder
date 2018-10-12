export default class BetterDoctor  {
  constructor(data) {

    this.firstName = data.profile.first_name;
    this.lastName = data.profile.last_name;
    this.street = data.visit_address.street;
    this.city = data.visit_address.city;
    this.state = data.visit_address.state;
    this.zip = data.visit_address.zip;
    this.phoneNumber = data.phones.number;
  }
}
