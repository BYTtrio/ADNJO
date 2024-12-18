package io.github.byttrio.andjo.usersavedset;

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
@Table(name = "user_saved_sets")
public class UserSavedSet {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID userSavedSetId;

    @Column(nullable = false)
    private UUID userId;

    @ManyToOne
    @JoinColumn(name = "set_id", nullable = false)
    private FlashcardSet flashcardSet;
}
