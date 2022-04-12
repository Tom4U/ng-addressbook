import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/entities/address';
import { Person } from 'src/app/entities/person';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  addresses: Address[] = [];

  constructor() {
    this.addresses.push(this.createAddresses('+49123456789', 'Hans', 'Dampf'));
    this.addresses.push(this.createAddresses('+49123456789', 'Fred', 'Feuerstein'));
    this.addresses.push(this.createAddresses('+49123456789', 'Benjamin', 'Blümchen'));
   }

  ngOnInit(): void {
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
