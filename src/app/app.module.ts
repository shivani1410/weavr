import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { QuoteComponent } from './components/quote/quote.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { InnovationComponent } from './components/innovation/innovation.component';
import { FeaturesComponent } from './components/features/features.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, HeroComponent, AboutComponent, QuoteComponent, SolutionsComponent, InnovationComponent, FeaturesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
