// import axios from "axios";
// import { FETCH_LIBRARY } from "../actions/library";
// import userMiddleware from "./user";

// // const axiosInstance = axios.create({
// //     baseURL: 'http://localhost:8080',
// //   });

// const libraryMiddleware = (store) => (next) => (action) => {
//     switch (action.type) {
//         case FETCH_LIBRARY: 
//                 userMiddleware.axiosInstance.get("/library").then((res) => {
//                     console.log(res);
//                 }).catch((err) => {
//                     console.log(err);    
//                 });
            
//             next(action);
//             break;
//         default: 
//             next(action);
//             break;
//     }
// }

// export default libraryMiddleware;