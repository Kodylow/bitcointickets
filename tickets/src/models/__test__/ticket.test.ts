import { Ticket } from '../ticket';

it('implements optimistic concurrency control', async () => {
  //create instance of ticket
  const ticket = Ticket.build({
    title: 'test',
    price: 5,
    userId: '123',
  });

  //save ticket to database
  await ticket.save();

  //fetch ticket twice
  const firstInstance = await Ticket.findById(ticket.id);
  const secondInstance = await Ticket.findById(ticket.id);

  //make 2 changes to ticket fetched
  firstInstance!.set({ price: 10 });
  secondInstance!.set({ price: 15 });
  // save the first fetched ticket
  await firstInstance!.save();
  // save the second fetched ticket and expect an error
  try {
    await secondInstance!.save();
  } catch (err) {
    return;
  }

  throw new Error('Should not reach this point');
});

it('increments the version number on multiple saves', async () => {
  const ticket = Ticket.build({
    title: 'test',
    price: 5,
    userId: '123',
  });

  await ticket.save();
  expect(ticket.version).toEqual(0);
  await ticket.save();
  expect(ticket.version).toEqual(1);
  await ticket.save();
  expect(ticket.version).toEqual(2);
});
