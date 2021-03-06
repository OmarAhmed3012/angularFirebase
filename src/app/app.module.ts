import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FormsModule } from '@angular/forms'

/*import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from 'angularfire2/firestore'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
*/
import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';


import { ItemService } from './services/item.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddItemComponent } from './components/add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    NavbarComponent,
    AddItemComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'angularfs'),
    AngularFirestoreModule,
    FormsModule
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