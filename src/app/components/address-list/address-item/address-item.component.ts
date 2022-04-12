import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Address } from 'src/app/entities/address';

@Component({
  selector: 'app-address-item',
  templateUrl: './address-item.component.html',
  styleUrls: ['./address-item.component.css']
})
export class AddressItemComponent implements OnInit {
  @Input() address?: Address;

  @Output() closing = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.closing.emit();
  }

}
