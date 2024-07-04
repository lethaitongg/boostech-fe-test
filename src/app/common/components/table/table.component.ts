import {
	ChangeDetectionStrategy,
	Component,
	Input,
	OnChanges,
	Output,
	SimpleChanges,
	EventEmitter,
} from "@angular/core";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { PluckPipe } from "../../pipes/fluck.pipe";
import { JsonPipe, NgFor, NgIf } from "@angular/common";
import { MatSortModule, Sort } from "@angular/material/sort";

@Component({
	selector: "app-table",
	standalone: true,
	imports: [MatTableModule, MatSortModule, PluckPipe, NgFor, NgIf, JsonPipe],
	templateUrl: "./table.component.html",
	styleUrl: "./table.component.sass",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent<T> implements OnChanges {
	@Input({ required: true }) displayedColumns!: DisplayedColumn[];

	@Input({ required: true }) items!: T[];

	@Output() sortChangeEmmiter = new EventEmitter<Sort>();

	dataSource: MatTableDataSource<T> = new MatTableDataSource<T>([]);

	ngOnChanges(changes: SimpleChanges): void {
		this.dataSource = new MatTableDataSource<T>(this.items);
	}

	handleSortChange(event: Sort) {
		this.sortChangeEmmiter.emit(event);
	}
}

// remove this
export interface DisplayedColumn {
	name: string;
	type: string;
	displayName: string;
	avatar?: boolean;
}
