import dayjs from "dayjs";

type DateString =
  `${number}${number}${number}${number}-${number}${number}-${number}${number}`;

export interface EventProps {
  address: string;
  date: DateString;
  facebookEventId: string;
  locationName: string;
  startTime: string;
}

export const Event = (props: EventProps) => {
  const { address, date, facebookEventId, locationName, startTime } = props;
  const yesterday = dayjs().subtract(1, "day");
  const formattedDate = dayjs(date).format("dddd, MMM D");
  const href = facebookEventId
    ? `https://www.facebook.com/events/${facebookEventId}/`
    : "https://www.facebook.com/luckystoneband";

  if (!yesterday.isBefore(date)) {
    return null;
  }

  return (
    <a className="event" href={href}>
      <div className="header date">
        <div>
          {formattedDate}
          <div className="subtext start-time">{startTime}</div>
        </div>
      </div>
      <div className="header location">
        <i className="fa-solid fa-location-dot fa-xl"></i>
        <div>
          <div className="location-name">{locationName}</div>
          <div className="subtext">{address}</div>
        </div>
      </div>
      <div className="link">View more</div>
    </a>
  );
};
