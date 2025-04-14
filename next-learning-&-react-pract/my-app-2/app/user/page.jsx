import axios from "axios";
const getUserData = async () => {
    const response = await axios.get("http://localhost:3000/api/user");
    return response.data;
};
export default async function User() {
    const data = await getUserData();
    return (<div>
        {data.email},
        {data.name}
    </div>);
}
