import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
	selector: "[app-hover-elevation]",
	standalone: true,
})
export class HoverElevationDirective {
	@Input()
	elevationRange: [number, number] = [2, 8];

	constructor(private element: ElementRef, private renderer: Renderer2) {
		this.setElevation(this.elevationRange[0]);
	}

	@HostListener("mouseenter")
	onMouseEnter() {
		this.setElevation(this.elevationRange[1]);
	}

	@HostListener("mouseleave")
	onMouseLeave() {
		this.setElevation(this.elevationRange[0]);
	}

	setElevation(amount: number) {
		const elevationPrefix = "mat-elevation-z";
		// remove all elevation classes
		const oldElevations = Array.from(
			(<HTMLElement>this.element.nativeElement).classList
		).filter(item => item.startsWith(elevationPrefix));

		oldElevations.forEach(item => {
			this.renderer.removeClass(this.element.nativeElement, item);
		});

		// add the given elevation class
		const newClass = `${elevationPrefix}${amount}`;
		this.renderer.addClass(this.element.nativeElement, newClass);
	}
}
