// src/notification/notification.interface.ts
export interface Notification {
  send(to: string, message: string): void;
}
