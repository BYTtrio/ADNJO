package io.github.byttrio.andjo.flashcard;

import io.github.byttrio.andjo.set.Set;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Entity
@Getter
@Setter
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
