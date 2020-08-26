SELECT *   -- exercise BETWEEN AND
FROM customers
WHERE birth_date BETWEEN '1990-01-01' AND '2000-01-01';

SELECT * 
FROM customers
WHERE last_name LIKE 'b%'; -- start with B 

SELECT * 
FROM customers
WHERE last_name LIKE '_____y'; -- y as five letter 

SELECT * 
FROM customers -- exercise LIKE and % usage
WHERE address LIKE '%TRAIL%' OR 
	  address LIKE '%AVENUE%';
      
SELECT * 
FROM customers -- exercise % and LIKE usage 
WHERE phone LIKE '%9';

SELECT * 
FROM customers -- REGEXP powerful string searcher
WHERE last_name REGEXP '^field|mac|rose'; -- | usage (pipe)

-- ^ beggining of a string
-- $ end of a string
-- | pipe is like OR in a string




