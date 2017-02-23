import {Component} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {OnInit} from '@angular/core';

@Component({
    selector: 'my-app',
    moduleId: module.id,
    styleUrls: ['./app.component.css'],
    template: `
    <h1>{{title}}</h1>
   <nav>
     <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
     <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
   </nav>
   <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {

    title = 'Tour of Heroes';


    ngOnInit(): void {

    }
}
