package io.github.byttrio.andjo.flashcardset;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.UUID;

@Service
public class FlashcardSetService {

    @Autowired
    private FlashcardSetRepository flashcardSetRepository;

    public List<FlashcardSet> getAllFlashcardSets() {
        return flashcardSetRepository.findAll();
    }

    public FlashcardSet createFlashcardSet(FlashcardSet flashcardSet) {
        return flashcardSetRepository.save(flashcardSet);
    }

    public FlashcardSet updateFlashcardSet(UUID id, FlashcardSet updatedSet) {
        return flashcardSetRepository.findById(id).map(existingSet -> {
            existingSet.setName(updatedSet.getName());
            existingSet.setDescription(updatedSet.getDescription());
            existingSet.setPublic(updatedSet.isPublic());
            return flashcardSetRepository.save(existingSet);
        }).orElseThrow(() -> new RuntimeException("Flashcard set not found"));
    }

    public void deleteFlashcardSet(UUID id) {
        if (!flashcardSetRepository.existsById(id)) {
            throw new RuntimeException("Flashcard set not found");
        }
        flashcardSetRepository.deleteById(id);
    }
}