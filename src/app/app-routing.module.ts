import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { 
    path: 'advantage',
    loadChildren: './components/Section/Section.module#SectionModule'
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: './components/Section/Section.module#SectionModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
