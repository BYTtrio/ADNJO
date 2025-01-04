package io.github.byttrio.andjo.flashcardset;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface FlashcardSetRepository extends JpaRepository<FlashcardSet, UUID> {
}
