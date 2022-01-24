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

  // {path: 'home', component: HomeComponent},
  {path: 'home', component: HomeComponent  },
  {path: 'mis-documentos', component: MisDocumentosComponent  },
  {path: 'envia-documentos', component: EnviarDocumentosComponent  },
  {path: 'mis-contactos', component: MisContactosComponent  },
  {path: 'habilita-firmas', component: HabilitaFirmasComponent  },
  {path: 'automatiza-firmas', component: AutomatizaFirmasComponent  },
  // {path: 'home', component: HomeComponent, canActivate:[AuthGuard]  },
  // {path: '', component: MainAppComponent, canActivate:[AuthGuard]  },

  { path: '**', pathMatch: 'full', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
