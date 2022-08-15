import { format } from "date-fns";

const DateFormatter = ({ date }) => {
  return format(new Date(date), "dd MMM yyyy");
};

export default DateFormatter;
