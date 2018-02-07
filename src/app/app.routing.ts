
import { RouterModule, Routes } from '@angular/router';

import { SplashComponent } from './splash/splash.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';

const APP_ROUTES: Routes = [
	{ path: '', component: SplashComponent },
	{ path: 'compone', component: CompOneComponent },
	{ path: 'comptwo', component: CompTwoComponent }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

// EoF !
