export const graphDataSerializer = (data, name = "Jessica Taylor") => {
  const mwData = data.map((dt) => {
    return {
      name: dt.name,
      hist: dt.diagnosis_history,
      list: dt.diagnostic_list,
    };
  });

  return mwData
    .find((dt) => dt.name === name)
    .hist.map((h) => {
      return {
        xAxisLabel: h.month.slice(0, 3) + ", " + h.year,
        bloodPressure: h.blood_pressure,
        heartRate: h.heart_rate,
        respiratoryRate: h.respiratory_rate,
        temperature: h.temperature,
      };
    });
};

export const dataInfoSerializer = (data, name = "Jessica Taylor") => {
  return data.find((dt) => dt.name === name);
};
