import { Publisher, Subjects, TicketCreatedEvent } from '@lndevs/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
