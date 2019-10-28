CREATE TABLE question (
  id integer PRIMARY KEY AUTOINCREMENT,
  question_text text NOT NULL UNIQUE CHECK(length(question_text) > 0)
);