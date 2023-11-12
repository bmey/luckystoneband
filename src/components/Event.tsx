import dayjs from "dayjs";

type DateString =
  `${number}${number}${number}${number}-${number}${number}-${number}${number}`;

export interface EventProps {
  date: DateString;
  facebookEventId: string;
  locationName: string;
}

export const Event = (props: EventProps) => {
  const { date, facebookEventId, locationName } = props;
  const yesterday = dayjs().subtract(1, "day");
  const formattedDate = dayjs(date).format("dddd, MMM D");

  if (!yesterday.isBefore(date)) {
    return null;
  }

  return (
    <a
      className="event"
      href={`https://www.facebook.com/events/${facebookEventId}/`}
    >
      <div className="header date">
        <div>{formattedDate}</div>
      </div>
      <div className="header">
        <i className="fa-solid fa-location-dot"></i>
        <div>{locationName}</div>
      </div>
      <div className="link">View more</div>
    </a>
  );
};
