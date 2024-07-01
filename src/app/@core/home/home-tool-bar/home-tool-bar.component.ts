import { ChangeDetectionStrategy, Component, OnDestroy } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Subscription, map, timer } from "rxjs";

@Component({
	selector: "home-tool-bar",
	templateUrl: "./home-tool-bar.component.html",
	styleUrl: "./home-tool-bar.component.sass",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeToolBarComponent implements OnDestroy {
	currentDate = new Date();
	dateSubscription: Subscription;

	constructor(private _matIconRegistry: MatIconRegistry, private _domSanitizer: DomSanitizer) {
		this.dateSubscription = timer(0)
			.pipe()
			.pipe(map(() => new Date()))
			.subscribe(date => (this.currentDate = date));

		this.addCustomIcons();
	}

	ngOnDestroy(): void {
		this.dateSubscription.unsubscribe();
	}

	private addCustomIcons() {
		this._matIconRegistry.addSvgIcon(
			"setting",
			this._domSanitizer.bypassSecurityTrustResourceUrl("../../../../assets/setting-icon.svg")
		);
		this._matIconRegistry.addSvgIcon(
			"inventory",
			this._domSanitizer.bypassSecurityTrustResourceUrl(
				"../../../../assets/inventory-icon.svg"
			)
		);
		this._matIconRegistry.addSvgIcon(
			"topic",
			this._domSanitizer.bypassSecurityTrustResourceUrl("../../../../assets/topic-icon.svg")
		);
		this._matIconRegistry.addSvgIcon(
			"notification",
			this._domSanitizer.bypassSecurityTrustResourceUrl(
				"../../../../assets/notification-icon.svg"
			)
		);
	}
}
