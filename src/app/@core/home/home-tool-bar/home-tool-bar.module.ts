import { NgModule } from "@angular/core";
import { HomeToolBarComponent } from "./home-tool-bar.component";
import { ToolBarComponent } from "../../../common/components/tool-bar/tool-bar.component";
import { CommonModule } from "@angular/common";
import { HomeToolBarFeatureGroupComponent } from "./tool-bar-feature-group/tool-bar-feature-group.component";
import { HomeToolBarUtilGroupModule } from "./tool-bar-util-group/tool-bar-util-group.module";
import { HomeToolBarButtonModule } from "./home-tool-bar-button/home-tool-bar-button.module";

@NgModule({
	declarations: [HomeToolBarComponent, HomeToolBarFeatureGroupComponent],
	imports: [
		ToolBarComponent,
		CommonModule,
		HomeToolBarButtonModule,
		HomeToolBarUtilGroupModule,
	],
	providers: [],
	exports: [HomeToolBarComponent],
})
export class HomeToolBarModule {}
