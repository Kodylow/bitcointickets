import { Publisher, Subjects, TicketUpdatedEvent } from '@lndevs/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
