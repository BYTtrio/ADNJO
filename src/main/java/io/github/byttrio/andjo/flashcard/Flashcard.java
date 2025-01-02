package io.github.byttrio.andjo.flashcard;

import io.github.byttrio.andjo.flashcardset.FlashcardSet;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "flashcards")
public class Flashcard {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String term;
    private String definition;

    @ManyToOne
    @JoinColumn(name = "flashcard_set_id")
    private FlashcardSet flashcardSet;
}
