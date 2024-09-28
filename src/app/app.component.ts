import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./MyComponents/header/header.component";
import { FooterComponent } from "./MyComponents/footer/footer.component";
import { MainPageComponent } from "./MyComponent/main-page/main-page.component";
import { EmailGenComponent } from "./MyComponents/email-gen/email-gen.component";
import { ExpertisePageComponent } from "./expertise-page/expertise-page.component";
import { MainFresherPageComponent } from "./main-fresher-page/main-fresher-page.component";
import { FrontPageComponent } from "./front-page/front-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MainPageComponent, EmailGenComponent, ExpertisePageComponent, MainFresherPageComponent, RouterModule, FrontPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PROBUILD';
}
