const fs = require('fs');
const path = require('path');

// 读取文件
const inputFile = "24小时反复听，边走边听英语听力练习磨耳朵(续更) - 001 - 1初级听力短语篇（高效磨耳朵）.txt";
const outputFile = "去重-" + inputFile;

fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // 按行分割文本
  const lines = data.split('\n');

  // 过滤中文和空行,去重
  const uniqueEnglishSentences = [...new Set(lines
    .map(line => line.trim())
    .filter(line => line && !/[\u4e00-\u9fa5]/.test(line)) // 过滤中文和空行
  )];

  // 将结果写入新文件
  const output = uniqueEnglishSentences.join('\n');
  fs.writeFile(outputFile, output, 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
    } else {
      console.log(`Processed file saved as ${outputFile}`);
    }
  });
});