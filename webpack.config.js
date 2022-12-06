const path = require("path");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const isDev = process.env.NODE_ENV == "development";
const isProd = !isDev;

module.exports = {
  entry: {
    main: ["@babel/polyfill", "./src/index.ts"], // polyfyfill дополняет фичи ES
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension
    extensions: [".ts", ".js"],
    fallback: {
      fs: false,
    },
    alias: {
      handlebars: "handlebars/dist/handlebars.js",
    },
  },
  output: {
    filename: "js/[name].[hash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: isDev ? "/" : "./",
  },

  devServer: {
    port: 4200,
    hot: isDev,
    historyApiFallback: true,
  },
  optimization: {
    minimize: isProd,
    minimizer: [new CssMinimizerPlugin({})],
  },
  devtool: isDev ? "source-map" : false, // может видеть код исходный, а не собранный
  plugins: [
    new Dotenv({ systemvars: true }),
    new HtmlWebpackPlugin({
      // добавляем в компиляцию html
      filename: "index.html",
      template: path.resolve(__dirname, "./index.html"), // указываем файл html, который будет базовым
      minify: {
        collapseWhitespace: isProd,
      },
    }),

    new CleanWebpackPlugin(),

    new CopyWebpackPlugin({
      // копируем статичные файлы
      patterns: [
        {
          from: path.resolve(__dirname, "static/img"),
          to: path.resolve(__dirname, "dist/static/img"),
        },
      ],
    }),

    new MiniCssExtractPlugin({
      filename: "assets/css/[name].[hash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\html$/,
        use: "html-loader", //подгружает элементы которые указаны в html
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        generator: {
          filename: "assets/fonts/[name]-[hash][ext]",
        },
        type: "asset/resource", //обрабатывает шрифты
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource", //обрабатывает картинки
        generator: {
          filename: "assets/images/[name]-[hash][ext]",
        },
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
          },
        },
      },
    ],
  },
};
