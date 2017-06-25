import { Routes, RouterModule } from '@angular/router';

import { PhoneCalls } from './phonecalls.component';

const routes: Routes = [
  {
    path: '',
    component: PhoneCalls,
  },
];

export const routing = RouterModule.forChild(routes);
