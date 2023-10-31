import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Calendar from "react-calendar";

const CalendarCard = () => {
  const [events, setEvents] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://api.npoint.io/3ffc10b11b4dd82745be"
        );
        setEvents(response.data);
        console.log(response.data);
      } catch (error) {
        toast.error("Error fetching data");
      }
    };
    getData();
  }, []);

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date).toLocaleDateString();
    return eventDate === date.toLocaleDateString();
  });

  const formatDate = (date) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-GB", options);
  };

  const formatTime = (date) => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    return date.toLocaleTimeString("id-ID", options);
  };

  return (
    <div className="bg-base shadow-[rgba(0,0,1,0.25)_0px_5px_25px_0px] w-[70%] h-[500px] rounded-xl">
      <div className="py-2.5 px-5 flex h-10 justify-center items-center">
        <div className="w-1/4 flex gap-2">
          <div className="rounded-full bg-red-600 h-2.5 w-2.5"></div>
          <div className="rounded-full bg-yellow-400 h-2.5 w-2.5"></div>
          <div className="rounded-full bg-green-600 h-2.5 w-2.5"></div>
        </div>
        <div className="w-1/2 bg-slate-100 rounded text-slate-400">
          the rolling stones events
        </div>
        <div className="w-1/4"></div>
      </div>
      <div className="w-full flex text-left">
        {filteredEvents.length > 0 ? (
          <div className="w-1/2 py-8 px-16">
            <p className="font-bold text-xs">AVAILABLE ON</p>
            <p className="text-3xl font-bold text-primary">
              {formatDate(new Date(filteredEvents[0].date))}
            </p>
            <div className="w-full h-20 pt-4 flex items-center">
              <img
                className="border-2 border-accent rounded-full object-cover w-16 h-16"
                src={filteredEvents[0].speaker.photo_url}
                alt={filteredEvents[0].speaker.name}
              />
              <div className="pl-4">
                <p className="font-bold">{filteredEvents[0].speaker.name}</p>
                <p className="text-xs">{filteredEvents[0].speaker.role}</p>
              </div>
            </div>
            <p className="text-3xl font-bold pt-4">{filteredEvents[0].name}</p>
            <div className="flex gap-2 pt-4 font-semibold">
              <img src="icons/clock.svg" alt="clock" />
              <p>{formatTime(new Date(filteredEvents[0].date))} WIB</p>
            </div>
            <div className="mt-8">
              <a
                className="bg-primary w-7/12 rounded-full text-accent font-bold py-3 px-6 text-center hover:opacity-50 hover:cursor-pointer"
                href={filteredEvents[0].watchlist_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                JOIN WATCHLIST
              </a>
            </div>
          </div>
        ) : (
          <div className="w-1/2 py-8 px-16 text-center">
            <img src="images/empty-events.svg" alt="empty-event" />
            <p>There are no events on this date</p>
          </div>
        )}
        <div className="w-1/2 py-2 px-16">
          <p className="font-bold text-xl">Pick a date and time</p>
          <div className="pt">
            <Calendar onChange={setDate} value={date} />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CalendarCard;
