import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export class SubscriptionsManager implements OnDestroy {
  // tslint:disable-next-line:variable-name
  private _subscriptions: Subscription[] = [];

  get subs(): Subscription | Subscription[] {
    return this._subscriptions;
  }

  set subs(sub: Subscription | Subscription[]) {
    if (sub && (sub instanceof Subscription)) {
      this._subscriptions.push(sub);
    } else if (sub instanceof Array) {
      this._subscriptions = this._subscriptions.concat(sub);
    }
  }

  ngOnDestroy() {
    this.unsubscribeAll();
  }

  protected unsubscribe(sub: Subscription) {
    const idx = this._subscriptions.indexOf(sub);

    if (idx >= 0) {
      this._subscriptions[idx].unsubscribe();
      this._subscriptions.splice(idx, 1);
    }
  }

  protected unsubscribeAll() {
    for (const sub of this._subscriptions) {
      if (sub) {
        sub.unsubscribe();
      }
    }
    this._subscriptions = [];
  }
}
