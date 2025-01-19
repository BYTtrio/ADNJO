package io.github.byttrio.andjo.flashcardset;

import java.util.List;
import java.util.UUID;

import lombok.Data;

@Data
public class FlashcardSetRequest {
  private String name;
    private String categoryName;
    private UUID userId;
    private String description;
    private boolean isPublic;
    private List<FlashcardRequest> flashcards;

    @Data
    public static class FlashcardRequest {
        private String term;
        private String definition;
    }
}
