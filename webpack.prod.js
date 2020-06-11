const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const CopyPlugin = require("copy-webpack-plugin");
 
module.exports = merge(common, {
    mode: "production",
        plugins: [
            new CopyPlugin({
                patterns: [
                    {from: 'src/img', to: 'src/img'}
                ],
            }),
        ],
    module: {
        rules: [
            /* babel loader */
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                ]
            }
        ]
    }
})
