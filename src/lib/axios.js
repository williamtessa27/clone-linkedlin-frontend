import axios from "axios";

export const axiosInstance = axios.create({
	// baseURL: "http://localhost:5000/api/v1",
	baseURL: "https://clone-linkedlin.onrender.com/api/v1",
	withCredentials: true,
});
