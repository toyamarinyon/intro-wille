import { format } from "date-fns";

export const ymd = (date: number) => format(date, "MM.dd.yyyy");
