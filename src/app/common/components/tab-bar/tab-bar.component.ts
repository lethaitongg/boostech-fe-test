import { MatListModule } from "@angular/material/list";
import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";

@Component({
	selector: "app-tab-bar",
	templateUrl: "./tab-bar.component.html",
	styleUrl: "./tab-bar.component.sass",
	standalone: true,
	imports: [MatListModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabBarComponent implements OnInit {
	@Input() width: string = "68px";
	@Input() height: string = "276px";
	style: Record<string, string | undefined | null> = {};

	ngOnInit(): void {
		const { width, height } = this;

		this.style = {
			width,
			height,
		};
	}
}
