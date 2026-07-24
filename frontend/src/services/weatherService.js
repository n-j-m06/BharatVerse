import api from "./api";

export const getWeather = async () => {
    const res = await api.get("/weather/");
    return res.data;
};