import { Component, Input, OnInit } from '@angular/core';
import { Address } from 'src/app/entities/address';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  @Input() addresses: Address[] = [];

  constructor() {}

  ngOnInit(): void {
  }
}
