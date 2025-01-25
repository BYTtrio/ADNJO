-- Insert sample data into the categories table
INSERT INTO categories (category_id, name) SELECT '11111111-1111-1111-1111-111111111111', 'Science' WHERE NOT EXISTS (SELECT 1 FROM categories WHERE category_id = '11111111-1111-1111-1111-111111111111');
INSERT INTO categories (category_id, name) SELECT '22222222-2222-2222-2222-222222222222', 'History' WHERE NOT EXISTS (SELECT 1 FROM categories WHERE category_id = '22222222-2222-2222-2222-222222222222');
INSERT INTO categories (category_id, name) SELECT '33333333-3333-3333-3333-333333333333', 'Language' WHERE NOT EXISTS (SELECT 1 FROM categories WHERE category_id = '33333333-3333-3333-3333-333333333333');

-- Insert sample data into the users table
INSERT INTO users (id, created_at, email, password, total_points, updated_at, username)
SELECT '44444444-4444-4444-4444-444444444444', '2024-01-01 10:00:00', 'jan.kowalski@example.com', 'password123', 100, '2024-01-02 10:00:00', 'Janek89'
    WHERE NOT EXISTS (SELECT 1 FROM users WHERE id = '44444444-4444-4444-4444-444444444444');

INSERT INTO users (id, created_at, email, password, total_points, updated_at, username)
SELECT '55555555-5555-5555-5555-555555555555', '2024-01-02 11:00:00', 'anna.nowak@example.com', 'password456', 200, '2024-01-03 11:00:00', 'Ania22'
    WHERE NOT EXISTS (SELECT 1 FROM users WHERE id = '55555555-5555-5555-5555-555555555555');

INSERT INTO users (id, created_at, email, password, total_points, updated_at, username)
SELECT '66666666-6666-6666-6666-666666666666', '2024-01-05 14:00:00', 'piotr.zielinski@example.com', 'password789', 150, '2024-01-06 14:00:00', 'Piotr99'
    WHERE NOT EXISTS (SELECT 1 FROM users WHERE id = '66666666-6666-6666-6666-666666666666');


-- Insert sample data into the flashcardsets table
INSERT INTO flashcardsets (id, created_at, description, is_public, name, user_id, category_id) SELECT '66666666-6666-6666-6666-666666666666', '2024-01-03 12:00:00', 'Basic Science Terms', true, 'Science Basics', '44444444-4444-4444-4444-444444444444', '11111111-1111-1111-1111-111111111111' WHERE NOT EXISTS (SELECT 1 FROM flashcardsets WHERE id = '66666666-6666-6666-6666-666666666666');
INSERT INTO flashcardsets (id, created_at, description, is_public, name, user_id, category_id) SELECT '77777777-7777-7777-7777-777777777777', '2024-01-04 13:00:00', 'Historical Events', false, 'History 101', '55555555-5555-5555-5555-555555555555', '22222222-2222-2222-2222-222222222222' WHERE NOT EXISTS (SELECT 1 FROM flashcardsets WHERE id = '77777777-7777-7777-7777-777777777777');
INSERT INTO flashcardsets (id, created_at, description, is_public, name, user_id, category_id) SELECT '88888888-8888-8888-8888-888888888888', '2024-01-07 15:00:00', 'Language Vocabulary', true, 'Language Basics', '66666666-6666-6666-6666-666666666666', '33333333-3333-3333-3333-333333333333' WHERE NOT EXISTS (SELECT 1 FROM flashcardsets WHERE id = '88888888-8888-8888-8888-888888888888');

-- Insert sample data into the flashcards table
INSERT INTO flashcards (id, definition, term, flashcard_set_id) SELECT '88888888-8888-8888-8888-888888888888', 'The process by which plants make food using sunlight', 'Photosynthesis', '66666666-6666-6666-6666-666666666666' WHERE NOT EXISTS (SELECT 1 FROM flashcards WHERE id = '88888888-8888-8888-8888-888888888888');
INSERT INTO flashcards (id, definition, term, flashcard_set_id) SELECT '99999999-9999-9999-9999-999999999999', 'The year the American Civil War began', '1861', '77777777-7777-7777-7777-777777777777' WHERE NOT EXISTS (SELECT 1 FROM flashcards WHERE id = '99999999-9999-9999-9999-999999999999');
INSERT INTO flashcards (id, definition, term, flashcard_set_id) SELECT '10101010-1010-1010-1010-101010101010', 'The powerhouse of the cell', 'Mitochondria', '66666666-6666-6666-6666-666666666666' WHERE NOT EXISTS (SELECT 1 FROM flashcards WHERE id = '10101010-1010-1010-1010-101010101010');
INSERT INTO flashcards (id, definition, term, flashcard_set_id) SELECT '11111111-1111-1111-1111-111111111112', 'The force that attracts a body towards the center of the earth', 'Gravity', '66666666-6666-6666-6666-666666666666' WHERE NOT EXISTS (SELECT 1 FROM flashcards WHERE id = '11111111-1111-1111-1111-111111111112');
INSERT INTO flashcards (id, definition, term, flashcard_set_id) SELECT '12121212-1212-1212-1212-121212121212', 'A particle with a positive charge', 'Proton', '66666666-6666-6666-6666-666666666666' WHERE NOT EXISTS (SELECT 1 FROM flashcards WHERE id = '12121212-1212-1212-1212-121212121212');
INSERT INTO flashcards (id, definition, term, flashcard_set_id) SELECT '13131313-1313-1313-1313-131313131313', 'The year the Berlin Wall fell', '1989', '77777777-7777-7777-7777-777777777777' WHERE NOT EXISTS (SELECT 1 FROM flashcards WHERE id = '13131313-1313-1313-1313-131313131313');
INSERT INTO flashcards (id, definition, term, flashcard_set_id) SELECT '14141414-1414-1414-1414-141414141414', 'A document that declared independence from Britain in 1776', 'Declaration of Independence', '77777777-7777-7777-7777-777777777777' WHERE NOT EXISTS (SELECT 1 FROM flashcards WHERE id = '14141414-1414-1414-1414-141414141414');
INSERT INTO flashcards (id, definition, term, flashcard_set_id) SELECT '15151515-1515-1515-1515-151515151515', 'A war fought between 1939 and 1945', 'World War II', '77777777-7777-7777-7777-777777777777' WHERE NOT EXISTS (SELECT 1 FROM flashcards WHERE id = '15151515-1515-1515-1515-151515151515');
INSERT INTO flashcards (id, definition, term, flashcard_set_id) SELECT '16161616-1616-1616-1616-161616161616', 'The act of officially ending a law', 'Abolition', '77777777-7777-7777-7777-777777777777' WHERE NOT EXISTS (SELECT 1 FROM flashcards WHERE id = '16161616-1616-1616-1616-161616161616');
INSERT INTO flashcards (id, definition, term, flashcard_set_id) SELECT '17171717-1717-1717-1717-171717171717', 'An action of formally approving a document', 'Ratification', '77777777-7777-7777-7777-777777777777' WHERE NOT EXISTS (SELECT 1 FROM flashcards WHERE id = '17171717-1717-1717-1717-171717171717');

INSERT INTO flashcards (id, definition, term, flashcard_set_id)
SELECT '88888888-8888-8888-8888-888888888888', 'The process by which plants make food using sunlight', 'Photosynthesis', '66666666-6666-6666-6666-666666666666'
WHERE NOT EXISTS (SELECT 1 FROM flashcards WHERE id = '88888888-8888-8888-8888-888888888888');
INSERT INTO flashcards (id, definition, term, flashcard_set_id)
SELECT '10101010-1010-1010-1010-101010101010', 'The powerhouse of the cell', 'Mitochondria', '66666666-6666-6666-6666-666666666666'
WHERE NOT EXISTS (SELECT 1 FROM flashcards WHERE id = '10101010-1010-1010-1010-101010101010');
INSERT INTO flashcards (id, definition, term, flashcard_set_id)
SELECT '11111111-1111-1111-1111-111111111112', 'The force that attracts a body towards the center of the earth', 'Gravity', '66666666-6666-6666-6666-666666666666'
WHERE NOT EXISTS (SELECT 1 FROM flashcards WHERE id = '11111111-1111-1111-1111-111111111112');
INSERT INTO flashcards (id, definition, term, flashcard_set_id)
SELECT '12121212-1212-1212-1212-121212121212', 'A particle with a positive charge', 'Proton', '66666666-6666-6666-6666-666666666666'
WHERE NOT EXISTS (SELECT 1 FROM flashcards WHERE id = '12121212-1212-1212-1212-121212121212');
INSERT INTO flashcards (id, definition, term, flashcard_set_id)
SELECT '19191919-1919-1919-1919-191919191919', 'The branch of science concerned with the nature and properties of matter and energy', 'Physics', '66666666-6666-6666-6666-666666666666'
WHERE NOT EXISTS (SELECT 1 FROM flashcards WHERE id = '19191919-1919-1919-1919-191919191919');
INSERT INTO flashcards (id, definition, term, flashcard_set_id)
SELECT '20202020-2020-2020-2020-202020202020', 'The study of living organisms', 'Biology', '66666666-6666-6666-6666-666666666666'
WHERE NOT EXISTS (SELECT 1 FROM flashcards WHERE id = '20202020-2020-2020-2020-202020202020');
INSERT INTO flashcards (id, definition, term, flashcard_set_id)
SELECT '21212121-2121-2121-2121-212121212121', 'The smallest unit of an element', 'Atom', '66666666-6666-6666-6666-666666666666'
WHERE NOT EXISTS (SELECT 1 FROM flashcards WHERE id = '21212121-2121-2121-2121-212121212121');
INSERT INTO flashcards (id, definition, term, flashcard_set_id)
SELECT '22222222-2222-2222-2222-222222222223', 'The process of cell division', 'Mitosis', '66666666-6666-6666-6666-666666666666'
WHERE NOT EXISTS (SELECT 1 FROM flashcards WHERE id = '22222222-2222-2222-2222-222222222223');
INSERT INTO flashcards (id, definition, term, flashcard_set_id)
SELECT '23232323-2323-2323-2323-232323232323', 'The basic unit of life', 'Cell', '66666666-6666-6666-6666-666666666666'
WHERE NOT EXISTS (SELECT 1 FROM flashcards WHERE id = '23232323-2323-2323-2323-232323232323');

INSERT INTO flashcards (id, definition, term, flashcard_set_id)
SELECT '88888888-8888-8888-8888-888888888888', 'A word that modifies a noun', 'Adjective', '88888888-8888-8888-8888-888888888888'
WHERE NOT EXISTS (SELECT 1 FROM flashcards WHERE id = '88888888-8888-8888-8888-888888888888');
INSERT INTO flashcards (id, definition, term, flashcard_set_id)
SELECT '23232323-2323-2323-2323-232323232323', 'A word that represents an action', 'Verb', '88888888-8888-8888-8888-888888888888'
WHERE NOT EXISTS (SELECT 1 FROM flashcards WHERE id = '23232323-2323-2323-2323-232323232323');
INSERT INTO flashcards (id, definition, term, flashcard_set_id)
SELECT '24242424-2424-2424-2424-242424242424', 'A word that connects clauses or sentences', 'Conjunction', '88888888-8888-8888-8888-888888888888'
WHERE NOT EXISTS (SELECT 1 FROM flashcards WHERE id = '24242424-2424-2424-2424-242424242424');
INSERT INTO flashcards (id, definition, term, flashcard_set_id)
SELECT '25252525-2525-2525-2525-252525252525', 'A word used to describe a verb', 'Adverb', '88888888-8888-8888-8888-888888888888'
WHERE NOT EXISTS (SELECT 1 FROM flashcards WHERE id = '25252525-2525-2525-2525-252525252525');
INSERT INTO flashcards (id, definition, term, flashcard_set_id)
SELECT '26262626-2626-2626-2626-262626262626', 'A word used to replace a noun', 'Pronoun', '88888888-8888-8888-8888-888888888888'
WHERE NOT EXISTS (SELECT 1 FROM flashcards WHERE id = '26262626-2626-2626-2626-262626262626');
INSERT INTO flashcards (id, definition, term, flashcard_set_id)
SELECT '27272727-2727-2727-2727-272727272727', 'A word that names a person, place, or thing', 'Noun', '88888888-8888-8888-8888-888888888888'
WHERE NOT EXISTS (SELECT 1 FROM flashcards WHERE id = '27272727-2727-2727-2727-272727272727');
INSERT INTO flashcards (id, definition, term, flashcard_set_id)
SELECT '28282828-2828-2828-2828-282828282828', 'The study of the structure of words', 'Morphology', '88888888-8888-8888-8888-888888888888'
WHERE NOT EXISTS (SELECT 1 FROM flashcards WHERE id = '28282828-2828-2828-2828-282828282828');
INSERT INTO flashcards (id, definition, term, flashcard_set_id)
SELECT '29292929-2929-2929-2929-292929292929', 'The basic unit of sound in a language', 'Phoneme', '88888888-8888-8888-8888-888888888888'
WHERE NOT EXISTS (SELECT 1 FROM flashcards WHERE id = '29292929-2929-2929-2929-292929292929');
INSERT INTO flashcards (id, definition, term, flashcard_set_id)
SELECT '30303030-3030-3030-3030-303030303030', 'A combination of letters representing a sound', 'Grapheme', '88888888-8888-8888-8888-888888888888'
WHERE NOT EXISTS (SELECT 1 FROM flashcards WHERE id = '30303030-3030-3030-3030-303030303030');
INSERT INTO flashcards (id, definition, term, flashcard_set_id)
SELECT '31313131-3131-3131-3131-313131313131', 'The study of sentence structure', 'Syntax', '88888888-8888-8888-8888-888888888888'
WHERE NOT EXISTS (SELECT 1 FROM flashcards WHERE id = '31313131-3131-3131-3131-313131313131');

-- Insert 30 mock users into the USERS table with unique nicknames
INSERT INTO users (id, email, password, username, total_points, created_at, updated_at)
VALUES
    ('11111111-1111-1111-1111-111111111111', 'jan.kowalski@example.com', 'hashed_password1', 'JanekCool', 1234, '2023-01-01 12:00:00', '2023-01-01 12:00:00'),
    ('22222222-2222-2222-2222-222222222222', 'anna.nowak@example.com', 'hashed_password2', 'Anka123', 5678, '2023-02-01 14:00:00', '2023-02-01 14:00:00'),
    ('33333333-3333-3333-3333-333333333333', 'piotr.wisniewski@example.com', 'hashed_password3', 'Piotr89', 910, '2023-03-01 16:00:00', '2023-03-01 16:00:00'),
    ('44444444-4444-4444-4444-444444444445', 'maria.kaminska@example.com', 'hashed_password4', 'Mimi2023', 345, '2023-04-01 18:00:00', '2023-04-01 18:00:00'),
    ('55555555-5555-5555-5555-555555555551', 'tomasz.lewandowski@example.com', 'hashed_password5', 'TomiLeo', 6789, '2023-05-01 20:00:00', '2023-05-01 20:00:00'),
    ('66666666-6666-6666-6666-666666666661', 'aleksandra.kaczmarek@example.com', 'hashed_password6', 'OlaKac', 4321, '2023-06-01 10:00:00', '2023-06-01 10:00:00'),
    ('77777777-7777-7777-7777-777777777771', 'adam.kowalczyk@example.com', 'hashed_password7', 'AdiKowal', 876, '2023-07-01 11:00:00', '2023-07-01 11:00:00'),
    ('88888888-8888-8888-8888-888888888881', 'zofia.wojcik@example.com', 'hashed_password8', 'ZosiaW', 5432, '2023-08-01 13:00:00', '2023-08-01 13:00:00'),
    ('99999999-9999-9999-9999-999999999991', 'lukasz.krol@example.com', 'hashed_password9', 'LukasKing', 987, '2023-09-01 15:00:00', '2023-09-01 15:00:00'),
    ('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'paulina.zajac@example.com', 'hashed_password10', 'PauZaj', 12345, '2023-10-01 17:00:00', '2023-10-01 17:00:00'),
    ('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb', 'grzegorz.jablonski@example.com', 'hashed_password11', 'Grzejo24', 2500, '2023-11-01 09:00:00', '2023-11-01 09:00:00'),
    ('cccccccc-cccc-cccc-cccc-cccccccccccc', 'klaudia.adamczyk@example.com', 'hashed_password12', 'Klaudek', 670, '2023-11-02 10:00:00', '2023-11-02 10:00:00'),
    ('dddddddd-dddd-dddd-dddd-dddddddddddd', 'michal.kubiak@example.com', 'hashed_password13', 'MikiKubiak', 4800, '2023-11-03 11:00:00', '2023-11-03 11:00:00'),
    ('eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee', 'elzbieta.mazur@example.com', 'hashed_password14', 'ElzaM', 375, '2023-11-04 12:00:00', '2023-11-04 12:00:00'),
    ('ffffffff-ffff-ffff-ffff-ffffffffffff', 'krzysztof.szczepanski@example.com', 'hashed_password15', 'KrisSzcz', 2980, '2023-11-05 13:00:00', '2023-11-05 13:00:00'),
    ('10101010-1010-1010-1010-101010101010', 'natalia.piotrowska@example.com', 'hashed_password16', 'NatiPiotr', 4500, '2023-11-06 14:00:00', '2023-11-06 14:00:00'),
    ('11111111-1111-1111-1111-111111111112', 'wojciech.kowal@example.com', 'hashed_password17', 'WojtoX', 3200, '2023-11-07 15:00:00', '2023-11-07 15:00:00'),
    ('12121212-1212-1212-1212-121212121212', 'martyna.gorska@example.com', 'hashed_password18', 'MartiG', 1500, '2023-11-08 16:00:00', '2023-11-08 16:00:00'),
    ('13131313-1313-1313-1313-131313131313', 'kamil.kucharski@example.com', 'hashed_password19', 'KamKuch', 980, '2023-11-09 17:00:00', '2023-11-09 17:00:00'),
    ('14141414-1414-1414-1414-141414141414', 'justyna.ostrowska@example.com', 'hashed_password20', 'JusyOst', 8900, '2023-11-10 18:00:00', '2023-11-10 18:00:00'),
    ('15151515-1515-1515-1515-151515151515', 'patryk.wrona@example.com', 'hashed_password21', 'PatrykW', 725, '2023-11-11 19:00:00', '2023-11-11 19:00:00'),
    ('16161616-1616-1616-1616-161616161616', 'karolina.wilk@example.com', 'hashed_password22', 'KaroWilk', 450, '2023-11-12 20:00:00', '2023-11-12 20:00:00'),
    ('17171717-1717-1717-1717-171717171717', 'mateusz.kalinowski@example.com', 'hashed_password23', 'MateoK', 1900, '2023-11-13 21:00:00', '2023-11-13 21:00:00'),
    ('18181818-1818-1818-1818-181818181818', 'monika.czerwinska@example.com', 'hashed_password24', 'MoniCz', 2450, '2023-11-14 22:00:00', '2023-11-14 22:00:00'),
    ('19191919-1919-1919-1919-191919191919', 'bartek.olszewski@example.com', 'hashed_password25', 'BartoszO', 8300, '2023-11-15 23:00:00', '2023-11-15 23:00:00'),
    ('20202020-2020-2020-2020-202020202020', 'agnieszka.lis@example.com', 'hashed_password26', 'AgaLis', 1520, '2023-11-16 12:00:00', '2023-11-16 12:00:00'),
    ('21212121-2121-2121-2121-212121212121', 'sebastian.zielinski@example.com', 'hashed_password27', 'SebZiel', 3650, '2023-11-17 13:00:00', '2023-11-17 13:00:00'),
    ('22222222-2222-2222-2222-222222222223', 'dagmara.borkowska@example.com', 'hashed_password28', 'DagaBork', 2780, '2023-11-18 14:00:00', '2023-11-18 14:00:00'),
    ('23232323-2323-2323-2323-232323232323', 'rafal.dudek@example.com', 'hashed_password29', 'RafDudek', 990, '2023-11-19 15:00:00', '2023-11-19 15:00:00'),
    ('24242424-2424-2424-2424-242424242424', 'alina.gajewska@example.com', 'hashed_password30', 'AlinaGaj', 7850, '2023-11-20 16:00:00', '2023-11-20 16:00:00');
