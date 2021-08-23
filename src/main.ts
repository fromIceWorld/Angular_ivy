import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
console.log(AppComponent);
if (environment.production) {
  enableProdMode();
}
console.log(AppModule, AppModule['ɵinj'], AppModule['ɵmod']);
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
