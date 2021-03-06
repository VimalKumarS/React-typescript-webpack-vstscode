﻿var webpack = require('webpack');
var path = require('path');
//var WebpackNotifierPlugin = require('webpack-notifier');


module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
    module: {
        loaders: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            //{ test: /\.tsx?$/, loader: "awesome-typescript-loader" }
             { test: /\.ts(x)?$/, loaders: ['react-hot','babel', 'ts-loader']  },
              { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
              {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style!css'
            }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};

/*
module.exports = {
    devtool: 'eval',
    // This will be our app's entry point (webpack will look for it in the 'src' directory due to the modulesDirectory setting below). Feel free to change as desired.
    entry: [
      './src/index.tsx'
    ],
    // Output the bundled JS to dist/app.js
    output: {
        filename: 'app.js',
        path: path.resolve('./src/dist/')
    },
    devtool: "source-map",
    resolve: {
        // Look for modules in .ts(x) files first, then .js(x)
        extensions: ['', '.ts', '.tsx', '.js', '.jsx'],
        // Add 'src' to our modulesDirectories, as all our app code will live in there, so Webpack should look in there for modules
        modulesDirectories: ['src', 'node_modules'],
    },
    module: {
        loaders: [
          // .ts(x) files should first pass through the Typescript loader, and then through babel
          { test: /\.tsx?$/, exclude: /node_modules/, loaders: ['babel', 'ts-loader'] }
        ],
        preLoaders: [
          // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
          { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [
      // Set up the notifier plugin - you can remove this (or set alwaysNotify false) if desired
      new WebpackNotifierPlugin({ alwaysNotify: true }),
    ]
};
*/