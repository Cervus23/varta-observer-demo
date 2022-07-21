import { Dispatch } from "redux";
import pRetry from "p-retry";
import { PointsActionTypes, FilterQuery, RawPoint } from "../types/points.ts";
import { DevicesActionTypes } from "../types/devices.ts";
// import { SettingsActionTypes } from "../types/settings.ts";

// import { getSettings } from "../renderer/settingsAPI";

// export const getLanguage = () => {
//   return (dispatch: Dispatch) => {
//     getSettings()
//       .then((settings) => {
//         return dispatch({
//           type: SettingsActionTypes.SET_LANGUAGE,
//           payload: settings.language,
//         });
//       })
//       .catch((err) => console.log(err));
//   };
// };

const fetchDevices = async (dispatch: Dispatch) => {
  const result = await fetch(`http://localhost:3001/devices`, {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      // Authorization: `${localStorage.getItem("accessToken")}`,
    },
  }).then((response) => {
    // if (response.status === 401) {
    //   refresh(user, dispatch);
    //   throw new Error(response.statusText);
    // }
    if (!response.ok && response.status !== 401) {
      throw new Error(response.statusText);
    }
    return response.json();
  });

  return result;
};

const fetchPoints = async (path: string, dispatch: Dispatch) => {
  const result = fetch(path, {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      // Authorization: `${localStorage.getItem("accessToken")}`,
    },
  }).then((response) => {
    // if (response.status === 401) {
    //   refresh(user, dispatch);
    //   throw new Error(response.statusText);
    // }
    if (!response.ok && response.status !== 401) {
      throw new Error(response.statusText);
    }
    return response.json();
  });

  return result;
};

export const getPoints = (query: FilterQuery) => {
  return (dispatch: Dispatch) => {
    const rootPath = "http://localhost:3001/points/";

    let path = query.devices.length
      ? query.devices.reduce((result: string, id: string, index: number) => {
          if (index === 0) {
            return `${result}?id=${id}`;
          }
          return `${result}&id=${id}`;
        }, rootPath)
      : `${rootPath}?id=null`;

    path = `${path}&minValue=${query.minValue}`;

    if (query.gasType) {
      path = `${path}&gasType=${query.gasType}`;
    }

    if (query.period.length) {
      path = `${path}&dateFrom=${query.period[0]}&dateTo=${query.period[1]}`;
    }

    pRetry(() => fetchPoints(path, dispatch), {
      onFailedAttempt: (error) => {
        console.log(`Attempt ${error.attemptNumber} failed. Trying again.`);
      },
      retries: 1,
    })
      .then((data) => {
        const formattedPoints = data.map((point: RawPoint) => ({
          position: [point.lat_value, point.lng_value],
          date: parseInt(point.date, 10),
          gasType: point.gas_type,
          gasValue: point.gas_value,
          gasUnits: point.gas_units,
          ID: point.id,
          icon: point.icon,
          zIndex: point.z_index,
          deviceId: point.device_id,
        }));
        return dispatch({
          type: PointsActionTypes.SET_POINTS,
          payload: formattedPoints,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const getDevices = () => {
  return (dispatch: Dispatch) => {
    pRetry(() => fetchDevices(dispatch), {
      onFailedAttempt: (error) => {
        console.log(`Attempt ${error.attemptNumber} failed. Trying again.`);
      },
      retries: 1,
    })
      .then((data) => {
        if (data) {
          dispatch({
            type: DevicesActionTypes.GET_AVAILABLE_DEVICES,
            payload: data,
          });
        }
        return data;
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
