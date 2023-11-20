import { Events } from "./events";

const initalData = {
	students: [],
	getStudentsCompleted: null,
	deleteStudentsCompleted: null,
	student: {},
	getOneStudentsCompleted: null,
	updateStudentsCompleted: null
};


const reducer = (state = initalData, action) => {
	switch (action.type) {
		case (Events.LOAD_DATA_FULFILLED):
			return { 
				...state, 
				getStudentsCompleted: "FULFILLED",
				students: action.payload.data 
			};
		case (Events.LOAD_DATA_REJECTED):
			return { 
				...state, 
				getStudentsCompleted: "REJECTED"
			};
		case (Events.CLEAR_GET_ALL_STUDENTS):
			return { 
				...state, 
				getStudentsCompleted: null
			};
		case (Events.LOAD_STUDENT_FULFILLED):
			return { 
				...state, 
				student: action.payload.data
			};
		case (Events.DELETE_USER_FULFILLED):
			return { 
				...state,
				deleteStudentsCompleted: "FULFILLED"
			};
		case (Events.DELETE_USER_REJECTED):
			return { 
				...state,
				deleteStudentsCompleted: "REJECTED"
			};
		case (Events.CLEAR_DELETE_STUDENTS):
			return { 
				...state,
				deleteStudentsCompleted: null
			};	
		case (Events.EDIT_USER_FULFILLED):
			return { 
				...state, 
				updateStudentsCompleted: "FULFILLED"
			};
		case (Events.EDIT_USER_REJECTED):
			return { 
				...state, 
				updateStudentsCompleted: "REJECTED"
			};
		case (Events.CLEAR_EDIT_USER):
			return { 
				...state, 
				updateStudentsCompleted: null
			};
		default:
			return state;
	}
};

export default reducer;