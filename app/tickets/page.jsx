import React from "react";
import TicketList from "./TicketList";

const page = () => {
  return (
    <div>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Currently open ticket</small>
          </p>
        </div>
      </nav>
      <TicketList />
    </div>
  );
};

export default page;
