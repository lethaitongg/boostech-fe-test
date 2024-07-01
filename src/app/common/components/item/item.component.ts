import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { Item } from "./item.type";

@Component({
	selector: "app-item",
	standalone: true,
	imports: [MatCardModule],
	templateUrl: "./item.component.html",
	styleUrl: "./item.component.sass",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent implements OnInit {
	@Input() item!: Item;
	@Input() width: string = "160px";
	@Input() height: string = "200px";
	style: Record<string, string | undefined | null> = {};

	ngOnInit(): void {
		const { width, height } = this;

		this.style = {
			width,
			height,
		};
	}
}
