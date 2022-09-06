import { makeAutoObservable } from "mobx";
import { ToastType } from "../utils/ToastType";

class ToastStore {
  constructor() {
    makeAutoObservable(this);
  }
  
   _toastList = [];

  get toastList() {
    return this._toastList;
  }

  successToast(message) {
    this.show(message, ToastType.success);
  }

  errorToast(message) {
    this.show(message, ToastType.error);
  }

  infoToast(message) {
    this.show(message, ToastType.info);
  }

  show(message, type) {
    const d = Date.now();
    this._toastList.push({ id: d, message: message, type: type });

    setTimeout(() => {
      for (let i = 0; i < this._toastList.length; i++) {
        if (this._toastList[i].id === d) {
          this._toastList.splice(i, 1);
        }
      }
    }, 3000);
  }
}

export default new ToastStore();
