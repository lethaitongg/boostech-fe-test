import { ProjectService } from "./../project.service";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
	selector: "project-create-form",
	templateUrl: "./project-create-form.component.html",
	styleUrl: "./project-create-form.component.sass",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCreateFormComponent {
	formGroup = new FormGroup({
		name: new FormControl("", [Validators.required]),
		clientId: new FormControl("", [Validators.required]),
		managerId: new FormControl("", [Validators.required]),
		startDate: new FormControl(new Date(new Date().setHours(0, 0, 0, 0)), [
			Validators.required,
		]),
		endDate: new FormControl(new Date(new Date().setHours(0, 0, 0, 0)), [Validators.required]),
		processStatus: new FormControl("", [Validators.required]),
		budget: new FormControl("", [
			Validators.required,
			Validators.pattern("([0-9]*[.])?[0-9]+"),
		]),
		description: new FormControl("", [Validators.required]),
	});

	clientIds: string[] = ["2685d32b-e58c-4fbc-83bc-67617f267405"];

	managerIds: string[] = ["2685d32b-e58c-4fbc-83bc-67617f267405"];

	constructor(private readonly projectService: ProjectService) {}

	createProduct() {
		if (this.formGroup.invalid) {
			console.log("invalid");
			return;
		}
		console.log(this.formGroup.value);

		this.projectService.createOneProject(this.formGroup.value).subscribe();
	}
}
