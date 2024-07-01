import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material/card";

@Component({
	selector: "app-window",
	standalone: true,
	imports: [MatCardModule],
	templateUrl: "./window.component.html",
	styleUrl: "./window.component.sass",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WindowComponent implements OnInit {
	@Input() windowTitle: string = "Window title";
	@Input() width: string = "800px";
	@Input() height: string = "500px";
	style: Record<string, string | undefined | null> = {};

	ngOnInit(): void {
		const { width, height } = this;

		this.style = {
			width,
			height,
		};
	}
}
