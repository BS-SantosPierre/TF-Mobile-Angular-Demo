import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AnimeListComponent } from './demos/anime-list/anime-list.component';
import { CreateComponent } from './demos/anime-list/create/create.component';
import { EditComponent } from './demos/anime-list/edit/edit.component';
import { ShowComponent } from './demos/anime-list/show/show.component';
import { DemoPipesComponent } from './demos/demo-pipes/demo-pipes.component';
import { Demo1Component } from './demos/demo1/demo1.component';
import { Demo2Component } from './demos/demo2/demo2.component';
import { Demo3Component } from './demos/demo3/demo3.component';
import { Demo4Component } from './demos/demo4/demo4.component';
import { ReactiveFormDemoComponent } from './demos/reactive-form-demo/reactive-form-demo.component';
import { Exo1Component } from './exos/exo1/exo1.component';
import { RecapComponent } from './exos/recap/recap.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'demo1', component: Demo1Component },
  { path: 'demo2', component: Demo2Component },
  { path: 'demo3', component: Demo3Component },
  { path: 'demo4', component: Demo4Component },
  { path: 'demo-pipes', component: DemoPipesComponent },
  { path: 'demo-form', component: ReactiveFormDemoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact' , component: ContactComponent },
  { path: 'exo1' , component: Exo1Component },
  { path: 'exo-recap' , component: RecapComponent },
  { path: 'anime-list' , component: AnimeListComponent,
    children : [
      { path: 'create', component: CreateComponent }
  ]},
  {
    path: 'anime-list/:id', component: ShowComponent
  },
  { path: 'anime-list/:id/edit', component: EditComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
