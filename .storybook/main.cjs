
module.exports = {
  "stories": [
    "../src/stories/**/*.stories.mdx",
    "../src/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/*.stories.mdx",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "type": "module",
  webpackFinal: async (config) => {
    const rules = config.module.rules
    const fileLoaderRule = rules.find((rule) => rule.test.test('.svg'))
    fileLoaderRule.exclude = /\.svg$/
    rules.push({ test: /\.svg$/, use: ['@svgr/webpack'] })
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
          options: {
            presets: [['react-app', { flow: false, typescript: true }]]
          }
        },
        require.resolve('react-docgen-typescript-loader')
      ]
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  }
}