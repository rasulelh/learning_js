"use strict";

const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);

const folderName = args[0];
const title = args[1];

let description = "Short description.";

// ищем --desc
const descIndex = args.indexOf("--desc");
if (descIndex !== -1 && args[descIndex + 1]) {
  description = args[descIndex + 1];
}

if (!folderName || !title) {
  console.log(
    'Usage: node create-task.js <folder-name> <Task Title> [--desc "description"]'
  );

  process.exit(1);
}

const ROOT = __dirname;
const TEMPLATE_DIR = path.join(ROOT, "templates", "js-task");
const TARGET_DIR = path.join(ROOT, folderName);

// 1. Проверка
if (fs.existsSync(TARGET_DIR)) {
  console.log(`❌ Folder "${folderName}" already exists`);
  process.exit(1);
}

// 2. Создаём папку
fs.mkdirSync(TARGET_DIR);

// 3. Копируем файлы шаблона
fs.copyFileSync(
  path.join(TEMPLATE_DIR, "index.js"),
  path.join(TARGET_DIR, `${folderName}.js`)
);

let readme = fs.readFileSync(path.join(TEMPLATE_DIR, "README.md"), "utf-8");

// 4. Подставляем название задачи
readme = readme.replace("Short description.", description);

// 5. Пишем README
fs.writeFileSync(path.join(TARGET_DIR, "README.md"), readme);

console.log(`✅ Project "${folderName}" created successfully`);

// 6. Добавляем проект в главный README
const mainReadmePath = path.join(ROOT, "README.md");

if (fs.existsSync(mainReadmePath)) {
  let mainReadme = fs.readFileSync(mainReadmePath, "utf-8");

  // 🔒 Проверка: проект уже есть в README
  if (mainReadme.includes(`📁 \`${folderName}\``)) {
    console.log(`⚠️ Project "${folderName}" already exists in README`);
    process.exit(0);
  }

  const projectBlock = `
---

### 🔹 ${title}
📁 \`${folderName}\`

${description}
`;

  mainReadme = mainReadme.replace(
    /\nMore projects will be added as I continue learning JavaScript 🚀/,
    `${projectBlock}\n\nMore projects will be added as I continue learning JavaScript 🚀`
  );

  fs.writeFileSync(mainReadmePath, mainReadme);
}
