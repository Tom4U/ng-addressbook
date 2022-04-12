import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Address } from 'src/app/entities/address';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  @Input() addresses: Address[] = [];

  selectedAddress?: Address;

  constructor() {}

  ngOnInit(): void {
  }

  showDetails(address: Address): void {
    this.selectedAddress = address;
  }

  closingDetails(): void {
    this.selectedAddress = undefined;
  }
}
