import { ActivatedRoute } from "@angular/router";
import { ProjectService } from "./../project.service";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Project } from "../project.type";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
	selector: "project-detail",
	templateUrl: "./project-detail.component.html",
	styleUrl: "./project-detail.component.sass",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailComponent implements OnInit {
	project!: Project;
	formGroup = new FormGroup({
		name: new FormControl("", [Validators.required]),
		client: new FormControl("", [Validators.required]),
		manager: new FormControl("", [Validators.required]),
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

	constructor(private projectService: ProjectService, private route: ActivatedRoute) {}

	ngOnInit(): void {
		const id = this.route.snapshot.paramMap.get("id");
		if (id) {
			this.getOne(id);
		}
	}

	private getOne(id: string) {
		this.projectService.getOneProjectById(id).subscribe(data => {
			console.log(data);
			this.project = data;

			const {
				budget,
				clientId,
				description,
				endDate,
				managerId,
				name,
				processStatus,
				startDate,
			} = data;
			this.formGroup.patchValue({
				budget: budget.toString(),
				client: clientId,
				description,
				endDate,
				manager: managerId,
				name,
				processStatus,
				startDate,
			});
		});
	}
}
