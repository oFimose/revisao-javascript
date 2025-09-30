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

-------


create table pedido (
Id int primary key identity(1,1),
NomeCliente nvarchar(100) not null,
DataPedido datetime not null default getdate(),
ValorTotal decimal(10,2) not null,
Status varchar(20) not null default 'Pendente',
FormaPagamento varchar(30) null, 
Observacao nvarchar(200) null
);

insert into pedido (NomeCliente, DataPedido, ValorTotal, Status, FormaPagamento, Observacao)
values 
('Pedrinho', '2025-05-21', 10.00, 'Aguardando', 'dinhero vivo', 'sem maionese'),
('Teleco', '2025-05-13', 150.00, 'Aprovado', 'pix', 'bem passado'),
('Borges', '2025-05-14', 100.00, 'Aguardando', 'pix', 'sou doente, mas n importa'),
('Bilau', '2025-05-30', 0, 'Cancelado', 'debito', '...');

select * from pedido
order by ValorTotal desc;

update pedido
set ValorTotal = '299.99'
where id = 2;

delete from pedido where id = 5

select * from pedido
where FormaPagamento = 'pix'
order by DataPedido desc;

select * from pedido
where LOWER(Observacao) like 'sou doente, mas n importa'

select top 2 *
from pedido 
order by ValorTotal desc;

--------

CREATE TABLE Cliente (
    Id INT PRIMARY KEY IDENTITY(1,1),
    Nome NVARCHAR(100) NOT NULL,
    Email NVARCHAR(100) UNIQUE,           --- unique, n deixa ter algo duplicado
    Genero NVARCHAR(1) NOT NULL,
    DataNascimento DATE NOT NULL
);

--- muda o nome da coluna com o AS
select nome as nomeCliente, email as emailCliente 
from Cliente

INSERT INTO Cliente (Nome, Email, Genero, DataNascimento)
VALUES ('João Silva', 'joao@email.com', 'M', '1990-05-12');

INSERT INTO Cliente (Nome, Genero, DataNascimento)
VALUES ('Maria Souza', 'F', '1988-09-23');

select * from Cliente

--- Contar numeros de registros
select COUNT (*) as totalClientes
from Cliente;

--- contar numero de registros de email
select COUNT (Email) as totalClientes
from Cliente

select * from pedido

--- seleciona o maior e o menor valor da coluna valorTotal;
select 
MAX(valorTotal) as maiorValorDosPedidos,
MIN(valorTotal) as menorValorDosPedidos
from pedido

---- 

--- usamos AVG para ver a media de tal coluna;
select AVG(ValorTotal) as mediaValorTotal 
from pedido;

--- media salarial dos funcionarios
select avg(salario) as mediaSalarial
from funcionarios;

--- soma o valorTotal dos pedidos
select sum(valorTotal)
from pedido;

select sum(salario)
from funcionarios;

-----

CREATE TABLE Pedidos (
    Id INT PRIMARY KEY IDENTITY(1,1),
    ClienteId INT NOT NULL,
    DataPedido DATETIME NOT NULL DEFAULT GETDATE(),
    ValorTotal DECIMAL(10,2) NOT NULL,
    Status NVARCHAR(20) NOT NULL DEFAULT 'Pendente',
    FormaPagamento NVARCHAR(30) NULL,
    Observacao NVARCHAR(200) NULL,
    FOREIGN KEY (ClienteId) REFERENCES Cliente(Id)
);

--- inner join usado para relacionar as tabelas pedido e cliente, através do id do cliente
select * from pedidos p 
inner join Cliente c
on c.id = p.ClienteId

