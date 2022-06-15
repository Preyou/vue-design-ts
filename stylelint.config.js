module.exports = {
  root: true,
  plugins: ['stylelint-order'],
  // scss项目在extends中加入'stylelint-scss'插件
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
  overrides: [
    {
      files: ['**/*.{html,vue}'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['**/*.less'],
      customSyntax: 'postcss-less',
    },
  ],
  rules: { // 覆盖stylelint-config-standard的配置 null为禁用规则
    'function-url-quotes': null, // 设置url(路径可不加引号)
    'selector-class-pattern': null, // 设置类名选择器不遵循 kebab-case
    'no-descending-specificity': null, // 设置允许低优先级的选择器出现在高优先级的选择器之后
    'no-empty-source': null, // 允许文件内容为空
    'font-family-no-missing-generic-family-keyword': null, // 设置允许定义非"generic-family"风格字体
    //  'order/properties-order': []    // 设置css属性书写顺序，会覆盖stylelint-config-rational-order
  },
}
