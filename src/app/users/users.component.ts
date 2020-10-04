import { Component, OnInit } from '@angular/core';
import { getMaxListeners } from 'process';
import { User } from '../user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public usersList: Array<User>; 

  userList = [
    { id: 1,
      name: "Jan",
      phone: 500600700,
      email: "jan@gmail.com"
    },
    { id: 2,
      name: "Maria",
      phone: 600700800,
      email: "maria@gmail.com"
    },
    { id: 3,
      name: "Tomasz",
      phone: 700800900,
      email: "tomasz@gmail.com"
    }
  ];

}
