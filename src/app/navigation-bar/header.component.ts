import { Component }                        from '@angular/core';

@Component({
  selector: 'nav-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {
    public isCollapsed = true;
}
