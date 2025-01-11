import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CreateFlashcardSetPage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col p-6 basis-2/3'">
        <h2 className="text-4xl">Create Flashcards</h2>
        <Button>Save flashcards</Button>
        <Card>
          <CardHeader>
            <CardTitle>Name</CardTitle>
            <CardDescription>
              <Input></Input>
            </CardDescription>
            <CardTitle>
              Category
            </CardTitle>
            <CardDescription>
              <Input></Input>
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <p>Don't want to write your own flashcards? Try our AI Flashcard Generator to instantly transform your notes or documents into flashcards.</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>1</CardTitle>
          </CardHeader>
          <CardFooter >
            <div className="basis-1/3">
              <Label htmlFor="term">Term</Label>
              <Input
                id="term"
                type="text"
                placeholder="Front of card"
                required
                />
            </div>
            <div className="basis-1/3">
              <Label htmlFor="definition">Definition</Label>
              <Input
                id="definition"
                type="text"
                placeholder="Back of card"
                required
                />
            </div>
            <Button>Delete</Button>
          </CardFooter>
        </Card>
        <Button>Add Flashcard</Button>
      </div>
    </div>
  )
}