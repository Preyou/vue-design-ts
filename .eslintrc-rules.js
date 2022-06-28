module.exports = {
    rules: {
        'one-var': 'off', // 强制函数中的变量要么一起声明要么分开声明
        'vue/require-default-prop': 'off', // 强制组件 props 必须包含默认值
        'vue/max-attributes-per-line': 'off', // 强制组件属性不超过一行
        'vue/html-closing-bracket-newline': 'off', // 强制组件内的 html 标签闭合在一行内
        'template-curly-spacing': "off", // 强制在模板字面量中使用一致的空格
    }
}