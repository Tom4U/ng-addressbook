import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Address } from 'src/app/entities/address';
import { AddressesService } from 'src/app/services/addresses.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {
  @Input() address = new Address();

  @Output() closing = new EventEmitter<Address>();

  addressForm = new FormGroup({});

  constructor(private addressesSvc: AddressesService) { }

  ngOnInit(): void {
    this.addressForm = new FormGroup({
      id: new FormControl(this.address.id),
      phone: new FormControl(this.address.phone),
      person: new FormGroup({
        firstname: new FormControl(this.address.person.firstname, Validators.required),
        lastname: new FormControl(this.address.person.lastname, Validators.required)
      })
    });
  }

  storeAddress(): void {
    if (!this.addressForm?.valid) return;

    if (this.address.id > 0)
      this.addressesSvc.updateAddress(this.addressForm.value);
    else
      this.addressesSvc.addAddress(this.addressForm.value);

    this.closeForm();
  }

  closeForm(): void {
    this.closing.emit(this.addressForm.value);
  }
}
