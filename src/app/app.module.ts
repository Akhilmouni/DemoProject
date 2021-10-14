import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgrxStoreModule } from './reducers';
import { PageNotFoundComponent } from './areas/page-not-found/page-not-found.component';
import { OfflineComponent } from './areas/offline/offline.component';
import { UnauthorizedComponent } from './areas/unauthorized/unauthorized.component';
import { LoaderComponent } from './components/loader/loader.component';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    OfflineComponent,
    UnauthorizedComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgrxStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
