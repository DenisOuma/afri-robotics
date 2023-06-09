const nextConfig = {
	webpack: (config) => {
		config.module.rules.push({
			test: /\.(mov|mp4)$/,
			use: {
				loader: "file-loader",
				options: {
					publicPath: "/_next/",
					outputPath: "static/",
					name: "videos/[name].[hash].[ext]",
				},
			},
		});

		return config;
	},
};

module.exports = nextConfig;
