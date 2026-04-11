# 文章配置说明

## articles.json 配置格式

`articles.json` 文件用于管理博客中的所有文章。每篇文章需要配置以下字段：

```json
{
  "filename": "文章文件名.md",
  "slug": "文章URL标识",
  "title": "文章标题"
}
```

## 字段说明

| 字段       | 说明                                                                             | 示例               |
| ---------- | -------------------------------------------------------------------------------- | ------------------ |
| `filename` | Markdown 文件名（必须与 `public/my_md/` 目录中的实际文件名完全一致，区分大小写） | `my-first-post.md` |
| `slug`     | URL 路径标识（用于生成文章链接，建议使用小写字母和连字符）                       | `my-first-post`    |
| `title`    | 文章显示标题（可以包含中文和特殊字符）                                           | `我的第一篇文章`   |

## 添加新文章步骤

### 1. 创建 Markdown 文件

在 `public/my_md/` 目录下创建新的 `.md` 文件，例如：`my-new-article.md`

### 2. 更新 articles.json

在 `public/my_md/articles.json` 数组中添加新文章配置：

```json
[
  {
    "filename": "existing-article.md",
    "slug": "existing-article",
    "title": "已有文章"
  },
  {
    "filename": "my-new-article.md",
    "slug": "my-new-article",
    "title": "我的新文章"
  }
]
```

### 3. 提交并部署

```bash
git add .
git commit -m "Add: new article"
git push
```

GitHub Actions 会自动构建并部署。

## 示例配置

### 示例 1：技术教程文章

```json
{
  "filename": "vue-composition-api-guide.md",
  "slug": "vue-composition-api-guide",
  "title": "Vue Composition API 完全指南"
}
```

### 示例 2：中文标题文章

```json
{
  "filename": "如何搭建个人博客.md",
  "slug": "如何搭建个人博客",
  "title": "如何搭建个人博客：从零到上线"
}
```

## 注意事项

1. **文件名必须匹配**：`filename` 字段必须与 `public/my_md/` 目录中的实际文件名完全一致（包括大小写）
2. **避免特殊字符**：建议 `slug` 使用小写字母、数字和连字符，避免使用空格和特殊字符
3. **唯一性**：每个 `slug` 必须是唯一的，不能重复
4. **JSON 格式**：确保 JSON 格式正确，注意逗号分隔（最后一个元素后不要加逗号）
5. **重新部署**：修改 `articles.json` 后需要提交代码并等待 GitHub Actions 部署完成

## 删除文章

从 `articles.json` 数组中删除对应的配置对象，然后提交部署即可。

## 修改文章

修改 `articles.json` 中对应文章的配置，或者直接编辑对应的 `.md` 文件内容，然后提交部署。
