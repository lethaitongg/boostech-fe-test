import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ProjectCreateFormComponent } from "./project-create-form/project-create-form.component";

@Component({
	selector: "app-project",
	templateUrl: "./project.component.html",
	styleUrl: "./project.component.sass",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent {
	constructor(private dialog: MatDialog) {}

	openModalCreateProject() {
		const dialogRef = this.dialog.open(ProjectCreateFormComponent, {
			width: "600px",
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
		});
	}
}
