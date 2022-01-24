import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MisDocumentosComponent } from './components/mis-documentos/mis-documentos.component';
import { HomeComponent } from './components/shared/home/home.component';
import { LoginComponent } from './components/shared/login/login.component';
import { MainAppComponent } from './components/shared/main-app/main-app.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},

  // {path: 'home', component: HomeComponent},
  {path: 'home', component: HomeComponent  },
  {path: 'mis-documentos', component: MisDocumentosComponent  },
  // {path: 'home', component: HomeComponent, canActivate:[AuthGuard]  },
  // {path: '', component: MainAppComponent, canActivate:[AuthGuard]  },

  { path: '**', pathMatch: 'full', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
