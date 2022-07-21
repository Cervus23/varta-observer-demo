import {
  ClusterIconInfo,
  MarkerExtended,
} from '@react-google-maps/marker-clusterer/src/types';

export default function clusterCalculator(
  markers: MarkerExtended[],
  index: number
): ClusterIconInfo {
  const count = markers.length;

  let clusterColor = 0;

  markers.forEach((marker: any) => {
    if (marker.zIndex === 100) {
      clusterColor = 4;
    }
    if (marker.zIndex === 30 && clusterColor < 4) {
      clusterColor = 3;
    }
    if (marker.zIndex === 20 && clusterColor < 3) {
      clusterColor = 2;
    }
    if (marker.zIndex === 10 && clusterColor < 2) {
      clusterColor = 1;
    }
  });

  const numberOfDigits = Math.min(count.toString().length, 3);

  const styleIndex = Math.min(numberOfDigits + clusterColor * 3, index);

  return {
    text: count.toString(),
    index: styleIndex,
    title: '',
  };
}
