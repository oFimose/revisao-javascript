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

--------

create table funcionarios (
Id int primary key identity (1,1),
Nome nvarchar(100) not null,
Cargo nvarchar(50),
Salario decimal(10,2) not null,
DataAdmissao date not null
);

insert into funcionarios (Nome, Cargo, Salario, DataAdmissao)
values
('João Cabeça', 'sem serventia', 1200.00, '2025-02-03'),
('Maria Pipoca', 'serva', 0, '2025-01-16'),
('Dante infernu', 'matad. de onça', 2000.00, '2024-07-23');

update funcionarios
set Salario = '3100.00'
where Id = 1

update funcionarios
set Salario = '4500.00'
where Id = 5

select * from funcionarios

select * from funcionarios 
where Salario > 3000.00;

update funcionarios
set Cargo = 'Gerente'
where Id = 5

delete from funcionarios
where id = 2;
