import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private messageService: MessageService,
  ) { }

  /**
   * Show an error toast
   *
   * @param summary
   * @param detail
   */
  showError(summary: string, detail: string, place?: string) {
    this.messageService.add({
      severity: 'error',
      summary: summary,
      detail: detail,
      key: place
    });
  }

  /**
   * Show an info toast
   *
   * @param summary
   * @param detail
   */
  showInfo(summary: string, detail: string, place?: string) {
    this.messageService.add({
      severity: 'info',
      summary: summary,
      detail: detail,
      key: place
    });
  }

  /**
   * Show a warn toast
   *
   * @param summary
   * @param detail
   */
  showWarn(summary: string, detail: string, place?: string) {
    this.messageService.add({
      severity: 'warn',
      summary: summary,
      detail: detail,
      key: place
    });
  }

  /**
   * Show a success toast
   *
   * @param summary
   * @param detail
   */
  showSuccess(summary: string, detail: string, place?: string) {
    this.messageService.add({
      severity: 'success',
      summary: summary,
      detail: detail,
      key: place
    });
  }

}
