-- SELECT r.id, c.name,c.bio,c.image_url,r.source_id,r.description as parent_id FROM characters c
-- join relationships r on r.source_id = c.id
-- where r.relationship_type = 'parent'
-- -- SELECT * FROM relationships
-- SELECT * FROM characters c
-- join relationships r on r.source_id = c.id
-- WHERE c.name = 'Jacob'
-- SELECT * FROM characters

INSERT INTO relationships (
  universe_id, source_id, target_id, relationship_type, description, status, created_at, updated_at
) VALUES

  -- Cronus → Hera
  ('eff52ef9-e8b3-473a-ab23-2227d2ab9459', '0fec1c96-0a32-46ce-a1b4-e0e32056fa6a', '0c92e9c0-9275-49bf-88eb-2a7c736548c0', 'parent', NULL, 0, '1751484920385', '1751484920385'),
  -- Rhea → Hera
  ('eff52ef9-e8b3-473a-ab23-2227d2ab9459', 'deee696d-cdfd-4165-ad16-463fe8bd3db8', '0c92e9c0-9275-49bf-88eb-2a7c736548c0', 'parent', NULL, 0, '1751484920385', '1751484920385'),

  -- Cronus → Demeter
  ('eff52ef9-e8b3-473a-ab23-2227d2ab9459', '0fec1c96-0a32-46ce-a1b4-e0e32056fa6a', '01823a44-789d-45da-9a6d-a3e594fa79e7', 'parent', NULL, 0, '1751484920385', '1751484920385'),
  -- Rhea → Demeter
  ('eff52ef9-e8b3-473a-ab23-2227d2ab9459', 'deee696d-cdfd-4165-ad16-463fe8bd3db8', '01823a44-789d-45da-9a6d-a3e594fa79e7', 'parent', NULL, 0, '1751484920385', '1751484920385');