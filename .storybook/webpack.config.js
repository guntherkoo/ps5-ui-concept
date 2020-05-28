const path = require("path");
const SRC_PATH = path.join(__dirname, '../components');

module.exports = ({config}) => {
	config.module.rules.push({
        test: /\.scss$/,
        use: [
        	{loader: 'classnames-loader'},
        	{loader: 'style-loader'},
	        {
	            loader: 'css-loader',
	            options: {
	                importLoaders: 1,
	                modules: {
	                    localIdentName: '[name]__[local]___[hash:base64:5]'
	                }
	            }
	        },
	        {loader: 'sass-loader'}
        ]
    });

	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		include: [SRC_PATH],
		use: [
			{
				loader: require.resolve('awesome-typescript-loader'),
				options: {
					configFileName: './.storybook/tsconfig.json'
				}
			},
			{ 
				loader: require.resolve('react-docgen-typescript-loader')
			}
		]
	});

	config.resolve.extensions.push('.ts', '.tsx');
	
	return config;
};