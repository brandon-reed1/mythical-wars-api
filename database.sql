CREATE TABLE IF NOT EXISTS families (
	id serial primary key,
	mod int,
	tests int[],
	title text,
	datasets text[]
);

CREATE TABLE IF NOT EXISTS tests (
	id serial primary key,
  test_name text,
	instructions text,
	expected text,
	methods text[],
	family int
);

CREATE TABLE IF NOT EXISTS users (
	id serial primary key,
	user_name text,
	current_mod int
);

CREATE TABLE IF NOT EXISTS attempts (
	id serial primary key,
	user_id int,
	test_id int,
	passing boolean,
	code text,
  result text
);

INSERT INTO users (
  user_name,
  current_mod
) VALUES (
  'Alex Kio',
  5
);

INSERT INTO families (
  mod,
	tests,
	title,
	datasets
) VALUES (
  2,
  '{1, 2}',
  'Kitties',
  '{"const kitties = [
    {
      name: `Felicia`,
      age: 2,
      color: `grey`
    },
    {
      name: `Tiger`,
      age: 5,
      color: `orange`
    },
    {
      name: `Snickers`,
      age: 8,
      color: `orange`
    },
    {
      name: `Max`,
      age: 1,
      color: `tuxedo`
    }
  ]"}'
);

INSERT INTO tests (
  test_name,
	expected,
	methods,
	family
) VALUES (
  'orangeKittyNames',
  '[`Tiger`, `Snickers`]',
  '{`filter`, `reduce`}',
  1
);

INSERT INTO tests (
  test_name,
	expected,
	methods,
	family
) VALUES (
  'sortByAge',
  '[{
    name: `Snickers`,
    age: 8,
    color: `orange`
  }, {
    name: `Tiger`,
    age: 5,
    color: `orange`
  }, {
    name: `Felicia`,
    age: 2,
    color: `grey`
  }, {
    name: `Max`,
    age: 1,
    color: `tuxedo`
  }]',
  '{`sort`}',
  1
);

INSERT INTO attempts (
  user_id,
	test_id,
	passing,
	code,
  result
) VALUES (
  1,
  1,
  true,
  'testing',
  'not bad'
);