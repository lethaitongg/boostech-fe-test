import { MatListModule } from "@angular/material/list";
import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { MatRippleModule } from "@angular/material/core";

@Component({
	selector: "app-tab-bar-item",
	templateUrl: "./tab-bar-item.component.html",
	styleUrl: "./tab-bar-item.component.sass",
	standalone: true,
	imports: [MatListModule, MatRippleModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabBarItemComponent implements OnInit {
	@Input() width: string = "68px";
	@Input() height: string = "276px";
	@Input() text: string = "B";
	style: Record<string, string | undefined | null> = {};

	ngOnInit(): void {
		const { width, height } = this;

		this.style = {
			width,
			height,
		};
	}
}
