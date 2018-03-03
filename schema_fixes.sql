ALTER TABLE artists_images SET LOGGED;
ALTER TABLE labels_images SET LOGGED;
ALTER TABLE masters_images SET LOGGED;
ALTER TABLE releases_images SET LOGGED;
ALTER TABLE releases_labels SET LOGGED;
ALTER TABLE format SET LOGGED;
ALTER TABLE release SET LOGGED;
ALTER TABLE country SET LOGGED;
ALTER TABLE artist SET LOGGED;
ALTER TABLE genre SET LOGGED;
ALTER TABLE label SET LOGGED;
ALTER TABLE releases_artists SET LOGGED;
ALTER TABLE releases_extraartists SET LOGGED;
ALTER TABLE role SET LOGGED;
ALTER TABLE track SET LOGGED;
ALTER TABLE tracks_artists SET LOGGED;
ALTER TABLE tracks_extraartists SET LOGGED;
ALTER TABLE releases_formats SET LOGGED;
ALTER TABLE master SET LOGGED;
ALTER TABLE masters_artists SET LOGGED;
ALTER TABLE masters_artists_joins SET LOGGED;
ALTER TABLE masters_extraartists SET LOGGED;
ALTER TABLE masters_formats SET LOGGED;

CREATE INDEX idx_release_master ON release (master_id);
CREATE INDEX idx_release_title_lower ON release (lower(title) varchar_pattern_ops);
CREATE INDEX idx_release_genres_lower ON release (lower(genres) varchar_pattern_ops);
CREATE INDEX idx_release_styles_lower ON release (lower(styles) varchar_pattern_ops);
CREATE INDEX idx_release_country_lower ON release (lower(country) varchar_pattern_ops);
CREATE INDEX idx_release_released_lower ON release (lower(released) varchar_pattern_ops);

CREATE INDEX idx_master_title_lower ON master (lower(title) varchar_pattern_ops);
CREATE INDEX idx_master_genres_lower ON master (lower(genres) varchar_pattern_ops);
CREATE INDEX idx_master_styles_lower ON master (lower(styles) varchar_pattern_ops);
CREATE INDEX idx_master_year ON master (year);

CREATE INDEX idx_artist_name_lower ON artist (lower(name) varchar_pattern_ops);

CREATE INDEX idx_label_name_lower ON label (lower(name) varchar_pattern_ops);