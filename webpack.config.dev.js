module:{
    rules:[
        {
            test: /\.(jpe?g|gif|png|svg)$/i, // image files
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit:10000
                    }
                }
            ]

        }
    ]
}