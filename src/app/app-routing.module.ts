import { NgModule }                 from '@angular/core'
import { RouterModule, Routes }     from '@angular/router';

import { IndexComponent }           from './index.component';
import { PageNotFoundComponent }    from './not-found.component';

const appRoutes: Routes = [
    { path: 'index',        component: IndexComponent},
    /*{ path: 'news/:id',     component: },
    { path: 'events',       component: },
    { path: 'events/:id',   component: },
    { path: 'gallery',      component: },
    { path: 'contact',      component: },
    { path: 'about',        component: },
    { path: 'resource',     component: },
    { path: 'sitemap',      component: },
    { path: 'user',         component: },*/
    { path: '',
      redirectTo: '/index',
      pathMatch: 'full'
    },
    { path: '**',           component: PageNotFoundComponent}
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