import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.css']
})
export class TopHeaderComponent implements OnInit {

  currentRoute= "";
  constructor(private router: Router) {
    
    router.events.subscribe((val) => {

    if (val instanceof NavigationEnd) {
      this.currentRoute = val.url;
    }
        
    });
  }

  ngOnInit(): void {
  }

}
