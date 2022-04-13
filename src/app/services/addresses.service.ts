import { Injectable } from '@angular/core';
import { Address } from '../entities/address';
import { Person } from '../entities/person';

@Injectable({
  providedIn: 'root'
})
export class AddressesService {
  readonly key = 'addresses';

  constructor() { }

  getAddresses(): Address[] {
    const raw = localStorage.getItem(this.key) || '[]';
    const addresses: Address[] = JSON.parse(raw).map((address: Address) => {
      let person = new Person();
      person.firstname = address.person.firstname;
      person.lastname = address.person.lastname;

      address.person = person;

      return address;
    });

    return addresses;
  }

  addAddress(address: Address): void {
    let addresses = this.getAddresses();
    const maxId = addresses.reduce((prev, cur) => cur.id > prev ? cur.id : prev, 0);

    address.id = maxId + 1;

    addresses.push(address);

    localStorage.setItem(this.key, JSON.stringify(addresses));
  }

  updateAddress(address: Address): void {
    let addresses = this.getAddresses();

    addresses = addresses.map(old => old.id === address.id ? address : old);

    localStorage.setItem(this.key, JSON.stringify(addresses));
  }

  delete(address: Address) {
    const addresses = this.getAddresses();

    localStorage.setItem(this.key, JSON.stringify(
      addresses.filter(next => next.id !== address.id)
    ))
  }
}
