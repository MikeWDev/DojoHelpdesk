import React, { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";

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
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </div>
  );
};

export default page;
