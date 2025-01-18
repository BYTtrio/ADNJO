import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CreateFlashcardSetPage() {
  function handleClick() {
    
  }
  
  const form = (
    <form className="p-6 md:p-8">
      <div className="flex flex-col p-6 gap-6 ">
        <h2 className="text-4xl text-center">Create Flashcards</h2>
        <Card>
          <CardHeader className="gap-2">
            <CardTitle>Name</CardTitle>
            <CardDescription>
            <Input
                id="name"
                type="text"
                required
                />
            </CardDescription>
            <CardTitle>
              Category
            </CardTitle>
            <CardDescription>
            <Input
                id="category"
                type="category"
                required
                />
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <p>Don't want to write your own flashcards? Try our AI Flashcard Generator to instantly transform your notes or documents into flashcards.</p>
          </CardFooter>
        </Card>
        <Button>Save flashcard set</Button>
        
        <Card>
          <CardHeader>
            <CardTitle>1</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <Label htmlFor="term">Term</Label>
              <Input
                id="term"
                type="text"
                placeholder="Front of card"
                required
                />
            </div>
            <div>
              <Label htmlFor="definition">Definition</Label>
              <Input
                id="definition"
                type="text"
                placeholder="Back of card"
                required
                />
            </div>
            <Button>Delete</Button>
          </CardContent>
        </Card>
        <Button onClick={() => handleClick()}>Add Flashcard</Button>
      </div>
    </form>
  );
  
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="m-4">{form}</div>
      </div>
    </>
  )
}