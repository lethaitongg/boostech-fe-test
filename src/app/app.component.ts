import { AfterViewInit, ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HomeModule } from "./@core/home/home.module";
import { NotificationComponent } from "./common/components/notification/notification.component";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, HomeModule, NotificationComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.sass",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
	constructor() {}

	ngAfterViewInit(): void {}
}
