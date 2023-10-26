import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { CadsatrarUsuariosComponent } from './pages/cadsatrar-usuarios/cadsatrar-usuarios.component';



const routes: Routes = [
  {
    path: '', component: UsuariosComponent
  },
  {
    path: 'usuarios', component: UsuariosComponent
  },
  {
    path: 'usuarios/cadastrar', component: CadsatrarUsuariosComponent
  },
  {
    path: 'usuarios/editar/:id', component: CadsatrarUsuariosComponent
  }
];



@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }
