const fs = require("fs");
const path = require("path");

function removeDuplicates(inputFilePath, outputFilePath) {
  // 读取文件内容
  const content = fs.readFileSync(inputFilePath, "utf-8");

  // 将内容按行分割
  const lines = content.split("\n");

  // 使用Set去重
  const uniqueLines = [...new Set(lines)];

  // 将去重后的内容写入新文件
  fs.writeFileSync(outputFilePath, uniqueLines.join("\n"));

  console.log(`去重完成。结果已保存到 ${outputFilePath}`);
}

// 使用示例
const inputFile = "24小时反复听，边走边听英语听力练习磨耳朵(续更) - 002 - 2初级听力短语篇二（高效磨耳朵）.txt";
const outputFile = path.join(path.dirname(inputFile), "去重后_" + path.basename(inputFile));

removeDuplicates(inputFile, outputFile);
