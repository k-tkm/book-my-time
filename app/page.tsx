"use client";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { EventContentArg } from "@fullcalendar/core/index.js";
import interactionPlugin from "@fullcalendar/interaction";

type EventObject = {
  start: Date | string;
  end: Date | string;
  title: string;
  id: string;
};

export default function Home() {
  const [events, setEvents] = useState<EventObject[]>([]);

  const renderEventContent = (eventInfo: EventContentArg) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  };

  const handleSelect = (info: Pick<EventObject, "start" | "end">) => {
    const { start, end } = info;
    const eventNamePrompt = prompt("Enter, event name");
    if (eventNamePrompt) {
      setEvents([
        ...events,
        {
          start,
          end,
          title: eventNamePrompt,
          id:
            Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15),
        },
      ]);
    }
  };
  return (
    <div>
      <div>
        <FullCalendar
          editable
          selectable
          select={handleSelect}
          headerToolbar={{
            start: "today prev next",
            end: "dayGridWeek",
          }}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridWeek"
          weekends={false}
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
