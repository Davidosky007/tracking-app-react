import base from "./baseUrl";


const fetchUnits = async (token) => {
  const response = await fetch(`${base}/units`, {
    mode: 'cors',
    method: 'get',
    headers: {
      withCredentials: true
    },
  })
    .then((r) => r.json());
  return response.units;
};

const saveMeasurement = async (id, value) => {
  const data = {
    value,
  };
  fetch(`${base}/units/${id}/measurements`, {
    mode: 'cors',
    method: 'POST',
    headers: {
      withCredentials: true,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

const fetchAllMeasurements = async (token) => {
  const response = await fetch(`${base}/measurements`, {
    mode: 'cors',
    headers: {
      withCredentials: true
    },
  })
    .then((r) => r.json());
  return response.data;
};

export { fetchUnits, saveMeasurement, fetchAllMeasurements };