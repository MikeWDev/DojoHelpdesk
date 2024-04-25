import Link from "next/link";
import React from "react";
import { resolve } from "styled-jsx/css";

async function getTickets() {
  const res = await fetch("http://localhost:2137/tickets", {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
}
const TicketList = async () => {
  const tickets = await getTickets();

  return (
    <>
      {tickets.map((ticket) => {
        return (
          <Link key={ticket.id} href={`tickets/${ticket.id}`}>
            <div className="card my-5" key={ticket.id}>
              <h3>{ticket.title}</h3>
              <p>{ticket.body.slice(0, 200)}...</p>
              <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
              </div>
            </div>
          </Link>
        );
      })}
      {tickets.lenght === 0 && (
        <p className="text-center">There is no open tickets</p>
      )}
    </>
  );
};

export default TicketList;
