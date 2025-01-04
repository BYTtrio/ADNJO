package io.github.byttrio.andjo.user;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import io.github.byttrio.andjo.flashcardset.FlashcardSet;
import io.github.byttrio.andjo.trophies.Trophies;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Set;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String username;
    private String email;
    private String password;
    private Integer totalPoints;
    private LocalDateTime updatedAt = LocalDateTime.now();

    @Column(updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @ManyToMany
    @JoinTable(
            name = "user_saved_sets",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "set_id")
    )
    @JsonManagedReference
    Set<FlashcardSet> savedFlashcardSets;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval=true)
    Set<Trophies> ownedTrophies;
}
