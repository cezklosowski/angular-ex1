import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User;
  @Input() index: number;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  public today = new Date();
  

  constructor() { }

  ngOnInit(): void {
  }

  public onDeleteButtonClick(): void {
    this.delete.emit(this.user.id);
  }

  

}
