\c ianime;

INSERT INTO 
    shows (title, image, category, release_date, rating) 
VALUES
('Bleach', 'assets/bleach.webp', 'anime', '2009-09-09', 5),
('Naruto', 'assets/naruto.jpg', 'anime', '2005-09-10', 5),
('Attack On Titan', 'assets/aot.webp', 'anime', '2013-09-28', 5),
('Jujutsu Kaisen', 'assets/jujutsukaisen.jpg', 'anime', '2020-10-03', 4),
('Hunter x Hunter', 'assets/hunterxhunter.jpg', 'anime', '2016-04-17', 4),
('Dragon Ball Super', 'assets/dbs.jpg', 'anime', '2015-07-05', 5),
('Invader Zim', 'assets/invaderZim.webp', 'animation', '2001-03-30', 5),
('Blippi Wonders', 'assets/BlippiWonders.jpg', 'education', '2021-09-21', 4),
('Inuyasha', 'assets/Inuyasha.jpeg', 'anime', '2000-10-16', 5),
('The Batman', 'assets/TheBatman.jpg', 'animation', '2004-09-11', 5)
;

INSERT INTO characters (show_id, name, status, power_lvl, image) VALUES 
(1, 'Ichigo Kurosaki', 'Substitute Soul Reaper', 10, 'pic'),
(1, 'Kisuke Urahara', 'Former Captain of Squad 12', 10, 'pic'),
(1, 'Yoruichi Shihouin', 'Former Captain of the 2nd Divison Onmitsukido', 9, 'pic'),
(1, 'Hollow Ichigo', 'Zanpakuto', 10, 'pic'),
(2, 'Naruto Uzumaki', 'Hokage', 10, 'pic'),
(2, 'Kakashi Hatake', 'Jonin-Level Shinobi, Former Hokage', 9, 'pic'),
(2, 'Sasuke Uchiha', 'Former Member of the Akatsuki', 10, 'pic'),
(2, 'Itachi Uchiha', 'Former Captain of ANBU, Former Member of the Akatsuki, Hidden Leaf''s Martyr', 10, 'pic'),
(3, 'Eren Jaeger', 'Jaegerists, Former Member of the Survey Corps Special Operations Squad', 10, 'pic'),
(3, 'Levi Ackerman', 'Captain of the Survey Corps Special Operations Squad', 10, 'pic'),
(4, 'Gojo Satoru', 'Special Grade Jujutsu Sorceror', 10, 'pic'),
(4, 'Yuji Itadori', null, 8, 'pic'),
(5, 'Killua Zoldyck', null, 9, 'pic'),
(5, 'Gon Freecss', null, 9, 'pic'),
(6, 'Goku', 'Super Saiyan', 10, 'pic'),
(6, 'Vegeta', 'Super Saiyan', 9, 'pic'),
(7, 'Zim', 'Invader', 4, 'pic'),
(7, 'Gir', 'Robot', 2, 'pic'),
(8, 'Blippi', null, null, 'pic'),
(9, 'Inuyasha', 'Half Demon', 8, 'pic'),
(10, 'Batman', 'Hero', 9, 'pic');

INSERT INTO quotes (character_id, show_id, quote) VALUES 
(1, 1, 'Don''t break anyone''s heart, they only have one. Break their bones, they have 206.'),
(2, 1, 'The difference in ability, what about it? Do you think I should give up just because you''re stronger than me?'),
(3, 1, 'In three days, I will make this boy stronger than you.'),
(4, 1, 'I am... Zangetsu!'),
(5, 2, 'I don''t quit...I don''t run, I never go back on my word. That''s my ninja way!'),
(6, 2, 'To know what is right and choose to ignore it is the act of a coward.'),
(7, 2, 'If that''s how it is, I''ll just have to sever that bond!'),
(8, 2, 'It is not wise to judge others based on your own preconceptions and by their appearances.'),
(9, 3, 'Nothing changed! You haven''t changed one bit, DAMNIT! You''re still as useless as you ever were! Nothing changed!'),
(10, 3, 'This is just my opinion, but when it comes to teaching somebody discipline... I believe pain is the most effective way!'),
(11, 4, 'Love is the most twisted curse of all.'),
(12, 4, 'People who are smart don''t really go around saying that themselves.'),
(13, 5, 'Not killing people is really hard. Clean living is tough.'),
(14, 5, 'I never imagined how frustrating weakness could be.'),
(15, 6, 'I guess name-calling is your only attack because you''re too weak to challenge me any other way.'),
(16, 6, 'Kakarot…I leave the rest to you'),
(17, 7, 'Insolent Schoolboy! It''s a skin condition.'),
(18, 7, 'But I need tacos! I need them or I will explode, that happens to me sometimes!'),
(20, 9, 'Can it be that I''m afraid, or is it merely I know not my own limit?'),
(21, 10, 'I''m Batman!');

