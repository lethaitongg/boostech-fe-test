import { Routes } from "@angular/router";
import { HomeComponent } from "./@core/home/home.component";
import { ProjectComponent } from "./@core/project/project.component";
import { ProjectDetailComponent } from "./@core/project/project-detail/project-detail.component";

export const routes: Routes = [
	{
		path: "home",
		component: HomeComponent,
	},
	{
		path: "projects",
		component: ProjectComponent,
	},
	{
		path: "projects/:id",
		component: ProjectDetailComponent,
	},
];
