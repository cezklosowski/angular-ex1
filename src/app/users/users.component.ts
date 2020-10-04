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


  public usersList: Array<User> = [
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
    },
    { id: 4,
      name: "Zbigniew",
      phone: 602700800,
      email: "Zbigniew@gmail.com"
    },
    { id: 5,
      name: "Julia",
      phone: 600703800,
      email: "julia@gmail.com"
    },
    { id: 5,
      name: "Adam",
      phone: 624700800,
      email: "adam@gmail.com"
    }
  ];

  // usuwanie użytkownika o danym id z listy użytkowników
  public onUserDelete(id: number): void {
    // filtracja listy -> zachowaj elementy spełniające warunek filtrowania
    this.usersList = this.usersList.filter(user => id !== user.id);
  }

}
