--   SELECT r.source_id as source_id, r.relationship_type 
--   FROM relationships r 
--   JOIN characters c ON r.source_id = c.id 
--   WHERE r.target_id = '13a89d64-bcd1-4a5e-8f32-3f5f7bd665bd'
--   AND r.status = 0

SELECT id, name FROM characters
where id = '13a89d64-bcd1-4a5e-8f32-3f5f7bd665bd'


