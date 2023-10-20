-- Type: trigger

-- DROP TYPE IF EXISTS public.trigger;

CREATE TYPE public.trigger AS ENUM
    ('time', 'event');

ALTER TYPE public.trigger
    OWNER TO postgres;
