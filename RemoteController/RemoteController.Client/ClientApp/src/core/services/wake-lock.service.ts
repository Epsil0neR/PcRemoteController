import { Injectable } from "@angular/core";
import { WakeLockSentinel, Navigator } from "src/@types/WakeLock";

@Injectable({
  providedIn: 'root'
})
export class WakeLockService {
  private _lock: WakeLockSentinel = null;
  private _autoLock = false;

  constructor() {
    document.addEventListener('visibilitychange', this.onVisibilityChange);
  }

  private async onVisibilityChange(): Promise<any> {
    if (this._lock === null)
      return;

    if (document.visibilityState === 'visible') {
      await this.lock();
    } else {
      await this.releaseLock();
    }
  }

  /**
   * Checks if WakeLock is available.
   */
  public isAvailable(): boolean {
    const n: Navigator = <any>navigator;
    return 'wakeLock' in n;
  }

  /**
   * Checks if currently is locked to be awake.
   */
  public isLocked(): boolean {
    return !!this._lock;
  }

  /**
   * Locks screen to be awake.
   */
  public async lock(): Promise<WakeLockSentinel> {
    if (!this.isAvailable())
      return;

    const n: Navigator = <any>navigator;
    var lock = await n.wakeLock.request('screen');
    this._lock = lock;
    this._autoLock = true;
    return lock;
  }

  /**
   * Releases wake lock.
   */
  public async releaseLock(): Promise<void> {
    if (this._lock) {
      await this._lock.release();
      this._lock = null;
      this._autoLock = false;
    }
  }
}
