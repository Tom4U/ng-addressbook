import { Injectable } from '@angular/core';
import { Address } from '../entities/address';

@Injectable({
  providedIn: 'root'
})
export class AddressesService {
  private addresses: Address[] = [];

  constructor() { }

  getAddresses(): Address[] {
    return this.addresses;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}
