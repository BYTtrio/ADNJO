package io.github.byttrio.andjo.trophies;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TrophiesService {
    private final TrophiesRepository trophiesRepository;

    public List<Trophies> getAllTrophies() {
        return trophiesRepository.findAll();
    }

    public Trophies getTrophiesById(final UUID id) {
            return trophiesRepository.findById(id).orElse(null);
    }

    public void deleteTrophies(final UUID id){
        trophiesRepository.deleteById(id);
    }

    public Trophies generateTrophies(Trophies trophies) {
        return trophiesRepository.save(trophies);
    }
}
