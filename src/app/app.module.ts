import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { SocialComponent } from './social/social.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkersComponent } from './workers/workers.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    SocialComponent,
    SkillsComponent,
    WorkersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
