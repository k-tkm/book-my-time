"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { EventContentArg } from "@fullcalendar/core/index.js";

const events = [{ title: "Meeting", start: new Date() }];
const renderEventContent = (eventInfo: EventContentArg) => {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
};

export default function Home() {
  return (
    <div>
      <div>
        <FullCalendar
          headerToolbar={{
            start: "today prev next",
            end: "dayGridWeek",
          }}
          plugins={[dayGridPlugin]}
          initialView="dayGridWeek"
          weekends={true}
          events={events}
          eventContent={renderEventContent}
          views={{
            dayGridWeek: {
              title: "Weekly",
            },
          }}
        />
      </div>
    </div>
  );
}
