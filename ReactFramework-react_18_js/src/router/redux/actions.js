import axios from "axios";
import { Events } from "./events";

export const loadData = () => {
	return ({
		type: Events.LOAD_DATA,
		payload: axios.get("http://localhost:9090/students?pageNo=1&pageSize=100")
	});
};

export const clearGetAllStudents = () => {
	return ({
		type: Events.CLEAR_GET_ALL_STUDENTS
	});
};

export const loadUser = (id) => {
	return ({
		type: Events.LOAD_STUDENT,
		payload: axios.get(`http://localhost:9090/students/${id}`)
	});
};


export const deleteUser = (id) => {
	return ({
		type: Events.DELETE_USER,
		payload: axios.delete(`http://localhost:9090/students/${id}`),
		id: id
	});
};

export const clearDeleteStudents = () => {
	return ({
		type: Events.CLEAR_DELETE_STUDENTS
	});
};

export const editUser = (id, requestBody) => {
	return ({
		type: Events.EDIT_USER,
		payload: axios.put(`http://localhost:9090/students/${id}`, requestBody),
		id: id
	});
};

export const clearUpdateStudents = () => {
	return ({
		type: Events.CLEAR_EDIT_USER
	});
};