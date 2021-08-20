import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnaughtPageRoutingModule } from './connaught-routing.module';

import { ConnaughtPage } from './connaught.page';
import { ConnaughtcountiesPageRoutingModule } from  '../connaughtcounties/connaughtcounties-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnaughtcountiesPageRoutingModule,
    ConnaughtPageRoutingModule,
  ],
  declarations: [ConnaughtPage]
})
export class ConnaughtPageModule {}
