import { Component, ViewChild, inject } from '@angular/core';
import { IonModal, RefresherCustomEvent } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { DataService, Fact } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private data = inject(DataService);
  colorArray: string[] = [
    'primary',
    'secondary',
    'tertiary',
    'success',
    'warning',
    'danger',
    'light',
    'medium',
    'dark',
  ];
  @ViewChild(IonModal) modal!: IonModal;
  public fact: string = '';
  constructor() {}

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): Fact[] {
    return this.data.getFacts();
  }
  onAddButtonClick() {
    console.log('i am clicked');
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.fact, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      // this.message = `Hello, ${ev.detail.data}!`;
    }
  }
}
