var webpack=require('webpack');
var path=require('path');
module.exports={

    //context: path.join(__dirname, '/apps/'),

    entry:{
        'event': './apps/event',
        'popup': './apps/popup',
        'tab': './apps/tab',
        'accordion': './apps/accordion'
    },

    output:{
        path: 'build',
        filename: '[name].js'
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                //include: path.join(__dirname, 'apps'),
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }

}