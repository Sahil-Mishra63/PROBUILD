import { Component } from '@angular/core';
// import { BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./MyComponents/header/header.component";
import { FooterComponent } from "./MyComponents/footer/footer.component";
import { MainPageComponent } from "./MyComponent/main-page/main-page.component";
import { EmailGenComponent } from "./MyComponents/email-gen/email-gen.component";
import { ExpertisePageComponent } from "./expertise-page/expertise-page.component";
import { MainFresherPageComponent } from "./main-fresher-page/main-fresher-page.component";
import { FrontPageComponent } from "./front-page/front-page.component";
import { Template1Component } from "./template-1/template-1.component";
import { Template2Component } from "./template-2/template-2.component";
import { Template3Component } from "./template-3/template-3.component";
import { Template4Component } from "./template-4/template-4.component";
import { Template5Component } from "./template-5/template-5.component";
import { TemplateSelectionComponent } from "./template-selection/template-selection.component";
import { EmailGeneratorComponent } from "./email-generator/email-generator.component";
import { GroqService } from './groq.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MainPageComponent, EmailGenComponent, ExpertisePageComponent, MainFresherPageComponent, RouterModule, FrontPageComponent, FormsModule, CommonModule, Template1Component, Template2Component, Template3Component, Template4Component, Template5Component, TemplateSelectionComponent, EmailGeneratorComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PROBUILD';
}
