import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Address } from 'src/app/entities/address';
import { AddressesService } from 'src/app/services/addresses.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {
  @Input() address = new Address();

  @Output() closing = new EventEmitter();

  constructor(private addressesSvc: AddressesService) { }

  ngOnInit(): void {
  }

  storeAddress(form: NgForm): void {
    if (!form.valid) return;

    if (this.address.id > 0)
      this.addressesSvc.updateAddress(this.address);
    else
      this.addressesSvc.addAddress(this.address);

    this.closeForm();
  }

  closeForm(): void {
    this.closing.emit();
  }
}
