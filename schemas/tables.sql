-- Table: public.events

-- DROP TABLE IF EXISTS public.events;

CREATE TABLE IF NOT EXISTS public.events
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    symbol text COLLATE pg_catalog."default",
    user_id uuid,
    trigger_value real,
    trigger_type public.trigger,
    CONSTRAINT events_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.events
    OWNER to postgres;

-- Table: public.stock_data

-- DROP TABLE IF EXISTS public.stock_data;

CREATE TABLE IF NOT EXISTS public.stock_data
(
    id integer NOT NULL,
    symbol character varying COLLATE pg_catalog."default",
    "time" timestamp with time zone,
    high real,
    low real,
    open real,
    close real,
    volume real,
    CONSTRAINT stock_data_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.stock_data
    OWNER to postgres;

-- Table: public.symbol

-- DROP TABLE IF EXISTS public.symbol;

CREATE TABLE IF NOT EXISTS public.symbol
(
    id character varying COLLATE pg_catalog."default" NOT NULL,
    company character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT symbol_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.symbol
    OWNER to postgres;

-- Table: public.user_subscription

-- DROP TABLE IF EXISTS public.user_subscription;

CREATE TABLE IF NOT EXISTS public.user_subscription
(
    id uuid NOT NULL,
    subscription jsonb,
    CONSTRAINT user_subscription_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.user_subscription
    OWNER to postgres;