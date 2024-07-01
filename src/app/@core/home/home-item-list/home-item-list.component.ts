import { ItemService } from "./../../../common/services/item.service";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Item } from "../../../common/components/item/item.type";

@Component({
	selector: "home-item-list",
	templateUrl: "./home-item-list.component.html",
	styleUrl: "./home-item-list.component.sass",
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [ItemService],
})
export class HomeItemListComponent {
	items: Item[] = [];

	constructor(private readonly _itemService: ItemService) {
		this.items = this._itemService.getAllItems();
	}
}
