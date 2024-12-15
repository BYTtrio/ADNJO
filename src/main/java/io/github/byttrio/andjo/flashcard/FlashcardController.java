package io.github.byttrio.andjo.flashcard;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/api/flashcards")
public class FlashcardController {
    private final FlashcardService flashcardService;

    @GetMapping
    public List<Flashcard> getAllFlashcards() {
        return flashcardService.getAllFlashcards();
    }

    @GetMapping("/{id}")
    public Flashcard flashcard(@PathVariable UUID id) {
        return flashcardService.getFlashcardById(id);
    }

    @PostMapping
    public HttpStatus createFlashcard(@RequestBody List<Flashcard> flashcardList) {
        return flashcardService.createFlashcards(flashcardList);
    }

    @DeleteMapping("/{id}")
    void deleteFlashcard(@PathVariable UUID id) {
        flashcardService.deleteFlashcard(id);
    }
}


