import { instanceAxios } from "./api";


// Función que realiza una petición GET a la API
export const get = async (endpoint) => {
    const response = await instanceAxios.get(endpoint);
    return response.data;
  };







// const URL_API = "http://localhost:3000";
// const endpointLinks ='principal_navBar'


//  export const getNavBar = async () => {
//     try {
//         const { data } = await axios.get(
//           `${URL_API}${endpointLinks}`
//         );

//         return data;
        
//     } catch (error) {
//         console.log(error);
//         return [];
//     }
// }


// // export const ListUser = () => {
// //     const navigate = useNavigate();
// //     const [users, handleUsers] = useState([]);

// //     const getUsers = async() => {
// //         const getusers = await get('users');
// //         handleUsers(getusers);
// //     }
// // export const get = async (endpoint) => {
// //     const response = await instanceAxios.get(endpoint);
// //     return response.data;
// //   };
// // }