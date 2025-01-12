import Navbar from "@/components/navbar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import User from "@/interfaces/user";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [userData, setUserData] = useState<User>();

  useEffect(() => {
    fetch('http://localhost:8080/api/user/' + '44444444-4444-4444-4444-444444444444')
      .then(response => response.json())
      .then(json => setUserData(json))
      .catch(error => console.error(error));
  }, []);

  const user = (
    <Card className='user' key={userData?.id}>
      <CardTitle>
      <p><b>Username: </b>{userData?.username}</p>
      </CardTitle>
      <CardContent>
        <p><b>Email: </b>{userData?.email}</p>
        <p><b>Total points: </b>{userData?.totalPoints}</p>
        <p><b>Account last updated at: </b>{userData?.updatedAt}</p>
        <p><b>Account created at: </b>{userData?.createdAt}</p>
      </CardContent>
    </Card>
  )

  return (
    <>
      <Navbar /> 
      {user}
    </>
  )
}