package io.github.byttrio.andjo.flashcard;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
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

    public Flashcard getFlashcardById(final UUID id) {
        return flashcardRepository.getReferenceById(id);
    }

    public HttpStatus createFlashcards(final List<Flashcard> flashcardList) {
        flashcardRepository.saveAll(flashcardList);
        return HttpStatus.CREATED;
    }

    public void deleteFlashcard(final UUID id) {
        flashcardRepository.deleteById(id);
    }
}
