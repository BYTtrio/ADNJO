package io.github.byttrio.andjo.flashcard;

import lombok.RequiredArgsConstructor;
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
    public Flashcard getFlashcardById(@PathVariable UUID id) {
        return flashcardService.getFlashcardById(id);
    }

    @GetMapping("/set/{id}")
    public List<Flashcard> getAllFlashcardsFromSet (@PathVariable UUID id) {
        return flashcardService.getAllFlashcardsFromSet(id);
    }

    @PostMapping
    public List<Flashcard> createFlashcard(@RequestBody List<Flashcard> flashcardList) {
        return flashcardService.createFlashcards(flashcardList);
    }

    @DeleteMapping("/{id}")
    void deleteFlashcard(@PathVariable UUID id) {
        flashcardService.deleteFlashcard(id);
    }

    @PutMapping
    public Flashcard updateFlashcard(@RequestBody Flashcard flashcard) {
        return flashcardService.updateFlashcard(flashcard);
    }

}
