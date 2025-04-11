import axios from "axios"

export const getUserData = async()=>{
  try {
    const response = await axios.get("http://localhost:3000/api/user")
	  return response.data;
  }  catch(e) {
    console.log(e);
  }
}


export default async function Home() {
  const userDetails = await getUserData();
  return (
    <div className="bg-amber-950 flex  flex-col justify-right border-2 my-60 mx-180">
      <div className=" text-amber-100">
      hi there!<br />
      Email: {userDetails.email} <br />
      Name: {userDetails.name}
      </div> 
    </div>
  );
}
