import Navbar from "@/components/navbar";
import Flashcard from "@/interfaces/flashcard";
import { useEffect, useState } from "react";
import { FlashcardArray } from "react-quizlet-flashcard";
import { useParams } from "react-router-dom";

export default function FlashcardSetPage() {
  const [flashcardData, setFlashcardData] = useState<Flashcard[]>([])
  const {id} = useParams();
  useEffect(() => {
      fetch('http://localhost:8080/api/flashcards/set/' + id)
      .then(response => response.json())
      .then(json => setFlashcardData(json))
      .catch(error => console.error(error));
      console.log(flashcardData);
  }, []);

  const cards = flashcardData.map( flashcard => ({
      id: flashcard.id,
      frontHTML: flashcard.term,
      backHTML: flashcard.definition,
      width: '95%'
  }));

  return (
    <>
      <Navbar />
      <div className="max-md:overflow-hidden w-full md:w-3/4 lg:w-1/3 mx-auto">
        <FlashcardArray
          cards = {cards}
          cycle = {true}
          frontContentStyle={{
            backgroundColor: 'hsl(var(--foreground))',
            color: 'hsl(var(--background))',
            textAlign: 'center',
            display: 'grid',
            placeItems: 'center',
            fontSize: '1.5rem'
          }}
          backContentStyle={{
            backgroundColor: 'hsl(var(--foreground))',
            color: 'hsl(var(--background))',
            textAlign: 'center',
            display: 'grid',
            placeItems: 'center',
            fontSize: '1.5rem'
          }}
          FlashcardArrayStyle = {{
            height: '87vh',
            width: '100%'
          }}
        />
      </div>
    </>
  )
}
