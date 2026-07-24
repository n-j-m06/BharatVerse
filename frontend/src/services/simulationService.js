import api from "./api";

export const runSimulation = async (city, scenario) => {
  const res = await api.post("/simulation/run", {
    city,
    scenario,
  });

  return res.data;
};