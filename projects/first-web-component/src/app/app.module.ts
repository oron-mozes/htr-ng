import { NgModule, DoBootstrap, Injector  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UIButtonComponent } from './uibutton/uibutton.component';
import { createCustomElement } from '@angular/elements';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';

@NgModule({
  declarations: [
    AppComponent,
    UIButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [UIButtonComponent],
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {
    const strategyFactory = new ElementZoneStrategyFactory(UIButtonComponent, injector);
    const webComponent = createCustomElement(UIButtonComponent, {injector, strategyFactory});
    customElements.define('ui-button', webComponent);
  }

  ngDoBootstrap() {}
 }
