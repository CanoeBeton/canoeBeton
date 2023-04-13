DROP TABLE IF EXISTS boats;

CREATE TABLE IF NOT EXISTS boats (
  name varchar(100) CHARACTER SET utf8mb4 PRIMARY KEY,
  poids varchar(100) CHARACTER SET utf8mb4,
  longueur varchar(100) CHARACTER SET utf8mb4,
  largeur varchar(100) CHARACTER SET utf8mb4,
  profondeur varchar(100) CHARACTER SET utf8mb4,
  epaisseur varchar(100) CHARACTER SET utf8mb4,
  couleur_exterieure varchar(100) CHARACTER SET utf8mb4,
  couleur_interieure varchar(100) CHARACTER SET utf8mb4,
  renforcement varchar(1000) CHARACTER SET utf8mb4
);

INSERT INTO boats (name, poids, longueur, largeur, profondeur, epaisseur, couleur_exterieure, couleur_interieure, renforcement)
VALUES
('Boat1', '119 kg', '5918 mm', '655 mm', '368 mm', '12 à 15 mm', 'Brun, orange et vert', 'Brun et gris', 'fibres PVA + treillis fibre verre'),
('Boat2', '98 kg', '5600 mm', '600 mm', '340 mm', '11 à 14 mm', 'Rouge, bleu, blanc', 'Noir, rouge', 'fibres PVA + treillis fibre carbone'),
('Boat3', '119 kg', '5918 mm', '655 mm', '368 mm', '12 à 15 mm', 'Brun, orange et vert', 'Brun et gris', 'fibres PVA + treillis fibre verre'),
('Boat4', '98 kg', '5600 mm', '600 mm', '340 mm', '11 à 14 mm', 'Rouge, bleu, blanc', 'Noir, rouge', 'fibres PVA + treillis fibre carbone'),
('Boat5', '119 kg', '5918 mm', '655 mm', '368 mm', '12 à 15 mm', 'Brun, orange et vert', 'Brun et gris', 'fibres PVA + treillis fibre verre'),
('Boat6', '98 kg', '5600 mm', '600 mm', '340 mm', '11 à 14 mm', 'Rouge, bleu, blanc', 'Noir, rouge', 'fibres PVA + treillis fibre carbone'),
('Boat7', '119 kg', '5918 mm', '655 mm', '368 mm', '12 à 15 mm', 'Brun, orange et vert', 'Brun et gris', 'fibres PVA + treillis fibre verre'),
('Boat8', '98 kg', '5600 mm', '600 mm', '340 mm', '11 à 14 mm', 'Rouge, bleu, blanc', 'Noir, rouge', 'fibres PVA + treillis fibre carbone'),
('Boat9', '119 kg', '5918 mm', '655 mm', '368 mm', '12 à 15 mm', 'Brun, orange et vert', 'Brun et gris', 'fibres PVA + treillis fibre verre'),
('Boat10', '98 kg', '5600 mm', '600 mm', '340 mm', '11 à 14 mm', 'Rouge, bleu, blanc', 'Noir, rouge', 'fibres PVA + treillis fibre carbone'),
('Boat11', '119 kg', '5918 mm', '655 mm', '368 mm', '12 à 15 mm', 'Brun, orange et vert', 'Brun et gris', 'fibres PVA + treillis fibre verre'),
('Boat12', '98 kg', '5600 mm', '600 mm', '340 mm', '11 à 14 mm', 'Rouge, bleu, blanc', 'Noir, rouge', 'fibres PVA + treillis fibre carbone'),
('Boat13', '119 kg', '5918 mm', '655 mm', '368 mm', '12 à 15 mm', 'Brun, orange et vert', 'Brun et gris', 'fibres PVA + treillis fibre verre'),
('Boat14', '98 kg', '5600 mm', '600 mm', '340 mm', '11 à 14 mm', 'Rouge, bleu, blanc', 'Noir, rouge', 'fibres PVA + treillis fibre carbone'),
('Boat15', '119 kg', '5918 mm', '655 mm', '368 mm', '12 à 15 mm', 'Brun, orange et vert', 'Brun et gris', 'fibres PVA + treillis fibre verre'),
('Boat16', '98 kg', '5600 mm', '600 mm', '340 mm', '11 à 14 mm', 'Rouge, bleu, blanc', 'Noir, rouge', 'fibres PVA + treillis fibre carbone'),
('Boat17', '119 kg', '5918 mm', '655 mm', '368 mm', '12 à 15 mm', 'Brun, orange et vert', 'Brun et gris', 'fibres PVA + treillis fibre verre'),
('Boat18', '98 kg', '5600 mm', '600 mm', '340 mm', '11 à 14 mm', 'Rouge, bleu, blanc', 'Noir, rouge', 'fibres PVA + treillis fibre carbone'),
('Boat19', '119 kg', '5918 mm', '655 mm', '368 mm', '12 à 15 mm', 'Brun, orange et vert', 'Brun et gris', 'fibres PVA + treillis fibre verre'),
('Boat20', '98 kg', '5600 mm', '600 mm', '340 mm', '11 à 14 mm', 'Rouge, bleu, blanc', 'Noir, rouge', 'fibres PVA + treillis fibre carbone'),
('Boat21', '119 kg', '5918 mm', '655 mm', '368 mm', '12 à 15 mm', 'Brun, orange et vert', 'Brun et gris', 'fibres PVA + treillis fibre verre'),
('Boat22', '98 kg', '5600 mm', '600 mm', '340 mm', '11 à 14 mm', 'Rouge, bleu, blanc', 'Noir, rouge', 'fibres PVA + treillis fibre carbone'),
('Boat23', '119 kg', '5918 mm', '655 mm', '368 mm', '12 à 15 mm', 'Brun, orange et vert', 'Brun et gris', 'fibres PVA + treillis fibre verre'),
('Boat24', '119 kg', '5918 mm', '655 mm', '368 mm', '12 à 15 mm', 'Brun, orange et vert', 'Brun et gris', 'fibres PVA + treillis fibre verre');