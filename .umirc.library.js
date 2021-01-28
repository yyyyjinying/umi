// react: "React" 配置用于处理umd打包大小写报错 适用与其他类似命令的package，例如dataset

export default {
  esm: "rollup",
  cjs: "rollup",
  umd: {
    name: "umisg",
    globals: {
      react: "React",
    },
  },
};
