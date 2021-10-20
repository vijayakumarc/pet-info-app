import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { PetsComponent } from './components/pets/pets.component';

const routes: Routes = [
  {path:'',redirectTo:'pets',pathMatch:'full'},
  {path:'pets',component:PetsComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
