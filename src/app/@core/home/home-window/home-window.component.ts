import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
	selector: "home-window",
	templateUrl: "./home-window.component.html",
	styleUrl: "./home-window.component.sass",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeWindowComponent {}
