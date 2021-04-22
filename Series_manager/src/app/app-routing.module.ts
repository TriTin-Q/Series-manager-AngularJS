import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { SeriesViewComponent } from './views/series-view/series-view.component';
import { NewSerieViewComponent } from './views/new-serie-view/new-serie-view.component';
import { DetailsSerieViewComponent } from './views/details-serie-view/details-serie-view.component';
import { EditSerieViewComponent } from './views/edit-serie-view/edit-serie-view.component';
import { NotFoundViewComponent } from './views/not-found-view/not-found-view.component';
import { NewCommentViewComponent } from './views/new-comment-view/new-comment-view.component';

const routes: Routes = [
  { path:'', component:AuthViewComponent },
  { path:'series',canActivate:[AuthGuard],  component:SeriesViewComponent } ,
  { path:'serie/new',canActivate:[AuthGuard],  component:NewSerieViewComponent } ,
  { path:'comment/new/:id',canActivate:[AuthGuard],  component:NewCommentViewComponent } ,
  { path:'serie/:id',canActivate:[AuthGuard],  component:DetailsSerieViewComponent } ,
  { path:'serie/edit/:id',canActivate:[AuthGuard],  component:EditSerieViewComponent } ,
  { path:'not-found', component:NotFoundViewComponent},
  { path:'**',redirectTo:'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
