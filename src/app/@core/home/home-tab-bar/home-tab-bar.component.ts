import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
	selector: "home-tab-bar",
	templateUrl: "./home-tab-bar.component.html",
	styleUrl: "./home-tab-bar.component.sass",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTabBarComponent {}
