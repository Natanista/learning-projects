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

SELECT * 
FROM orders;

SELECT *
from orders
WHERE shipper_id IS NULL;

SELECT first_name, last_name, 10 AS points
FROM customers
ORDER BY points, first_name;

SELECT *
FROM order_items;

use sql_store;

SELECT *, quantity * unit_price AS total_price
FROM order_items
WHERE order_id = 2
ORDER BY total_price DESC;

-- LIMIT 
SELECT *
FROM customers
LIMIT 6, 3;
-- PAGE 1: 1 - 3
-- page 2: 4 - 6
-- page 3: 7 -9

SELECT *
FROM customers
ORDER BY points DESC
LIMIT 3;

-- Inner Join
SELECT *
FROM orders
JOIN customers 
ON orders.customer_id = customers.customer_id;

