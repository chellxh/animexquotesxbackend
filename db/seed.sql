\c ianime;

INSERT INTO 
    shows (title, image, category, release_date, rating) 
VALUES
('Bleach', 'https://upload.wikimedia.org/wikipedia/en/7/72/Bleachanime.png', 'anime', '2009-09-09', 5),
('Naruto', 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/8532171bec0d05bfe45769a330fbab82.jpe', 'anime', '2005-09-10', 5),
('Attack On Titan', 'https://flxt.tmsimg.com/assets/p10701949_b_v9_ah.jpg', 'anime', '2013-09-28', 5),
('Jujutsu Kaisen', 'https://m.media-amazon.com/images/M/MV5BMTMwMDM4N2EtOTJiYy00OTQ0LThlZDYtYWUwOWFlY2IxZGVjXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg', 'anime', '2020-10-03', 4),
('Hunter x Hunter', 'https://m.media-amazon.com/images/M/MV5BNGM0YTk3MWEtN2JlZC00ZmZmLWIwMDktZTMxZGE5Zjc2MGExXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg', 'anime', '2016-04-17', 4),
('Dragon Ball Super', 'https://m.media-amazon.com/images/M/MV5BY2I2MzI1ODYtMWRlOS00MzdhLWEyOWEtYWJhNmFiZTIxMGJhXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_FMjpg_UX1000_.jpg', 'anime', '2015-07-05', 5),
('Invader Zim', 'https://m.media-amazon.com/images/M/MV5BOTZjZWM2OGUtOGFjMC00NjEzLWJjNjktNzA1MTZlZWQzZGE1XkEyXkFqcGdeQXVyODA4OTIyMzY@._V1_QL75_UX190_CR0,2,190,281_.jpg', 'animation', '2001-03-30', 5),
('Blippi Wonders', 'https://m.media-amazon.com/images/M/MV5BMjRiYzIyOTEtMmM5ZS00MDVkLWE2NzctOTcwYmE4YTg4YTEyXkEyXkFqcGdeQXVyMjQxMDkyNzE@._V1_.jpg', 'education', '2021-09-21', 4),
('Inuyasha', 'https://m.media-amazon.com/images/M/MV5BMGNmMWI4MGUtYmU0ZS00ZDkxLTgzMTAtZDU4YmQ1MDM3Y2IyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg', 'anime', '2000-10-16', 5),
('The Batman', 'https://image.tmdb.org/t/p/w500/3w7koeOR2x71XYMJDGpygxYtScI.jpg', 'animation', '2004-09-11', 5)
;

INSERT INTO characters (show_id, name, status, power_lvl, image) VALUES 
(1, 'Ichigo Kurosaki', 'Substitute Soul Reaper', 10, 'https://giffiles.alphacoders.com/129/12956.gif'),
(1, 'Kisuke Urahara', 'Former Captain of Squad 12', 10, 'https://64.media.tumblr.com/e61fcf804b84f6b49650021b3768b9d8/c7675b9c76ecbed9-26/s540x810/12b7e402358cc2fa40d244034c7c18d0c9f3fa35.gif'),
(1, 'Yoruichi Shihouin', 'Former Captain of the 2nd Divison Onmitsukido', 9, 'https://media.tenor.com/KyVkgRecB20AAAAC/yoruichi-shih%C5%8Din-bleach.gif'),
(1, 'Hollow Ichigo', 'Zanpakuto', 10, 'https://64.media.tumblr.com/50194896d1b1caa16bf219ac5615afc4/tumblr_ms03mvcMui1sfny5qo1_500.gif'),
(2, 'Naruto Uzumaki', 'Hokage', 10, 'https://i.giphy.com/media/8MyXEVgue4ucw/giphy.webp'),
(2, 'Kakashi Hatake', 'Jonin-Level Shinobi, Former Hokage', 9, 'https://media.tenor.com/_KsnH9YVT5QAAAAC/kakashi.gif'),
(2, 'Sasuke Uchiha', 'Former Member of the Akatsuki', 10, 'https://media.tenor.com/e9tRTtV8vU0AAAAC/sasuke-naruto.gif'),
(2, 'Itachi Uchiha', 'Former Captain of ANBU, Former Member of the Akatsuki, Hidden Leaf''s Martyr', 10, 'https://steamuserimages-a.akamaihd.net/ugc/156903851085964994/8419FCE240BD49DC66CD463271A200738AFBF266/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false'),
(3, 'Eren Jaeger', 'Jaegerists, Former Member of the Survey Corps Special Operations Squad', 10, 'https://thumbs.gfycat.com/BiodegradableCanineFlea-size_restricted.gif'),
(3, 'Levi Ackerman', 'Captain of the Survey Corps Special Operations Squad', 10, 'https://gifdb.com/images/high/cool-captain-levi-ackerman-2r15qy70pntvwp4a.gif'),
(4, 'Gojo Satoru', 'Special Grade Jujutsu Sorceror', 10, 'https://media.tenor.com/AUQrhGRWJ4EAAAAC/gojo-gojo-satoru.gif'),
(4, 'Yuji Itadori', null, 8, 'https://media.tenor.com/f7uhDqZB6GAAAAAd/yuuji-itadori-itadori.gif'),
(5, 'Killua Zoldyck', null, 9, 'https://media.tenor.com/pLhhw8tQib0AAAAC/killua-hunter-x-hunter.gif'),
(5, 'Gon Freecss', null, 9, 'https://www.icegif.com/wp-content/uploads/icegif-4878.gif'),
(6, 'Goku', 'Super Saiyan', 10, 'https://gifdb.com/images/thumbnail/ultra-instinct-goku-498-x-280-gif-jfu7hhav972cjcia.gif'),
(6, 'Vegeta', 'Super Saiyan', 9, 'https://media.tenor.com/gmRpYxqePBUAAAAC/vegeta.gif'),
(7, 'Zim', 'Invader', 4, 'https://i.gifer.com/NYsn.gif'),
(7, 'Gir', 'Robot', 2, 'https://media.tenor.com/LcYKqL4sBusAAAAC/invader-zim-gir-invader-zim.gif'),
(8, 'Blippi', null, null, 'https://media.tenor.com/3_Fs9Yq_DJYAAAAC/dancing-blippi.gif'),
(9, 'Inuyasha', 'Half Demon', 8, 'https://i.pinimg.com/originals/9a/29/5a/9a295a597337e0c8bddb8f21ab177100.gif'),
(10, 'Batman', 'Hero', 9, 'https://media.tenor.com/xzNHxtBqaAQAAAAC/batman-batman-the-animated-series.gif');

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

