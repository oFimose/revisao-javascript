console.log("hello world");

-- selecionar todas as colunas dos clientes
select *
	from Cliente;

-- selecionar apenas nomes e emails dos clientes
select nome, email
	from Cliente;

-- selecionar todas as colunas onde o nome do cliente é Maria Souza
select * 
from Cliente
where nome = 'Maria Souza'

-- selecionar todas as colunas onde o nome é 3
select *
from cliente
where id = 3;

-- selecionar todas as colunas ordenando de forma ascendente pela DataNascimento
select *
from cliente
order by DataNascimento asc;

-- selecionar todas as colunas ordenando de forma descente pelo id
select * 
from Cliente
order by id desc;

update cliente
set Email = 'maria.souza@gmail.com'
where Nome = 'Maria Souza'

select *
from cliente
