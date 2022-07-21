/* eslint-disable import/prefer-default-export */

import {
  smallClusterBlue,
  midClusterBlue,
  bigClusterBlue,
  smallClusterGreen,
  midClusterGreen,
  bigClusterGreen,
  smallClusterYellow,
  midClusterYellow,
  bigClusterYellow,
  smallClusterOrange,
  midClusterOrange,
  bigClusterOrange,
  smallClusterRed,
  midClusterRed,
  bigClusterRed,
} from './clusterIcons';

const getGoogleClusterInlineSvg = (cluster: string) => {
  const encoded = window.btoa(cluster);

  return `data:image/svg+xml;base64,${encoded}`;
};

const smallCluster = {
  width: 30,
  height: 30,
  textSize: 16,
};

const midCluster = {
  width: 45,
  height: 45,
  textSize: 16,
};

const bigCluster = {
  width: 55,
  height: 55,
  textSize: 16,
};

const fontFamily = 'Fjalla One';

const textNull = '#00456B';
const textLow = '#006B44';
const textMid = '#656B00';
const textMidHigh = '#6B4400';
const textHigh = '#6B1D00';

export const clusterStyle = [
  {
    width: smallCluster.width,
    height: smallCluster.height,
    textColor: textNull,
    textSize: smallCluster.textSize,
    fontFamily,
    url: getGoogleClusterInlineSvg(smallClusterBlue),
  },
  {
    width: midCluster.width,
    height: midCluster.height,
    textColor: textNull,
    textSize: midCluster.textSize,
    fontFamily,
    url: getGoogleClusterInlineSvg(midClusterBlue),
  },
  {
    width: bigCluster.width,
    height: bigCluster.height,
    textColor: textNull,
    textSize: bigCluster.textSize,
    fontFamily,
    url: getGoogleClusterInlineSvg(bigClusterBlue),
  },
  {
    width: smallCluster.width,
    height: smallCluster.height,
    textColor: textLow,
    textSize: smallCluster.textSize,
    fontFamily,
    url: getGoogleClusterInlineSvg(smallClusterGreen),
  },
  {
    width: midCluster.width,
    height: midCluster.height,
    textColor: textLow,
    textSize: midCluster.textSize,
    fontFamily,
    url: getGoogleClusterInlineSvg(midClusterGreen),
  },
  {
    width: bigCluster.width,
    height: bigCluster.height,
    textColor: textLow,
    textSize: bigCluster.textSize,
    fontFamily,
    url: getGoogleClusterInlineSvg(bigClusterGreen),
  },
  {
    width: smallCluster.width,
    height: smallCluster.height,
    textColor: textMid,
    textSize: smallCluster.textSize,
    fontFamily,
    url: getGoogleClusterInlineSvg(smallClusterYellow),
  },
  {
    width: midCluster.width,
    height: midCluster.height,
    textColor: textMid,
    textSize: midCluster.textSize,
    fontFamily,
    url: getGoogleClusterInlineSvg(midClusterYellow),
  },
  {
    width: bigCluster.width,
    height: bigCluster.height,
    textColor: textMid,
    textSize: bigCluster.textSize,
    fontFamily,
    url: getGoogleClusterInlineSvg(bigClusterYellow),
  },
  {
    width: smallCluster.width,
    height: smallCluster.height,
    textColor: textMidHigh,
    textSize: smallCluster.textSize,
    fontFamily,
    url: getGoogleClusterInlineSvg(smallClusterOrange),
  },
  {
    width: midCluster.width,
    height: midCluster.height,
    textColor: textMidHigh,
    textSize: midCluster.textSize,
    fontFamily,
    url: getGoogleClusterInlineSvg(midClusterOrange),
  },
  {
    width: bigCluster.width,
    height: bigCluster.height,
    textColor: textMidHigh,
    textSize: bigCluster.textSize,
    fontFamily,
    url: getGoogleClusterInlineSvg(bigClusterOrange),
  },
  {
    width: smallCluster.width,
    height: smallCluster.height,
    textColor: textHigh,
    textSize: smallCluster.textSize,
    fontFamily,
    url: getGoogleClusterInlineSvg(smallClusterRed),
  },
  {
    width: midCluster.width,
    height: midCluster.height,
    textColor: textHigh,
    textSize: midCluster.textSize,
    fontFamily,
    url: getGoogleClusterInlineSvg(midClusterRed),
  },
  {
    width: bigCluster.width,
    height: bigCluster.height,
    textColor: textHigh,
    textSize: bigCluster.textSize,
    fontFamily,
    url: getGoogleClusterInlineSvg(bigClusterRed),
  },
];
