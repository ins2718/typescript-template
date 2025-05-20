const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
    target: "node",
    mode: "development",
    entry: {
        "index": "./src/index.ts",
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                },
            },
            {
                test: /\.node$/,
                loader: "node-loader",
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
        fallback: {},
    },
    externals: [{
        jsdom: "commonjs jsdom",
        puppeteer: "commonjs puppeteer",
    }],
    plugins: [
        new CleanWebpackPlugin(),
    ]
};