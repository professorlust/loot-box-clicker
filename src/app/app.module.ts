import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroDisplayComponent } from './hero/hero-display.component';
import { HeroService } from './hero/hero.service';
import { CashService } from './cash/cash.service';
import { CashDisplayComponent } from './cash/cash-display.component';
import { ShopComponent } from './shop/shop.component';
import { ShopService } from './shop/shop.service';
import { LootBoxDisplayComponent } from './loot-box/loot-box-display.component';
import { LootBoxService } from './loot-box/loot-box-service';
import { EquipmentDisplayComponent } from './equipment/equipment-display.component';
import { EquipmentService } from './equipment/equipment.service';
import { InventoryDisplayComponent } from './inventory/inventory-display.component';
import { InventoryService } from './inventory/inventory.service';
import { LootService } from './loot-box/loot.service';
import {StorageService} from './storage/storage.service';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { InventoryPageComponent } from './pages/inventory-page/inventory-page.component';
import { TrainerPageComponent } from './pages/trainer-page/trainer-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDisplayComponent,
    CashDisplayComponent,
    ShopComponent,
    LootBoxDisplayComponent,
    EquipmentDisplayComponent,
    InventoryDisplayComponent,
    HeroPageComponent,
    ShopPageComponent,
    InventoryPageComponent,
    TrainerPageComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule
  ],
  providers: [HeroService, CashService, ShopService, LootBoxService, EquipmentService, InventoryService, LootService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
