function calcular(num1, num2) {
    const promise = new Promise((resolve, reject) => {
        if(num2 == 0) reject(Error ("nao pode dividir um numero por zero"));

        const resultado = num1 / num2;

        resolve(resultado);
    });

    return promise;
}

calcular(2, 1)
    .then((result) => console.log(result))
    .catch((err) => console.log("erro: %s", err.massage))