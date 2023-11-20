/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from "react-router-dom";
import "./styles.css";
// import { data } from "../../data";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser, loadUser, clearUpdateStudents, loadData } from "../../router/redux/actions";
import locations from "../../locations";
// eslint-disable-next-line max-lines-per-function
export const StudentProfile = () => {
	const { id } = useParams(); 
	const navigate = useNavigate();
	const [student, setStudent] = useState(
		{
			name: "",
			email: "",
			age: 0
		}
	);
	const studentReducer = useSelector(state => state.mainReducer);
	const dispatch = useDispatch();
	const getData = () => {
		dispatch(loadData());
	};

	useEffect(() => {
		dispatch(loadUser(id));
	}, []);

	useEffect(() => {
		setStudent(studentReducer.student);
	}, [studentReducer.student]);

	const handleChangeName = (event) => {
		setStudent({ ...student, name: event.target.value });
		console.log("consoling student",  student);
	};

	const handleChangeAge = (event) => {
		setStudent({ ...student, age: event.target.value });
		console.log("consoling student",  student);
	};

	const handleChangeEmail = (event) => {
		setStudent({ ...student, email: event.target.value });
		console.log("consoling student",  student);
	};

	const updateStudent = () => {
		dispatch(editUser(id, student));
		
	};

	useEffect(() => {
		if (studentReducer.updateStudentsCompleted === "FULFILLED") {
			navigate(locations.STUDENTS);
			dispatch(clearUpdateStudents());
		}
		if (studentReducer.updateStudentsCompleted === "REJECTED") {
			dispatch(clearUpdateStudents());
		}
	}, [studentReducer.updateStudentsCompleted]);


	return (
		<div className="profile-container">
			<div className="profile">
				<h1>StudentsProfile</h1>
				<h1 >Name: {student.name}</h1>
				{/* <h1 contentEditable onChange={(event) => handleChange(event)}>{select.data.name}</h1> */}
				{/* <h1 contentEditable='true' onInput={(event) => console.log(event.currentTarget.textContent)}>{select.data.name}</h1> */}
				{/* <h1 contentEditable='true' onInput={(event) => console.log("the contentttt:=> ", event.currentTarget.textContent)}>Hello</h1> */}
				<input type="text" value={student.name} onChange={(event) => handleChangeName(event)}></input>
				<h1>Age: {student.age}</h1>
				<input type="text" value={student.age} onChange={(event) => handleChangeAge(event)}></input>
				<h1>Email: {student.email}</h1>
				<input type="text" value={student.email} onChange={(event) => handleChangeEmail(event)}></input>
				<div>
					<button onClick={() => updateStudent()}>Update</button>
				</div>
			</div>
		</div>
	);
};