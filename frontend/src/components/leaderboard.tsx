import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import User from "@/interfaces/user"
import { useEffect, useState } from "react";


export default function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState<User[]>([])

  useEffect(() => {
      fetch('http://localhost:8080/api/user/leaderboard')
        .then(response => response.json())
        .then(json => setLeaderboardData(json))
        .catch(error => console.error(error));
    }, []);

  const placeholderTrophies =[...'😊🙃🤪🤓🤯😴💩👻👽🤖👾👐🖖✌️🤟🤘🤙👋🐭🦕🦖🐉']
  const users = leaderboardData.map((user, i) => 
    <TableRow className="hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" key={user.id}>
      <TableCell className="text-center font-medium">{i+1}</TableCell>
      <TableCell className="font-medium">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="@username1" />
            <AvatarFallback>U1</AvatarFallback>
          </Avatar>
          {user.username}
        </div>
      </TableCell>
      <TableCell className="text-center">{user.totalPoints}</TableCell>
      <TableCell className="text-2xl flex justify-center text-center">
        {/*This is a placeholder for trophies*/}
        {placeholderTrophies[Math.floor(Math.random() * placeholderTrophies.length /2)]}
        {placeholderTrophies[Math.floor(Math.random() * placeholderTrophies.length /2)]}
        {placeholderTrophies[Math.floor(Math.random() * placeholderTrophies.length /2)]}
        {placeholderTrophies[Math.floor(Math.random() * placeholderTrophies.length /2)]}
      </TableCell>
    </TableRow>
  )
  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[40px] text-center">#</TableHead>
          <TableHead className="w-[200px]">Username</TableHead>
          <TableHead className="w-[100px] text-center">Score</TableHead>
          <TableHead className="w-[150px] text-center">Trophies</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users}
      </TableBody>
    </Table>
  )
}
