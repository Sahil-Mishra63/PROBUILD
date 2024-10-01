import { RouterModule, provideRouter, Routes } from '@angular/router';
import { MainPageComponent } from './MyComponent/main-page/main-page.component';
import { EmailGeneratorComponent } from './email-generator/email-generator.component';
import { ExpertisePageComponent } from './expertise-page/expertise-page.component';
import { MainFresherPageComponent } from './main-fresher-page/main-fresher-page.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



export const appRoutes: Routes = [
    { path: '', component: FrontPageComponent},
    { path: 'expertise', component: ExpertisePageComponent},
    { path: 'main', component: MainPageComponent},
    { path: 'email-generator', component: EmailGeneratorComponent},
    { path: 'fresher', component: MainFresherPageComponent},
    { path: 'front', component: FrontPageComponent },
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule],
// })

// export const appRoutes = provideRouter(routes);
