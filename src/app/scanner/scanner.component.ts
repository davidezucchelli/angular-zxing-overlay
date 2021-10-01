import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css'],
})
export class ScannerComponent {
  @Output() result = new EventEmitter<string>();

  clearResult(): void {
    this.result.emit('');
  }

  scanSuccessHandler(resultString: string) {
    this.result.emit(resultString);
  }

  camerasNotFoundHandler() {
    alert('Fotocamera not Found');
  }

  scanErrorHandler() {
    alert('Scan error');
  }
}
