import { format, parseISO, parse, isValid } from "date-fns";

const DateFormatter = ({ date }) => {
  const dateToFormat = new Date(date);
  if (isValid(parseISO(dateToFormat))) {
    return format(parse(dateToFormat), "dd MMM yyyy");
  }
};

export default DateFormatter;
