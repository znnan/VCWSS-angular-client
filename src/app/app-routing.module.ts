import { NgModule }                 from '@angular/core'
import { RouterModule, Routes }     from '@angular/router';

import { PageNotFoundComponent }    from './not-found.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }  // <-- debugging purposes only
        )
    ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}