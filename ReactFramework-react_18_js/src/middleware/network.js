import axios from "axios";
import { message } from "antd";
export const setupInterceptors = () => {
	axios.interceptors.response.use(
		(response) => {
			return handleResponse(response);
		},
		(error) => {
			return handleResponse(error.response);
		}
	);
};

const handleResponse = (response) => {
	if (!response || !response.status) {
		message.error("Something went wrong"); 
	}
	if (response && response.status && (response.status === 403 || response.status === 401)) {
		//logout here
		message.error(response.data && response.data.message ? response.data.message : "Something went wrong");
		return Promise.reject(response);
	}
	if (response && response.status.toString().startsWith("5")) {
		message.error(response.data && response.data.message ? response.data.message : "Something went wrong");
		return Promise.reject(response);
	}
	if (response.status.toString().startsWith("4")) {
		message.error(response.data && response.data.message ? response.data.message : "Something went wrong");
		return Promise.reject(response);
	}
	if (response.data && response.data.message && response.status.toString().startsWith("2") && response.method !== "GET") {
		response.data.message && message.success(response.data.message);
		return response;
	}
    
	return response;
};