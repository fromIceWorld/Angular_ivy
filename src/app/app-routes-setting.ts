import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CardComponent } from './common/card/card.component';
const routes: Array<Route> = [
  {
    path: 'index',
    component: CardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
