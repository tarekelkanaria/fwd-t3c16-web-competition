/* Replace with your SQL commands */
CREATE TABLE User_list (
    id SERIAL PRIMARY KEY,
    category VARCHAR(40) NOT NULL,
    FOREIGN KEY (movies_id) REFERENCES movies (id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
);