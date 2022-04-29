import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { IonicModule } from '@ionic/angular';
import {
  MinimalRouterStateSerializer,
  routerReducer,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ROUTER_FEATURE_KEY } from './router/selectors';
import { environment } from 'src/environments/environment';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    IonicModule.forRoot(),
    AppRoutingModule,
    StoreModule.forRoot({
      [ROUTER_FEATURE_KEY]: routerReducer,
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: ROUTER_FEATURE_KEY,
      serializer: MinimalRouterStateSerializer,
    }),
  ],
  // Because we are keeping track of secondary tabs in the URL, we are commenting this out
  // to prevent the tab change from being treated like a new page navigation
  //providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
