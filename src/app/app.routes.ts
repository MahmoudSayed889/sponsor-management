import { Routes } from '@angular/router';
import { ListViewComponent } from './components/list-view/list-view.component';
import { EditViewComponent } from './components/edit-view/edit-view.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [

    {path: "", redirectTo:"list-view", pathMatch:"full"},
    {path:"list-view", component:ListViewComponent},
    {path:"edit-view", component:EditViewComponent},

    {path:"**", component:NotFoundComponent}
];
