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
  showForm = false;

  constructor(private addressesSvc: AddressesService) {
    this.updateAddresses();
  }

  ngOnInit(): void {
  }

  showDetails(address: Address): void {
    this.selectedAddress = address;
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    
    if (!this.showForm) this.updateAddresses();
  }

  closingDetails(): void {
    this.selectedAddress = undefined;
    this.updateAddresses();
  }

  addressDeleted(): void {
    this.closingDetails();
    this.updateAddresses()
  }

  private updateAddresses(): void {
    this.addresses = this.addressesSvc.getAddresses();
  }
}
