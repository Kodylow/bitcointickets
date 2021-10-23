import { Publisher, OrderCancelledEvent, Subjects } from '@lndevs/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
