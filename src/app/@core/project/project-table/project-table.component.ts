import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { Project } from "../project.type";
import { ActivatedRoute } from "@angular/router";
import { PaginationQueries, ProjectService } from "../project.service";
import { DisplayedColumn } from "../../../common/components/table/table.component";
import { PaginationData } from "../../../common/types/pagination.type";
import { Sort } from "@angular/material/sort";

@Component({
	selector: "project-table",
	templateUrl: "./project-table.component.html",
	styleUrl: "project-table.component.sass",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectTableComponent implements OnInit {
	projectPagination?: PaginationData<Project>;
	paginatorNumbers: number[] = [1, 2, 5, 10, 20];

	displayedColumns: DisplayedColumn[] = [
		{
			name: "id",
			type: "string",
			displayName: "ID",
		},
		{
			name: "name",
			type: "string",
			displayName: "Name",
		},
		{
			name: "clientId",
			type: "string",
			displayName: "Client",
			avatar: true,
		},
		{
			name: "managerId",
			type: "string",
			displayName: "Manager",
			avatar: true,
		},
		{
			name: "budget",
			type: "number",
			displayName: "Budget",
		},
		{
			name: "processStatus",
			type: "string",
			displayName: "Process Status",
		},
		{
			name: "startDate",
			type: "date",
			displayName: "Start Date",
		},
		{
			name: "endDate",
			type: "date",
			displayName: "End Date",
		},
	];

	constructor(
		private projectService: ProjectService,
		private route: ActivatedRoute,
		private changeDetectorRef: ChangeDetectorRef
	) {
		// this.paginatorDetails = {
		// 	totalElements: 0,
		// 	numberOfPages: 1,
		// 	page: 0,
		// 	limit: 0,
		// 	nextPageUrl: "",
		// 	prevPageUrl: "",
		// 	includeDeleted: false,
		// 	order: "",
		// 	orderBy: "",
		// 	searchByName: "",
		// };
		//console.log(route.snapshot.queryParamMap.get("page"));
	}

	ngOnInit(): void {
		this.getAll({});
	}

	changePaginatorData({ pageIndex, pageSize }: PageEvent) {
		if (this.projectPagination) {
			const {
				details: { order, orderBy, searchByName },
			} = this.projectPagination;

			console.log(order, orderBy);
			this.getAll({ page: pageIndex + 1, limit: pageSize, order, orderBy, searchByName });
		}
	}

	handleSort({ active, direction }: Sort) {
		if (this.projectPagination) {
			const {
				details: { limit, searchByName },
			} = this.projectPagination;

			this.getAll({ limit, searchByName, orderBy: active, order: direction });
		}
	}

	private getAll({
		page = 1,
		limit = this.paginatorNumbers[0],
		order = "",
		orderBy = "",
		searchByName = "",
	}: PaginationQueries) {
		this.projectService
			.getAllProject({ page, limit, order, orderBy, searchByName })
			.subscribe(data => {
				this.projectPagination = data;
				this.changeDetectorRef.markForCheck();
			});
	}
}
