

function obterusuario(callback){
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: "Aladin",
            dataNascimento: new Date()
        })
    }, 1000)
}

function obtertelefone(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
             telefone: '81254387563',
             ddd: 81
        })
    }, 1000)
}

function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            rua: 'rua dos bobos',
            numero: 0
        })
    }, 1000)
}

obterusuario((error, usuario) => {
    if(error){
        console.error('Deu ruim', error)
        return
    }
    obtertelefone(usuario.id, (error1, telefone) => {
        if(error1){
            console.error('Deu ruim', error1)
            return
        }
        obterEndereco(usuario.id, (error2, endereco) => {
            if(error2){
                console.error('Deu ruim', error2)
                return
            }
            console.log(`
                Nome: ${usuario.nome},
                Endereco: ${endereco.rua}, ${endereco.numero}
                Telefone: (${telefone.ddd}) ${telefone.telefone}
            `)
        })
    })
})