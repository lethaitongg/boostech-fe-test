import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Feature } from "./feature.type";

@Component({
	selector: "tool-bar-feature-group",
	templateUrl: "./tool-bar-feature-group.component.html",
	styleUrl: "./tool-bar-feature-group.component.sass",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeToolBarFeatureGroupComponent {
	features: Feature[] = [
		{
			color: "#252628",
			icon: "setting",
		},
		{
			color: "linear-gradient(180deg, #18BEFB 0%, #0058E6 83.48%)",
			icon: "inventory",
		},
		{
			color: "linear-gradient(180deg, #5BF675 0%, #0CBD2A 100%)",
			icon: "topic",
		},
	];
}
