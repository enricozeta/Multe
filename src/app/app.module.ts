import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatSidenavModule, MatListModule, MatFormFieldModule, MatSelectModule,
  MatInputModule, MatTableModule, MatAutocompleteModule, MatCardModule, MatProgressBarModule} from '@angular/material';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { NewPlayerComponent } from './new-player/new-player.component';
import { PlayersComponent } from './players/players.component';
import { MultaComponent } from './multa/multa.component';
import { ProfileComponent } from './profile/profile.component';
import { PlayerComponent } from './player/player.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NewPlayerComponent,
    PlayersComponent,
    MultaComponent,
    ProfileComponent,
    PlayerComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
