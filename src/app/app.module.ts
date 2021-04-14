import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';

import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { TasksReducer } from './modules/tasks/+state/tasks.reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    StoreModule.forRoot({
      //@ts-ignore
      tasks: TasksReducer
    }),
    environment.production ? [] : 
    [StoreDevtoolsModule.instrument(
      { maxAge: 25, logOnly: environment.production }
    )]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
