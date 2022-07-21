import { DiscretRange } from '../../../types/filters';
import { LightPoint } from '../../../types/points';

const filterByDiscret = (discretValue: DiscretRange, points: LightPoint[]) => {
  const from = discretValue.rangeFrom;
  const to = discretValue.rangeTo;

  const updatedPoints = points.filter(
    (point) => from <= point.date && point.date <= to
  );

  return updatedPoints;
};

export default filterByDiscret;
