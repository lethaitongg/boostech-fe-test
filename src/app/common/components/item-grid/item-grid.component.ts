import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { Item } from "../item/item.type";
import { CommonModule } from "@angular/common";
import { ItemComponent } from "../item/item.component";

@Component({
	selector: "app-item-grid",
	standalone: true,
	imports: [CommonModule, ItemComponent],
	templateUrl: "./item-grid.component.html",
	styleUrl: "./item-grid.component.sass",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemGridComponent implements OnInit {
	@Input() columns: number = 4;
	@Input() columnWidth: string = "160px";
	@Input() width: string = "750px";
	@Input() height: string = "600px";
	@Input() rowGap: string = "25px";
	@Input() items: Item[] = [];

	style: Record<string, string | undefined | null> = {};

	ngOnInit(): void {
		this.style = {
			width: this.width,
			height: this.height,
			"row-gap": this.rowGap,
			"grid-template-columns": `repeat(${this.columns}, ${this.columnWidth})`,
			"column-gap": `calc((${this.width} - ${this.columns} * ${this.columnWidth}) / ${
				this.columns - 1
			})`,
		};
	}
}
