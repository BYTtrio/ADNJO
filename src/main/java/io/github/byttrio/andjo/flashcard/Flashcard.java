package io.github.byttrio.andjo.flashcard;

import io.github.byttrio.andjo.set.Set;
import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Flashcard {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;
    private String term;
    private String definition;

    @ManyToOne
    @JoinColumn(name = "set_id")
    private Set set;
}
