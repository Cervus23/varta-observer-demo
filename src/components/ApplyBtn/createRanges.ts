import { endOfDay, endOfWeek, endOfMonth } from 'date-fns';
import { LightPoint } from '../../types/points';
import { DiscretRange } from '../../types/filters';

const isIncludePoint = (points: LightPoint[], from: number, to: number) => {
  return (
    points.findIndex((point) => from <= point.date && point.date <= to) !== -1
  );
};

const createRanges = (
  ranges: DiscretRange[],
  from: number,
  to: number,
  points: LightPoint[],
  discretType: string
): DiscretRange[] => {
  const localFrom = new Date(from).getTime();

  let localTo = to;
  let localRanges = [...ranges];

  switch (discretType) {
    case 'month': {
      localTo = endOfDay(endOfMonth(new Date(from))).getTime();
      if (localTo > to) localTo = to;
      break;
    }
    case 'week': {
      localTo = endOfDay(
        endOfWeek(new Date(from), { weekStartsOn: 1 })
      ).getTime();
      if (localTo > to) localTo = to;
      break;
    }
    case 'day': {
      localTo = endOfDay(new Date(from)).getTime();
      if (localTo > to) localTo = to;
      break;
    }
    default: {
      localTo = to + 1;
      break;
    }
  }

  if (isIncludePoint(points, from, localTo)) {
    localRanges = [
      ...localRanges,
      {
        rangeFrom: localFrom,
        rangeTo: localTo,
      },
    ];
  }

  localTo += 1;

  if (localTo > to) {
    return localRanges;
  }

  return createRanges(localRanges, localTo, to, points, discretType);
};

export default createRanges;
