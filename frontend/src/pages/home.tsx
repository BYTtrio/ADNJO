import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Flashcard from '@/interfaces/flashcard'
import FlashcardSet from '@/interfaces/flashcard-set'
import Navbar from '@/components/navbar'
import '@/index.css'
import { format } from "date-fns"
import { useNavigate } from 'react-router-dom'
import { Eye, GraduationCap } from 'lucide-react'

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
    <Card className='mb-6 p-4' key={flashcard.id}>
      <CardTitle>
      <p>{flashcard.term}</p>
      </CardTitle>
      <CardDescription>
        <p><b></b>{flashcard.definition}</p>
      </CardDescription>
    </Card>
  )

  const flashcardSets = flashcardSetData.map(flashcardSet => 
    <Card className="mb-6" key={flashcardSet.id}>
      <CardHeader>
        <CardTitle>{flashcardSet.name}</CardTitle>
        <CardDescription>{flashcardSet.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p><b>Category: </b>{flashcardSet.category.name}</p>
        <p><b>Created: </b>{format(flashcardSet.createdAt as string, "PPP")}</p>
      </CardContent>
      <CardFooter>
        <Button className='max-lg:w-full' onClick={() => handleClick(flashcardSet.id)}>Preview <Eye /></Button>
        <Button className='max-lg:w-full' onClick={() => navigate("/flashcards/" + flashcardSet.id)}>Learn <GraduationCap /></Button>
      </CardFooter>
    </Card>
  )
  
  return (
    <div className=''>
      <Navbar />
      <div className="mx-auto flex max-w-6xl flex-col flex-wrap items-start justify-center gap-6 p-6 sm:flex-row sm:p-8 pt-0">
        <div className="grid w-full gap-6 sm:grid-cols-2 ">
            <div className=''>{flashcardSets}</div>
            <div className=''>{Flashcards}</div>
        </div>
      </div>
    </div>
  )
}
