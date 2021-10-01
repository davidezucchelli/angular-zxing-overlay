import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, ViewContainerRef } from '@angular/core';
import { ScannerComponent } from './scanner/scanner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  scanner: boolean = false;
  scannerOverlay: boolean = false;
  queryResult: string = '';

  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef
  ) {}

  openPanelWithBackdrop() {
    this.scanner = false;
    this.scannerOverlay = true;
    const config = new OverlayConfig({
      height: '70%',
      width: '70%',
      hasBackdrop: true,
      backdropClass: ['cdk-overlay-op-backdrop'],
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    });

    const overlayRef = this.overlay.create(config);
    const component = overlayRef.attach(
      new ComponentPortal(ScannerComponent, this.viewContainerRef)
    );
    component.instance.result.subscribe((result: string) => {
      overlayRef.detach();
      this.queryResult = result;
      this.scannerOverlay = false;
    });
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.detach();
      this.scannerOverlay = false;
    });

    overlayRef.addPanelClass('overlay-prova');
  }

  onChangeResult(event: string) {
    this.queryResult = event;
  }
}
