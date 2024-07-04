import {
	ChangeDetectionStrategy,
	Component,
	Input,
	Output,
	EventEmitter,
} from "@angular/core";
import { MatPaginatorModule, PageEvent } from "@angular/material/paginator";
import { PaginationDetails } from "../../types/pagination.type";

@Component({
	selector: "app-paginator",
	standalone: true,
	imports: [MatPaginatorModule],
	templateUrl: "./paginator.component.html",
	styleUrl: "./paginator.component.sass",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent {
	@Input() paginatorNumbers: number[] = [5, 10, 20];

	@Input({ required: true }) paginatorDetails!: PaginationDetails;

	@Output() changePaginationDataEmitter = new EventEmitter<PageEvent>();

	changePaginatorData(event: PageEvent) {
		this.changePaginationDataEmitter.emit(event);
	}
}
