import { HomeComponent } from "./home.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToolBarComponent } from "../../common/components/tool-bar/tool-bar.component";
import { WindowComponent } from "../../common/components/window/window.component";
import { TabBarComponent } from "../../common/components/tab-bar/tab-bar.component";
import { HomeItemListComponent } from "./home-item-list/home-item-list.component";
import { ItemGridComponent } from "../../common/components/item-grid/item-grid.component";
import { ItemComponent } from "../../common/components/item/item.component";
import { HomeTabBarComponent } from "./home-tab-bar/home-tab-bar.component";
import { HomeWindowComponent } from "./home-window/home-window.component";
import { HomeToolBarComponent } from "./home-tool-bar/home-tool-bar.component";
import { HoverElevationDirective } from "../../common/directives/hover-elevation.directive";
import { TabBarItemComponent } from "../../common/components/tab-bar-item/tab-bar-item.component";
import { HomeToolBarModule } from "./home-tool-bar/home-tool-bar.module";

@NgModule({
	declarations: [
		HomeComponent,
		HomeWindowComponent,
		HomeItemListComponent,
		HomeTabBarComponent,
	],
	imports: [
		HomeToolBarModule,
		WindowComponent,
		ItemComponent,
		ItemGridComponent,
		TabBarComponent,
		CommonModule,
		ToolBarComponent,
		HoverElevationDirective,
		TabBarItemComponent,
	],
	providers: [],
	exports: [HomeComponent],
})
export class HomeModule {}
