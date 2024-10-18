exports.executeCommand = async (req, res) => {
    if(req.query.hasOwnProperty('command')) {

        const { command } = req.query;
        // Regex para verificar o formato e extrair os valores
        const regex = /^(CARREGAR|DESCARREGAR)\((\d+),\s*(\d+)\)$/;

        const match = command.match(regex);

        if (match) {
            // match[1] é o comando, match[2] é x e match[3] é y
            const comando = match[1];
            const x = parseInt(match[2], 10);
            const y = parseInt(match[3], 10);

            if(comando === "CARREGAR") {
                // manda o hercules executar aqui
            }
            if(comando === "DESCARREGAR") {
                // manda o hercules executar aqui
            }
            
            res.status(200).send(
                {
                    success : 1
                }
            );
        } else {
            res.status(200).send(
                {
                    success : 0   
                }
            );
        }
    }
}

