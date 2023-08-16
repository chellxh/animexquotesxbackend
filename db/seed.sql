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

