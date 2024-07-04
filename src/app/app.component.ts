import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { NotificationComponent } from "./common/components/notification/notification.component";
import { HomeModule } from "./@core/home/home.module";
import { ProjectModule } from "./@core/project/project.module";

@Component({
	selector: "app-root",
	standalone: true,
	imports: [RouterOutlet, NotificationComponent, HomeModule, ProjectModule],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.sass",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
