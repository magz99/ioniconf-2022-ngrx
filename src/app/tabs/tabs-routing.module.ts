import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'shopping-list',
        loadChildren: () =>
          import('../shopping-list/shopping-list.module').then(
            (m) => m.ShoppingListPageModule
          ),
      },
      {
        path: 'grocery-list',
        loadChildren: () =>
          import('../grocery-list/grocery-list.module').then(
            (m) => m.GroceryListPageModule
          ),
      },
      {
        path: 'favourites-list',
        loadChildren: () =>
          import('../favourites/favourites.module').then(
            (m) => m.FavouritesPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/shopping-list',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/shopping-list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
