import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.ts',
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.ts', '.js'], // Permitir importar archivos sin especificar extensión
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Aplicar loader a archivos .ts
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
