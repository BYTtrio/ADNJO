package io.github.byttrio.andjo.flashcardset;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/api/flashcard-sets")
public class FlashcardSetController {
    private final FlashcardSetService flashcardSetService;

    @GetMapping
    public List<FlashcardSet> getAllFlashcardSets() {
        return flashcardSetService.getAllFlashcardSets();
    }

    @PostMapping
    public FlashcardSet createFlashcardSet(@RequestBody FlashcardSet flashcardSet) {
        return flashcardSetService.createFlashcardSet(flashcardSet);
    }

    @PostMapping("/create")
    public void createFlashcardSetWithFlashcards(@RequestBody FlashcardSetRequest request) {
        flashcardSetService.createFlashcardSetWithFlashcards(request);
    }

    @PutMapping("/{id}")
    public FlashcardSet updateFlashcardSet(@PathVariable UUID id, @RequestBody FlashcardSet flashcardSet) {
        return flashcardSetService.updateFlashcardSet(id, flashcardSet);
    }

    @DeleteMapping("/{id}")
    public void deleteFlashcardSet(@PathVariable UUID id) {
        flashcardSetService.deleteFlashcardSet(id);
    }
}
