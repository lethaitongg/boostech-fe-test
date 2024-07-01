import { NgModule } from "@angular/core";
import { HomeToolBarUtilGroupComponent } from "./tool-bar-util-group.component";
import { HomeToolBarButtonModule } from "../home-tool-bar-button/home-tool-bar-button.module";
import { DatePipe } from "@angular/common";
import { DatePickerButtonComponent } from "./date-picker-button/date-picker-button.component";

@NgModule({
	declarations: [HomeToolBarUtilGroupComponent, DatePickerButtonComponent],
	imports: [HomeToolBarButtonModule, DatePipe],
	providers: [],
	exports: [HomeToolBarUtilGroupComponent],
})
export class HomeToolBarUtilGroupModule {}
