import axios from "axios";

// const axis = axios({
// 	method: "get",
// 	url: "http://localhost:9090/student?pageNo=1&pageSize=100"
// 	// data: {
// 	// 	firstName: "Finn",
// 	// 	lastName: "Williams"
// 	// }
// });
  
axios.get("http://localhost:9090/student?pageNo=1&pageSize=100").then((response) => {
	console.log(response);
});