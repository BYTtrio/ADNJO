package io.github.byttrio.andjo.flashcard;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class FlashcardService {
    private final FlashcardRepository flashcardRepository;

    public List<Flashcard> getAllFlashcards() {
        return flashcardRepository.findAll();
    }

    public List<Flashcard> getAllFlashcardsFromSet(final UUID id) {
        return  flashcardRepository.findAllByFlashcardSetId(id);
    }

    public Flashcard getFlashcardById(final UUID id) {
        return flashcardRepository.findById(id).orElse(null);
    }

    public List<Flashcard> createFlashcards(final List<Flashcard> flashcardList) {
        return flashcardRepository.saveAll(flashcardList);
    }

    public void deleteFlashcard(final UUID id) {
        flashcardRepository.deleteById(id);
    }

    public Flashcard updateFlashcard(Flashcard flashcardRequest) {
        return flashcardRepository.save(flashcardRequest);
    }
}
