import { NgModule } from "@angular/core";
import { BadgeComponent } from "../../../../common/components/badge/badge.component";
import { ToolBarButtonIconComponent } from "./tool-bar-button-icon/tool-bar-button-icon.component";
import { ButtonIconComponent } from "../../../../common/components/button-icon/button-icon.component";
import { NgIf } from "@angular/common";
import { ToolBarButtonNormalComponent } from "./tool-bar-button-normal/tool-bar-button-normal.component";
import { MatRippleModule } from "@angular/material/core";

@NgModule({
	declarations: [ToolBarButtonIconComponent, ToolBarButtonNormalComponent],
	imports: [ButtonIconComponent, BadgeComponent, NgIf, MatRippleModule],
	providers: [],
	exports: [ToolBarButtonIconComponent, ToolBarButtonNormalComponent],
})
export class HomeToolBarButtonModule {}
