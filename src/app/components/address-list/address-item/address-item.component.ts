import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Address } from 'src/app/entities/address';
import { AddressesService } from 'src/app/services/addresses.service';

@Component({
  selector: 'app-address-item',
  templateUrl: './address-item.component.html',
  styleUrls: ['./address-item.component.css']
})
export class AddressItemComponent implements OnInit {
  @Input() address = new Address();

  showForm = false;

  @Output() closing = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor(private addressesSvc: AddressesService) { }

  ngOnInit(): void {
  }

  delete(): void {
    this.addressesSvc.delete(this.address);
    this.deleted.emit();
  }

  close(): void {
    this.closing.emit();
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }
}
