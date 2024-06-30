CREATE DATABASE gestion_empresarial;

CREATE TABLE public.empleados (
	id SERIAL NOT NULL,
	categoria_id INTEGER NOT NULL,
	nombre VARCHAR NOT NULL,
	CONSTRAINT empleados_pk PRIMARY KEY (id)
);

CREATE TABLE public.categorias (
	id SERIAL NOT NULL,
	nombre VARCHAR NOT NULL,
	CONSTRAINT categorias_pk PRIMARY KEY (id)
);

CREATE TABLE public.recibos_sueldos (
	id SERIAL NOT NULL,
    empleado_id INTEGER NOT NULL,
    mes INTEGER NOT NULL,
    anio INTEGER NOT NULL,
    sueldo INTEGER NOT NULL,
	CONSTRAINT recibos_sueldos_pk PRIMARY KEY (id)
);