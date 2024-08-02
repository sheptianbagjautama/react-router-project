import { useEffect, useState } from "react";

import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

function EventsPage() {
  //get data from params routing loader
  const events = useLoaderData();
  return <EventsList events={events} />;
}

export default EventsPage;
