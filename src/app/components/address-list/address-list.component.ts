import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Address } from 'src/app/entities/address';
import { AddressesService } from 'src/app/services/addresses.service';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  addresses: Address[] = [];

  selectedAddress?: Address;

  constructor(addressesSvc: AddressesService) {
    this.addresses = addressesSvc.getAddresses();
  }

  ngOnInit(): void {
  }

  showDetails(address: Address): void {
    this.selectedAddress = address;
  }

  closingDetails(): void {
    this.selectedAddress = undefined;
  }
}
