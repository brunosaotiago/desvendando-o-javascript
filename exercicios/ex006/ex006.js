// USE OPERADORES LÓGICOS, RELACIONAIS e TERNÁRIO PARA RESPONDER AS QUESTÕES ABAIXO

/* 01 - Declare as variáveis 'cidadeNatal' e 'cidadeAtual' e atribua os valores que desejar.
        Declare uma variável 'seMudou' atribuindo a ela a seguinte operação:
        [A cidadeNatal é igual a cidadeAtual?]*/
        let cidadeNatal = 'Caruaru'
        let cidadeAtual = 'Arcoverde'
        let seMudou = cidadeNatal === cidadeAtual 
        //console.log(seMudou)


/* 02 - Declare as variáveis 'preco1' e 'preco2' e atribua um valor decimal(float)
        abaixo de 500 para 'preco1' e acima de 500 para 'preco2'.
        Na linha abaixo, escreva uma expressão que testará se o 'preco1' é maior ou igual a 500.
        A seguir, escreva uma expressão que testará se o 'preco2' é maior ou igual a 500 */
        let preco1 = 2.5
        let preco2 = 500.5
        preco1 >= 500 
        preco2 >= 500 
        


/* 03 - Declare as variáveis 'km1' e 'km2' e atribua um valor Inteiro(int)
        abaixo de 80 para 'km1' e acima de 80 para 'km2'.
        Na linha abaixo, escreva uma expressão que testará se 'km1' é menor ou igual a 80
        A seguir, escreva uma expressão que testará se 'km2' menor ou igual a 80 */

        let km1 = 50
        let km2 = 200
        let testeKm1 = km1 <= 80 
        let testeKm2 = km2 <= 80 


/* 04 - Declare as variáveis 'cargo' e 'salario' e atribua os valores que desejar.
        Declare uma variável 'ehGerente' atribuindo a ela a seguinte operação:
        [O cargo é 'gerente' OU salario é maior que 7999?] */

        let cargo = 'programador'
        let salario = 3000
        let ehGerente = cargo == 'gerente' || salario > 7999         

 

/* 05 - Declare as variáveis 'idade' e 'sexo' e atribua os valores que desejar.
        Declare uma variável 'ehIdoso' atribuindo a ela a seguinte operação:
        [A idade é maior que 65 E sexo igual a 'M'?] 
        Declare uma variável 'ehIdosa' atribuindo a ela a seguinte operação:
        [A idade é maior que 60 E sexo igual a 'F'?] */

        let idade = 29
        let sexo = 'M'
        let ehIdoso = idade > 65 && sexo == 'M' 
        let ehIdosa = idade > 60 && sexo == 'F' 




/* 07 - Declare uma variável 'temperatura' atribua um valor decimal a ela.
        A seguir declare uma variável 'febre' atribuindo a ela a seguinte operação:
        [A temperatura é maior que 38.5? Se sim, retorne true, se não, retorne false]*/

        let temperatura = 30.5
        let febre = temperatura > 38.5 ? true : false



/* 08 - Declare uma variável 'kmRodado' atribua um valor decimal a ela.
        A seguir declare uma variável 'estado' atribuindo a ela a seguinte operação:
        [O kmRodado é menor que 100? Se sim, retorne 'Seminovo', se não, retorne 'Usado']*/

        let kmRodado = 350.5
        let estado = kmRodado < 100 ? 'Seminovo' : 'Usado'



/* 09 - Declare uma variável 'velocidade' atribua um valor inteiro a ela.
        A seguir declare uma variável 'testeVelocidade' atribuindo a ela a seguinte operação:
        [A velocidade é maior que 80? Se sim, retorne 'Você foi multado por excesso de velocidade',
        se não, retorne 'Boa viagem!']*/

        let velocidade = 200
        let testeVelocidade = velocidade > 80 ? 'Você foi multado por excesso de velocidade' : 'Boa viagem'



/* 10 - Declare uma variável 'linguagem' atribua um valor string a ela.
        A seguir declare uma variável 'testeLinguagem' atribuindo a ela a seguinte operação:
        [A linguagem é igual a 'JavaScript'? Se sim, retorne `${linguagem} é a linguagem mais popular do mundo`,
        se não, retorne `Deve ser legal esse tal de ${linguagem}`]*/

        let linguagem = 'português'
        let testeLinguagem = linguagem == 'JavaScript' ? `${linguagem} é a linguagem mais popular do mundo` : `Deve ser legal esse tal de ${linguagem}`



