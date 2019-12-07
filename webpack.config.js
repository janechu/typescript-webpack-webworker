const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const appDir = path.resolve(__dirname, "./app");
const outDir = path.resolve(__dirname, "./www");

module.exports = {
    devServer: {
        compress: false,
        historyApiFallback: true,
        open: true,
        overlay: true,
        port: 3000,
    },
    devtool: process.env.NODE_ENV === "production" ? "none" : "inline-source-map",
    entry: {
        app: path.resolve(appDir, "index.ts"),
    },
    output: {
        path: outDir,
        publicPath: "/",
        filename: "[name].js",
    },
    mode: process.env.NODE_ENV || "development",
    module: {
        rules: [
            {
                test: /.ts$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            compilerOptions: {
                                declaration: false,
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            contentBase: outDir,
        }),
        new CopyWebpackPlugin([
            {
                from: "./dist/web-worker/index.js",
                to: `${outDir}/web-worker.js`
            }
        ])
    ],
    resolve: {
        extensions: [".js", ".ts", ".json"],
    },
};
