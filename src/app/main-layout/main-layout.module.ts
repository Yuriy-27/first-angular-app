import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainLayoutRoutingModule } from "./main-layout-routing.module";
import { MainLayoutComponent } from "./main-layout.component";
import { HomeComponent } from "../home/home.component";
import { HeaderComponent } from "../header/header.component";
import { AsideComponent } from "../aside/aside.component";
import { FooterComponent } from "../footer/footer.component";
import { NotFoundComponent } from "../not-found/not-found.component";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";

@NgModule({
  declarations: [
    MainLayoutComponent,
    HomeComponent,
    HeaderComponent,
    AsideComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [CommonModule, MainLayoutRoutingModule, BsDropdownModule.forRoot()]
})
export class MainLayoutModule {}
