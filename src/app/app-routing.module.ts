import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutomatizaFirmasComponent } from './components/automatiza-firmas/automatiza-firmas.component';
import { EnviarDocumentosComponent } from './components/enviar-documentos/enviar-documentos.component';
import { HabilitaFirmasComponent } from './components/habilita-firmas/habilita-firmas.component';
import { MisContactosComponent } from './components/mis-contactos/mis-contactos.component';
import { MisDocumentosComponent } from './components/mis-documentos/mis-documentos.component';
import { HomeComponent } from './components/shared/home/home.component';
import { LoginComponent } from './components/shared/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},

  {path: 'home', component: HomeComponent, canActivate:[AuthGuard]   },
  {path: 'mis-documentos', component: MisDocumentosComponent, canActivate:[AuthGuard]   },
  {path: 'envia-documentos', component: EnviarDocumentosComponent, canActivate:[AuthGuard]   },
  {path: 'mis-contactos', component: MisContactosComponent, canActivate:[AuthGuard]   },
  {path: 'habilita-firmas', component: HabilitaFirmasComponent, canActivate:[AuthGuard]   },
  {path: 'automatiza-firmas', component: AutomatizaFirmasComponent, canActivate:[AuthGuard]   },


  { path: '**', pathMatch: 'full', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
