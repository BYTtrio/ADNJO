package io.github.byttrio.andjo.trophies;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

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

    public List<Trophies> getAllTrophiesByUserId(final UUID id) {
        return  trophiesRepository.findAllByUserId(id);
    }
}
