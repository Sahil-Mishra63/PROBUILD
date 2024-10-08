import { RouterModule, provideRouter, Routes } from '@angular/router';
import { MainPageComponent } from './MyComponent/main-page/main-page.component';
import { EmailGeneratorComponent } from './email-generator/email-generator.component';
import { ExpertisePageComponent } from './expertise-page/expertise-page.component';
import { MainFresherPageComponent } from './main-fresher-page/main-fresher-page.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { Template1Component } from './template-1/template-1.component';
import { Template2Component } from './template-2/template-2.component';
import { Template3Component } from './template-3/template-3.component';
import { Template4Component } from './template-4/template-4.component';
import { Template5Component } from './template-5/template-5.component';
import { TemplateSelectionComponent } from './template-selection/template-selection.component';
import { Template01Component } from './template1/template1.component';
import { Template02Component } from './template2/template2.component';
import { Template03Component } from './template3/template3.component';
import { Template04Component } from './template4/template4.component';
import { Template05Component } from './template5/template5.component';
import { TemplateMenuComponent } from './template-menu/template-menu.component';
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
    { path: 'template1', component: Template1Component },
    { path: 'template2', component: Template2Component },
    { path: 'template3', component: Template3Component },
    { path: 'template4', component: Template4Component },
    { path: 'template5', component: Template5Component },
    { path: 'template-selection', component: TemplateSelectionComponent},
    { path: 'template-1', component: Template01Component},
    { path: 'template-2', component: Template02Component},
    { path: 'template-3', component: Template03Component},
    { path: 'template-4', component: Template04Component},
    { path: 'template-5', component: Template05Component},
    { path: 'template-menu', component: TemplateMenuComponent },
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule],
// })

// export const appRoutes = provideRouter(routes);
