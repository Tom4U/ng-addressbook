import { Component } from '@angular/core';
import { Address } from './entities/address';
import { Person } from './entities/person';
import { AddressesService } from './services/addresses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(addressesSvc: AddressesService) {
    addressesSvc.addAddress(this.createAddresses('+49123456789', 'Hans', 'Dampf'));
    addressesSvc.addAddress(this.createAddresses('+49123456789', 'Fred', 'Feuerstein'));
    addressesSvc.addAddress(this.createAddresses('+49123456789', 'Benjamin', 'Blümchen'));
  }

  private createAddresses(phone: string, firstname: string, lastname: string): Address {
    const address = new Address();

    address.phone = phone;
    address.person = this.createPerson(firstname, lastname);

    return address;
  }

  private createPerson(firstname: string, lastname: string): Person {
    const person = new Person();

    person.firstname = firstname;
    person.lastname = lastname;

    return person;
  }
}
