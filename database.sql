CREATE DATABASE mythicals

CREATE TABLE IF NOT EXISTS public.families
(
    id bigint NOT NULL DEFAULT nextval('mythical_family_id_seq'::regclass),
    mod bigint,
    tests bigint[],
    name character varying COLLATE pg_catalog."default",
    dataset character varying[] COLLATE pg_catalog."default",
    CONSTRAINT mythical_family_pkey PRIMARY KEY (id)
)

CREATE TABLE IF NOT EXISTS public.tests
(
    id bigint NOT NULL DEFAULT nextval('test_id_seq'::regclass),
    description character varying COLLATE pg_catalog."default",
    expected character varying COLLATE pg_catalog."default",
    methods character varying[] COLLATE pg_catalog."default",
    family bigint,
    CONSTRAINT test_pkey PRIMARY KEY (id)
)

CREATE TABLE IF NOT EXISTS public.users
(
    id bigint NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    name character varying COLLATE pg_catalog."default" NOT NULL,
    current_mod bigint,
    CONSTRAINT users_pkey PRIMARY KEY (id)
)

CREATE TABLE IF NOT EXISTS public.attempts
(
    id bigint NOT NULL DEFAULT nextval('attempts_id_seq'::regclass),
    passing boolean,
    code character varying COLLATE pg_catalog."default",
    output character varying COLLATE pg_catalog."default",
    user_id bigint,
    test_id bigint,
    CONSTRAINT attempts_pkey PRIMARY KEY (id)
)