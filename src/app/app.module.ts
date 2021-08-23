import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-routes-setting';
import { AppComponent } from './app.component';
import { ChildModuleModule } from './offmodules/child-module/child-module.module';
@NgModule({
  declarations: [AppComponent],
  imports: [AppRouterModule, BrowserModule, ChildModuleModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
