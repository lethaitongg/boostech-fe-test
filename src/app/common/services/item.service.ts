import { Injectable } from "@angular/core";
import { Item } from "../components/item/item.type";

@Injectable()
export class ItemService {
	getAllItems(): Item[] {
		return [
			{
				name: "Item 1",
				imageUrl: "../../../../assets/icon.png",
			},
			{
				name: "Item 2",
				imageUrl: "../../../../assets/icon.png",
			},
			{
				name: "Item 3",
				imageUrl: "../../../../assets/icon.png",
			},
			{
				name: "Item 4",
				imageUrl: "../../../../assets/icon.png",
			},
			{
				name: "Item 5",
				imageUrl: "../../../../assets/icon.png",
			},
			{
				name: "Item 6",
				imageUrl: "../../../../assets/icon.png",
			},
			{
				name: "Item 7",
				imageUrl: "../../../../assets/icon.png",
			},
			{
				name: "Item 8",
				imageUrl: "../../../../assets/icon.png",
			},
			{
				name: "Item 9",
				imageUrl: "../../../../assets/icon.png",
			},
			{
				name: "Item 10",
				imageUrl: "../../../../assets/icon.png",
			},
		];
	}
}
