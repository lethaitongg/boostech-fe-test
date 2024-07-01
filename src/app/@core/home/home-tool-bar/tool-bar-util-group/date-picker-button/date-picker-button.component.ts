import { Component, OnDestroy } from "@angular/core";
import { Subscription, map, timer } from "rxjs";

@Component({
	selector: "home-date-picker-button",
	templateUrl: "./date-picker-button.component.html",
	styleUrl: "./date-picker-button.component.sass",
})
export class DatePickerButtonComponent implements OnDestroy {
	currentDate = new Date();
	dateSubscription: Subscription;

	constructor() {
		this.dateSubscription = timer(0)
			.pipe()
			.pipe(map(() => new Date()))
			.subscribe(date => (this.currentDate = date));
	}

	ngOnDestroy(): void {
		this.dateSubscription.unsubscribe();
	}
}
