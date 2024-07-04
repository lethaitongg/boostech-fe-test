export interface PaginationDetails {
	totalElements: number;
	page: number;
	limit: number;
	numberOfPages: number;
	nextPageUrl: string;
	prevPageUrl: string;
	includeDeleted: boolean;
	searchByName: string;
	orderBy: string;
	order: string;
}

export interface PaginationData<T> {
	data: T[];
	details: PaginationDetails;
}
