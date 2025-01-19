import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Flashcard from '@/interfaces/flashcard'
import FlashcardSet from '@/interfaces/flashcard-set'
import Navbar from '@/components/navbar'
import '@/index.css'
import { format } from "date-fns"
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const [flashcardSetData, setFlashcardSetData] = useState<FlashcardSet[]>([])
  const [flashcardData, setFlashcardData] = useState<Flashcard[]>([])

  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/api/flashcard-sets')
      .then(response => response.json())
      .then(json => setFlashcardSetData(json))
      .catch(error => console.error(error));
  }, []);

  function handleClick(id : number) {
    fetch('http://localhost:8080/api/flashcards/set/' + id)
      .then(response => response.json())
      .then(json => setFlashcardData(json))
      .catch(error => console.error(error));
      console.log(flashcardData);
  }

  const Flashcards = flashcardData.map(flashcard => 
    <Card className='flashcard' key={flashcard.id}>
      <CardTitle>
      <p>{flashcard.term}</p>
      </CardTitle>
      <CardDescription>
        <p><b></b>{flashcard.definition}</p>
      </CardDescription>
    </Card>
  )

  const flashcardSets = flashcardSetData.map(flashcardSet => 
    <Card className="flashcardSet" key={flashcardSet.id}>
      <CardHeader>
        <CardTitle>{flashcardSet.name}</CardTitle>
        <CardDescription>{flashcardSet.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p><b>Category: </b>{flashcardSet.category.name}</p>
        <p><b>Created: </b>{format(flashcardSet.createdAt as string, "PPP")}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={() => handleClick(flashcardSet.id)}>Preview</Button>
        <Button  onClick={() => navigate("/flashcards/" + flashcardSet.id)}>Learn</Button>
      </CardFooter>
    </Card>
  )
  
  return (
    <div className=''>
      <Navbar />
      <div className='flex flex-row justify-center'>
        <div className='container left basis-2/3'>{flashcardSets}</div>
        <div className='container right basis-1/3'>{Flashcards}</div>
      </div>
    </div>
  )
}
