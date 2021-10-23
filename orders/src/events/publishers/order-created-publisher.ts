import { Publisher, OrderCreatedEvent, Subjects } from '@lndevs/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
