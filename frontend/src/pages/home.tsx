import { useEffect, useState } from 'react'
import '../index.css'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Flashcard from '../interfaces/flashcard'
import FlashcardSet from '../interfaces/flashcard-set'
import Navbar from '../components/navbar'

export default function HomePage() {
  const [flashcardSetData, setFlashcardSetData] = useState<FlashcardSet[]>([])
  const [flashcardData, setFlashcardData] = useState<Flashcard[]>([])
  const [showFlashcards, setShowFlashcards] = useState(false)

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
      <p><b>Term: </b>{flashcard.term}</p>
      </CardTitle>
      <CardDescription>
        <p><b>Definition: </b>{flashcard.definition}</p>
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
        <p><b>Created: </b>{flashcardSet.createdAt}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={() => handleClick(flashcardSet.id)}>Preview</Button>
        <Button>Edit</Button>
        <Button>Start</Button>
        <Button>Share Link</Button>
      </CardFooter>
    </Card>
  )
  
  return (
    <>
        <Navbar />
        <div className='flex flex-row'>
          <div className='container left basis-2/3'>{flashcardSets}</div>
          <div className='container right basis-1/3'>{Flashcards}</div>
        </div>
    </>
  )
}
