import { Component } from '@angular/core';
import { Address } from './entities/address';
import { Person } from './entities/person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  addresses: Address[] = [];

  constructor() {
    this.addresses.push(this.createAddresses('+49123456789', 'Hans', 'Dampf'));
    this.addresses.push(this.createAddresses('+49123456789', 'Fred', 'Feuerstein'));
    this.addresses.push(this.createAddresses('+49123456789', 'Benjamin', 'Blümchen'));
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
