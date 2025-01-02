import { useEffect, useState } from 'react'
import './App.css'

interface Category {
  id: number;
  name: string;
}

interface FlashcardSet {
  id: number;
  category: Category;
  userId: number;
  name: string;
  description: string;
  createdAt: string;
  public: string;
}

interface Flashcard {
  id: number;
  term: string;
  definition: string;
}

function App() {
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
    <div className='flashcard' key={flashcard.id}>
      <p><b>Term: </b>{flashcard.term}</p>
      <p><b>Definition: </b>{flashcard.definition}</p>
    </div>
  )

  const flashcardSets = flashcardSetData.map(flashcardSet => 
    <div className="flashcardSet" key={flashcardSet.id} >
      <h1>{flashcardSet.name}</h1>
      <p>{flashcardSet.description}</p>
      <p><b>Category: </b>{flashcardSet.category.name}</p>
      <p><b>Created: </b>{flashcardSet.createdAt}</p>
      <button onClick={() => handleClick(flashcardSet.id)}>Preview</button>
      <button>Edit</button>
      <button>Start</button>
      <button>Share Link</button>
      <br />
    </div>
  )

  return (
    <>
      <div className='container left'>{flashcardSets}</div>
      <div className='container right'>{Flashcards}</div>
    </>
  )
}

export default App
