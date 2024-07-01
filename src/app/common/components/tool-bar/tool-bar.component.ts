import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { MatBadgeModule } from "@angular/material/badge";
import { DatePipe } from "@angular/common";
import { ButtonIconComponent } from "../button-icon/button-icon.component";

@Component({
	selector: "app-tool-bar",
	standalone: true,
	imports: [
		MatCardModule,
		MatIconModule,
		MatButtonModule,
		MatBadgeModule,
		DatePipe,
		ButtonIconComponent,
	],
	templateUrl: "./tool-bar.component.html",
	styleUrl: "./tool-bar.component.sass",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolBarComponent implements OnInit {
	@Input() width: string = "550px";
	@Input() height: string = "69px";

	style: Record<string, string | undefined | null> = {};

	constructor(private _matIconRegistry: MatIconRegistry, private _domSanitizer: DomSanitizer) {
		this.addCustomIcons();
	}

	ngOnInit(): void {
		const { width, height } = this;

		this.style = {
			width,
			height,
		};
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
