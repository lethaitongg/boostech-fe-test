import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	Input,
	OnDestroy,
	OnInit,
	ChangeDetectorRef,
} from "@angular/core";

@Component({
	selector: "app-notification",
	standalone: true,
	imports: [],
	templateUrl: "./notification.component.html",
	styleUrl: "./notification.component.sass",
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent implements OnInit, AfterViewInit, OnDestroy {
	@Input() width: string = "377px";
	@Input() height: string = "92px";
	@Input() durable: number = 5;
	@Input() title: string = "Welcome back, Danh!";
	@Input() subtitle: string = "Happy work day!";
	style: Record<string, string | undefined | null> = {};
	displayTimeOutId?: NodeJS.Timeout;

	constructor(private changeDetectorRef: ChangeDetectorRef) {}

	ngOnInit(): void {
		const { width, height } = this;

		this.style = {
			width,
			height,
			display: "flex",
		};
	}

	ngAfterViewInit(): void {
		// this.displayTimeOutId = setTimeout(() => {
		// 	this.style = { ...this.style, display: "none" };
		// 	this.changeDetectorRef.markForCheck();
		// }, this.durable * 1000);
	}

	ngOnDestroy(): void {
		// clearTimeout(this.displayTimeOutId);
	}
}
