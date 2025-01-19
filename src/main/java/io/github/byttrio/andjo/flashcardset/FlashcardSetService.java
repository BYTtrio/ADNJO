package io.github.byttrio.andjo.flashcardset;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import io.github.byttrio.andjo.category.Category;
import io.github.byttrio.andjo.flashcard.Flashcard;
import io.github.byttrio.andjo.flashcard.FlashcardRepository;
import io.github.byttrio.andjo.category.CategoryRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FlashcardSetService {
    private final FlashcardSetRepository flashcardSetRepository;
    private final FlashcardRepository flashcardRepository;
    private final CategoryRepository categoryRepository;

    public List<FlashcardSet> getAllFlashcardSets() {
        return flashcardSetRepository.findAll();
    }

    public FlashcardSet createFlashcardSet(FlashcardSet flashcardSet) {
        return flashcardSetRepository.save(flashcardSet);
    }

    public void createFlashcardSetWithFlashcards(FlashcardSetRequest request) {
        Category category = new Category();
        category.setName(request.getCategoryName());

        FlashcardSet flashcardSet = new FlashcardSet();
        flashcardSet.setName(request.getName());
        flashcardSet.setCategory(categoryRepository.save(category)); // Assuming Category entity exists
        flashcardSet.setUserId(request.getUserId());
        flashcardSet.setDescription(request.getDescription());
        flashcardSet.setPublic(request.isPublic());
        flashcardSet.setCreatedAt(LocalDateTime.now());

        FlashcardSet savedSet = flashcardSetRepository.save(flashcardSet);
        List<Flashcard> flashcards = request.getFlashcards().stream()
            .map(f -> new Flashcard(null, f.getTerm(), f.getDefinition(), savedSet))
            .collect(Collectors.toList());

        flashcardRepository.saveAll(flashcards);
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
