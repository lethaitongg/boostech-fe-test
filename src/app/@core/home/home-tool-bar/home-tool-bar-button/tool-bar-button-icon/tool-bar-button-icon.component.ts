import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
	selector: "button-icon",
	templateUrl: "./tool-bar-button-icon.component.html",
	styleUrl: "./tool-bar-button-icon.component.sass",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolBarButtonIconComponent {
	@Input() badge: number = 0;
	@Input() icon: string = "setting";
	@Input()
	color: string = `
		linear-gradient(
		0deg, 
		rgba(255, 255, 255, 0.07) 0%, 
		rgba(255, 255, 255, 0.07) 100%), 
		linear-gradient(0deg, rgba(94.35, 94.35, 94.35, 0.18) 0%, 
		rgba(94.35, 94.35, 94.35, 0.18) 100%)
	`;
	style: Record<string, string | undefined | null> = {};

	ngOnInit(): void {
		const { color } = this;

		this.style = {
			background: color,
		};
	}
}
