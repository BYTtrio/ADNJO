-- Insert sample data into the categories table
INSERT INTO categories (category_id, name) SELECT '11111111-1111-1111-1111-111111111111', 'Science' WHERE NOT EXISTS (SELECT 1 FROM categories WHERE category_id = '11111111-1111-1111-1111-111111111111');
INSERT INTO categories (category_id, name) SELECT '22222222-2222-2222-2222-222222222222', 'History' WHERE NOT EXISTS (SELECT 1 FROM categories WHERE category_id = '22222222-2222-2222-2222-222222222222');
INSERT INTO categories (category_id, name) SELECT '33333333-3333-3333-3333-333333333333', 'Language' WHERE NOT EXISTS (SELECT 1 FROM categories WHERE category_id = '33333333-3333-3333-3333-333333333333');

-- Insert sample data into the users table
INSERT INTO users (id, created_at, email, password, total_points, updated_at, username) SELECT '44444444-4444-4444-4444-444444444444', '2024-01-01 10:00:00', 'user1@example.com', 'password123', 100, '2024-01-02 10:00:00', 'user1' WHERE NOT EXISTS (SELECT 1 FROM users WHERE id = '44444444-4444-4444-4444-444444444444');
INSERT INTO users (id, created_at, email, password, total_points, updated_at, username) SELECT '55555555-5555-5555-5555-555555555555', '2024-01-02 11:00:00', 'user2@example.com', 'password456', 200, '2024-01-03 11:00:00', 'user2' WHERE NOT EXISTS (SELECT 1 FROM users WHERE id = '55555555-5555-5555-5555-555555555555');
INSERT INTO users (id, created_at, email, password, total_points, updated_at, username) SELECT '66666666-6666-6666-6666-666666666666', '2024-01-05 14:00:00', 'user3@example.com', 'password789', 150, '2024-01-06 14:00:00', 'user3' WHERE NOT EXISTS (SELECT 1 FROM users WHERE id = '66666666-6666-6666-6666-666666666666');

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