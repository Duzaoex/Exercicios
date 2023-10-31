-- Encontre o ator Johnny Cage
SELECT * FROM sakila.actor
WHERE first_name = 'JOHNNY' AND last_name = 'CAGE';

-- Encontre os filmes que podem ser alugados exatamente por 6 dias
SELECT title, rental_duration FROM sakila.film
WHERE rental_duration = 6

-- Encontre os filmes de classificação R que podem ser alugados exatamente por 6 dias
SELECT title, rental_duration, rating from SAKILA.FILM
WHERE rental_duration = 6 and rating = 'R';


-- Encontre os filmes de classificação R ou PG-13 que podem ser alugados exatamente por 6 dias
SELECT title, rental_duration, rating from SAKILA.FILM
WHERE rental_duration = 6
AND (rating = 'PG-13' OR rating = 'R');

-- Encontre os filmes: AFFAIR PREJUDICE, AFRICAN EGG, AGENT TRUMAN e AIRPLANE SIERRA.
SELECT * FROM sakila.film
WHERE title = 'AFFAIR PREJUDICE'
OR title = 'AFRICAN EGG'
OR title = 'AGENT TRUMAN'
OR title = 'AIRPLANE SIERRA';
-- usando in
SELECT * FROM sakila.film
WHERE title IN ('AFFAIR PREJUDICE', 'AFRICAN EGG', 'AGENT TRUMAN', 'AIRPLANE SIERRA');

-- Encontre todos os filmes menos os listados anteriormente: AFFEIR PREJUDICE, AFFRICAN EGG, AGENT TRUMAN e AIRPLANE SIERRA..
SELECT * FROM sakila.film
WHERE title NOT IN ('AFFAIR PREJUDICE', 'AFRICAN EGG', 'AGENT TRUMAN', 'AIRPLANE SIERRA');

-- Encontre atores que não tem os seguintes sobrenomes: PECK e HACKMAN.
SELECT first_name,last_name FROM sakila.actor
WHERE last_name NOT IN ('PECK', 'HACKMAN');

-- Encontre filmes com duração entre 120 e 150 minutos.
SELECT title, length FROM sakila.film
WHERE length BETWEEN 50 and 130

-- Imprima a data atual
SELECT now();  -- data e horário de agora
SELECT curdate(); -- data de agora
-- imprima o horario atual
SELECT curtime(); -- tempo de agora
-- imprima o ano, o mês e o dia em colunas separadas
SELECT year(now()); -- Ano atual
SELECT month(now()); -- mês atual
SELECT day(now()); -- dia atual
SELECT year(now()), month(now()), day(now());

-- Encontre aluguéis feitos às 00h07m11s do dia 26/05/2005.
SELECT * FROM sakila.rental
WHERE rental_date = '2005-05-26 00:07:11';

-- Encontre aluguéis feitos às 00h07m11s de qualquer dia. 
SELECT * FROM sakila.rental
WHERE TIME(rental_date) = '00:07:11';

-- Encontre alugéis feitos no dia 26/05/2005 a qualquer horário.
SELECT * FROM sakila.rental
WHERE DATE(rental_date) = '2005-05-26';

-- Encontre alugueis que foram devolvidos entre 26/05/2005 e 27/06/2005.
SELECT * FROM sakila.rental
WHERE DATE(return_date) BETWEEN '2005-05-27' AND '2005-06-03';

 
SELECT * FROM sakila.actor WHERE first_name LIKE '%rey%';
-- Encontre atores com o primeiro nome terminando com "dra"
SELECT first_name FROM sakila.actor WHERE first_name LIKE '%dra';
-- Encontre atores com o primeiro nome com 3 caracteres, sendo o primeiro a letra B.
SELECT first_name FROM sakila.actor WHERE first_name LIKE 'B__';
