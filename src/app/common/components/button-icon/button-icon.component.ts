import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatRippleModule } from "@angular/material/core";

@Component({
	selector: "app-button-icon",
	standalone: true,
	imports: [MatIconModule, MatRippleModule],
	templateUrl: "./button-icon.component.html",
	styleUrl: "./button-icon.component.sass",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonIconComponent {
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
	@Input() size: string = "45px";
	@Input() rounded: string = "87.782px";
	style: Record<string, string | undefined | null> = {};
	hovering: boolean = false;

	ngOnInit(): void {
		const { size, color, rounded } = this;

		this.style = {
			width: size,
			height: size,
			background: color,
			"border-radius": rounded,
		};
	}
}
