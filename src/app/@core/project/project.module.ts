import { MatDialogModule } from "@angular/material/dialog";
import { NgModule } from "@angular/core";
import { ProjectComponent } from "./project.component";
import { TableComponent } from "../../common/components/table/table.component";
import { ProjectService } from "./project.service";
import { ProjectTableComponent } from "./project-table/project-table.component";
import { ProjectCreateFormComponent } from "./project-create-form/project-create-form.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatRippleModule, provideNativeDateAdapter } from "@angular/material/core";
import { ReactiveFormsModule } from "@angular/forms";
import { PaginatorComponent } from "../../common/components/paginator/paginator.component";
import { NgFor, NgIf } from "@angular/common";
import { ProjectDetailComponent } from "./project-detail/project-detail.component";

@NgModule({
	declarations: [
		ProjectComponent,
		ProjectTableComponent,
		ProjectCreateFormComponent,
		ProjectDetailComponent,
	],
	imports: [
		TableComponent,
		PaginatorComponent,
		MatDialogModule,
		MatFormFieldModule,
		MatSelectModule,
		MatInputModule,
		MatDatepickerModule,
		ReactiveFormsModule,
		MatRippleModule,
		NgIf,
		NgFor,
	],
	providers: [ProjectService, provideNativeDateAdapter()],
	exports: [ProjectComponent],
})
export class ProjectModule {}
