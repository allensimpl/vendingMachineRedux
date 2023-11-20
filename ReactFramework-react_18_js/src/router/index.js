import { Routes, Route } from "react-router-dom";
import Locations from "../locations";
import { StudentSection } from "../containers/studentSection";
import { StudentProfile } from "../containers/studentProfile";



export const Router = () => {
	console.log("Router");

	return (
		<Routes>
			<Route path={Locations.STUDENTS} element={<StudentSection/>}/>
			<Route path={Locations.PROFILE + "/:id"} element ={<StudentProfile />} />
		</Routes>
	);
};