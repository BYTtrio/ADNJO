import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import User from "@/interfaces/user";
import { format } from "date-fns/format";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [userData, setUserData] = useState<User>();


  useEffect(() => {
    fetch('http://localhost:8080/api/user/' + '44444444-4444-4444-4444-444444444444')
      .then(response => response.json())
      .then(json => setUserData(json))
      .catch(error => console.error(error));
  }, []);

  const User = userData ? (
    <Card className="p-4" key={userData.id}>
      <CardContent>
        <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold">Profile</h1>
                <p><b>Total points: </b>{userData.totalPoints}</p>
                <p><b>Account last updated at: </b>{format(userData.updatedAt, "PPP")}</p>
                <p><b>Account created at: </b>{format(userData.createdAt, "PPP")}</p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Your email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={userData.email}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="username">Your username</Label>
                </div>
                <Input 
                  id="username"
                  type="username"
                  placeholder={userData.username}
                  required />
              </div>
              <Button type="submit" className="w-full">
                Update account
              </Button>
              <Button>Reset password</Button>
              <Button>Log out</Button>
              <Button>Delete account</Button>
            </div>
          </form>
      </CardContent>
    </Card>
  ) : (
    <Spinner size="large"/>
  );

  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="m-4">{User}</div>
      </div>
    </>
  )
}