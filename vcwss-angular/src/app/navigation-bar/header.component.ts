import { Component, ElementRef,OnInit }                        from '@angular/core';

@Component({
  selector: 'nav-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit{
    public isCollapsed = true;

    constructor (
      private el:ElementRef
    ){}

    ngOnInit(){

    }
}
