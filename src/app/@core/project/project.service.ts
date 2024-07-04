import { UUID } from "crypto";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Project } from "./project.type";
import { PaginationData, PaginationDetails } from "../../common/types/pagination.type";

@Injectable()
export class ProjectService {
	constructor(private httpClient: HttpClient) {}

	getAllProject({
		page = 1,
		limit = 0,
		includeDeleted,
		searchByName,
		order,
		orderBy,
	}: PaginationQueries): Observable<PaginationData<Project>> {
		let url = `http://localhost:8080/api/v1/projects?page=${page - 1}&limit=${limit}`;

		if (searchByName) {
			url += `&searchByName=${searchByName}`;
		}

		if (orderBy) {
			url += `&orderBy=${orderBy}`;
		}

		if (order) {
			url += `&order=${order}`;
		}

		if (includeDeleted) {
			url += `&includeDeleted=${includeDeleted}`;
		}

		return this.httpClient.get<PaginationData<Project>>(url);
	}

	createOneProject(
		data: Partial<{
			name: string | null;
			client: string | null;
			manager: string | null;
			startDate: Date | null;
			endDate: Date | null;
			processStatus: string | null;
			budget: string | null;
			description: string | null;
		}>
	) {
		return this.httpClient.post("http://localhost:8080/api/v1/projects", data);
	}

	getOneProjectById(id: string) {
		return this.httpClient.get<Project>(`http://localhost:8080/api/v1/projects/${id}`);
	}
}

export type PaginationQueries = Pick<
	Partial<PaginationDetails>,
	"page" | "limit" | "includeDeleted" | "searchByName" | "order" | "orderBy"
>;

export interface CreateProjectRequest {
	name: string;
	client: string;
	manager: string;
	startDate: Date;
	endDate: Date;
	processStatus: string;
	budget: string;
	description: string;
}
