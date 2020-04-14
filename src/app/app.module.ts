import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

/*import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from 'angularfire2/firestore'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
*/
import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';


import { ItemService } from './services/item.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'angularfs'),
    AngularFirestoreModule
    /*
    AngularFireModule.initializeApp(environment.firebaseConfig),
  	AngularFirestoreModule,*/
  ],
  providers: [ItemService,
    AngularFirestoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }