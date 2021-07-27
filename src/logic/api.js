import base from './baseUrl';

const fetchUnits = async (token) => {
  const response = await fetch(`${base}/units`, {
    mode: 'cors',
    method: 'get',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((r) => r.json());
  return response.units;
};

const saveMeasurement = async (id, value, token) => {
  const data = {
    value,
  };
  fetch(`${base}/units/${id}/measurements`, {
    mode: 'cors',
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
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
      Authorization: `Bearer ${token}`,
    },
  })
    .then((r) => r.json());
  return response.data;
};

export { fetchUnits, saveMeasurement, fetchAllMeasurements };
