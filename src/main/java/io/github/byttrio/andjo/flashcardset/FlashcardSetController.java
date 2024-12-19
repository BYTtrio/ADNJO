package io.github.byttrio.andjo.flashcardset;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/api/flashcardsets")
public class FlashcardSetController {
    private FlashcardSetService flashcardSetService;

    @GetMapping
    public List<FlashcardSet> getAllFlashcardSets() {
        return flashcardSetService.getAllFlashcardSets();
    }

    @PostMapping
    public FlashcardSet createFlashcardSet(@RequestBody FlashcardSet flashcardSet) {
        return flashcardSetService.createFlashcardSet(flashcardSet);
    }

    @PutMapping("/{id}")
    public FlashcardSet updateFlashcardSet(@PathVariable UUID id, @RequestBody FlashcardSet flashcardSet) {
        return flashcardSetService.updateFlashcardSet(id, flashcardSet);
    }

    @DeleteMapping("/{id}")
    public String deleteFlashcardSet(@PathVariable UUID id) {
        flashcardSetService.deleteFlashcardSet(id);
        return "Flashcard set deleted successfully.";
    }
}
