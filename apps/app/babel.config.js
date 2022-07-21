module.exports = function (api) {
  api.cache(true);
  return {
    presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
    plugins: [
        'react-native-reanimated/plugin',
        ['@tamagui/babel-plugin', {
            config: './apps/app/tamagui.config.ts',
            components: ['tamagui', '@nx-tamagui-example/ui'],
        }],
        ['transform-inline-environment-variables', {
            include: 'TAMAGUI_TARGET'
        }]
    ],
  };
};
