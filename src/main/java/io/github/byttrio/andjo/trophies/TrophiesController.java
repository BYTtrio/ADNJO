package io.github.byttrio.andjo.trophies;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/api/trophies")
public class TrophiesController {
    private final TrophiesService trophiesService;

    @GetMapping
    public List<Trophies> getAllTrophies() {
        return trophiesService.getAllTrophies();
    }

    @GetMapping("/{id}")
    public Trophies getAllTrophies(@PathVariable UUID id) {
        return trophiesService.getTrophiesById(id);
    }

    @PostMapping()
    public Trophies generateTrophies(@RequestBody Trophies trophies) {
        return trophiesService.generateTrophies(trophies);
    }

    @DeleteMapping("/{id}")
    public void deleteTrophies(@PathVariable UUID id){
        trophiesService.deleteTrophies(id);
    }

    @GetMapping("/user/{id}")
    public List<Trophies> getAllTrophiesByUserId (@PathVariable UUID id) {
        return trophiesService.getAllTrophiesByUserId(id);
    }

}
