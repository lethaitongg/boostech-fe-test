import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";

@Component({
	selector: "app-badge",
	standalone: true,
	imports: [],
	templateUrl: "./badge.component.html",
	styleUrl: "./badge.component.sass",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent implements OnInit {
	@Input() size: string = "15px";
	@Input() color: string = "#FF453A";
	@Input() content: number = 0;
	style: Record<string, string | undefined | null> = {};

	ngOnInit(): void {
		const { size, color } = this;

		this.style = {
			width: size,
			height: size,
			background: color,
		};
	}
}
