import { intervalToDuration, isSameWeek } from 'date-fns';

const getMaxDiscret = (period: number[]) => {
  let discretLevel = 0;

  const periodFrom = new Date(period[0]);
  const periodTo = new Date(period[1]);

  const interval = intervalToDuration({
    start: periodFrom,
    end: periodTo,
  });

  if (interval.years === 0) {
    if (interval.months === 0) {
      discretLevel = 1;
      if (isSameWeek(periodFrom, periodTo, { weekStartsOn: 1 })) {
        discretLevel = 2;
        if (interval.days === 0) {
          discretLevel = 3;
        }
      }
    }
  } else {
    discretLevel = 0;
  }

  return discretLevel;
};

export default getMaxDiscret;
