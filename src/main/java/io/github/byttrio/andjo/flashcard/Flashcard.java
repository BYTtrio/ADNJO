package io.github.byttrio.andjo.flashcard;

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

    //@ManyToOne
    //@JoinColumn(name = "set_id")
    //private Set set;
}
