import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
	selector: "home-tool-bar-button-normal",
	templateUrl: "./tool-bar-button-normal.component.html",
	styleUrl: "./tool-bar-button-normal.component.sass",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolBarButtonNormalComponent {
	@Input() content: string = "button text";
	hovering: boolean = false;
}
