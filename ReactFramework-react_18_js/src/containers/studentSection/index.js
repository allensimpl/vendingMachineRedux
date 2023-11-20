/* eslint-disable max-lines-per-function */
/* eslint-disable no-unused-vars */
import { Navigate, useNavigate } from "react-router-dom";
import { data } from "../../data";
import "./styles.css";
import locations from "../../locations";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadData, clearDeleteStudents, clearUpdateStudents } from "../../router/redux/actions";
export const StudentSection = (props) => {
	// eslint-disable-next-line no-empty-function
	const navigate = useNavigate();
	const productClick = (id) => {
		navigate(locations.PROFILE + "/" + id);
	};
	const select = useSelector(state => state.mainReducer);
	const dispatch = useDispatch();

	const getData = () => {
		dispatch(loadData());
	};

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		if (select.deleteStudentsCompleted === "FULFILLED") {
			getData();
			dispatch(clearDeleteStudents());
		}
		if (select.deleteStudentsCompleted === "REJECTED") {
			dispatch(clearDeleteStudents());
		}
	}, [select.deleteStudentsCompleted]);



	const deleteData = ((e, id) => {
		e.stopPropagation();
		dispatch(deleteUser(id));
	});

	return (
		<div className="product-container">
			{console.log("select", select)}
			{select.students.map((x) => {
				return (
					<div key={x.id} className="product-card" onClick={(e) => productClick(x.id)}>
						<h1>Name: {x.name}</h1>
						<h1>Age: {x.age}</h1>
						<h1>Class: {x.class}</h1>
						<button onClick={(e) => deleteData(e, x.id)}>Delete</button>
					</div>
				);
			})}
		</div>
	);
};