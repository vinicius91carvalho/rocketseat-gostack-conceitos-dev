const path = require('path')

module.exports = {
    // Primeiro arquivo a ser carregado na aplicação
    entry: path.resolve(__dirname, 'src', 'index.js'),
    // Qual arquivo será gerado após ser convertido
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: { // Config da lib webpack-dev-server
        contentBase: path.resolve(__dirname, 'public')
    },
    module: {
        // Loaders do Webpack (Para lidar com cada tipo de arquivo do projeto)
        rules: [
            { // Loader para arquivos JS
                test: /\.js$/, // Todos os arquivos JS
                exclude: /node_modules/, // Elimina todos os arquivos dentro de node_modules,
                use: { // Para todos os arquivos JS que não estejam no diretório node_modules, utilize o babel-loader
                    loader: 'babel-loader', // O babel transpila o código JS moderno ES6,7,8... de uma forma que o browser entenda ES5
                }
            },
            { // Loader para arquivos CSS
                test: /\.css$/,
                exclude: /node_modules/, // Elimina todos os arquivos dentro de node_modules,
                use: [
                    { loader: 'style-loader' }, // Vai obter o CSS a partir do css-loader e vai injetar no HTML
                    { loader: 'css-loader' } // Vai ler o arquivo CSS e vai interpretar as importações, como: imagens, fontes e etc.
                ]
            },
            { // Loader para arquivos, como por exemplo imagens
                test: /.*\.(gif|png|jpe?g)$/i,
                use: { loader: 'file-loader'}

            }
        ]
    }
}