import { useState } from "react";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner"
import { Toaster } from "@/components/ui/sonner"
import { Checkbox } from "@/components/ui/checkbox";
import { Save, SquarePlus, Trash } from "lucide-react";

export default function CreateFlashcardSetPage() {
  const [flashcards, setFlashcards] = useState([
    { term: "", definition: "" },
  ]);
  const [setName, setSetName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [description, setDescription] = useState("");
  const [isPublic, setIsPublic] = useState(true);

  const handleFlashcardChange = (
    index: number,
    field: "term" | "definition",
    value: string
  ) => {
    setFlashcards((prevFlashcards) =>
      prevFlashcards.map((flashcard, i) =>
        i === index ? { ...flashcard, [field]: value } : flashcard
      )
    );
  };

  const addFlashcard = () => {
    setFlashcards((prevFlashcards) => [
      ...prevFlashcards,
      { term: "", definition: "" },
    ]);
  };

  const removeFlashcard = (index: number) => {
    setFlashcards((prevFlashcards) =>
      prevFlashcards.filter((_, i) => i !== index)
    );
  };

  const handleSubmit = async () => {
    if (
      !setName ||
      !categoryName ||
      flashcards.some((fc) => !fc.term || !fc.definition)
    ) {
      toast("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/flashcard-sets/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: setName,
          categoryName,
          description,
          userId: "44444444-4444-4444-4444-444444444444", // Replace with actual user ID
          isPublic,
          flashcards: flashcards.map(({ term, definition }) => ({
            term,
            definition,
          })),
        }),
      });

      if (response.ok) {
        toast("Flashcard set created successfully!");
        setSetName("");
        setCategoryName("");
        setDescription("");
        setFlashcards([{ term: "", definition: "" }]);
        setIsPublic(false);
      } else {
        toast("Failed to create flashcard set. Please try again.");
      }
    } catch (error) {
      console.error("Error creating flashcard set:", error);
      toast("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <Navbar />
      <Toaster />
      <div className="flex justify-center">
        <div className="w-full max-w-3xl">
          <form className="p-6 md:p-8 pt-0">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl text-center">Create a new flashcard set</h2>
              <Card>
                <CardHeader className="gap-2">
                  <CardTitle>Name</CardTitle>
                  <CardDescription>
                    <Input
                      value={setName}
                      onChange={(e) => setSetName(e.target.value)}
                      id="name"
                      type="text"
                      placeholder="Enter a title, like “Evolution - Chapter 22“"
                      required
                    />
                  </CardDescription>
                  <CardTitle>Category</CardTitle>
                  <CardDescription>
                    <Input
                      value={categoryName}
                      onChange={(e) => setCategoryName(e.target.value)}
                      id="category"
                      type="text"
                      placeholder="Enter a category, like “Biology“"
                      required
                    />
                  </CardDescription>
                  <CardTitle>Description</CardTitle>
                  <CardDescription>
                    <Input
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      id="description"
                      type="text"
                      placeholder="Add a description..."
                    />
                  </CardDescription>
                  <CardTitle>
                    <div className="flex items-center gap-2">
                      <Label htmlFor="isPublic">Public: </Label>
                      <Checkbox 
                        id="isPublic" 
                        checked={isPublic}
                        onCheckedChange={(e) => setIsPublic(Boolean(e.valueOf))}
                      />
                    </div>
                  </CardTitle>
                </CardHeader>
              </Card>
              {flashcards.map((flashcard, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>Flashcard {index + 1}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-4">
                    <div>
                      <Label htmlFor={`term-${index}`}>Term</Label>
                      <Input
                        id={`term-${index}`}
                        type="text"
                        placeholder="Enter term"
                        value={flashcard.term}
                        onChange={(e) =>
                          handleFlashcardChange(index, "term", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor={`definition-${index}`}>Definition</Label>
                      <Input
                        id={`definition-${index}`}
                        type="text"
                        placeholder="Enter Definition"
                        value={flashcard.definition}
                        onChange={(e) =>
                          handleFlashcardChange(index, "definition", e.target.value)
                        }
                        required
                      />
                    </div>
                    <Button variant="destructive" onClick={() => removeFlashcard(index)}>
                      Delete Flashcard
                      <Trash />
                    </Button>
                  </CardContent>
                </Card>
              ))}
              <Button type="button" onClick={addFlashcard}>
                Add a card
                <SquarePlus />
              </Button>
              <Button type="button" onClick={handleSubmit}>
                Save Flashcard Set
                <Save />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
