# Vue 3 项目的完整命令指南

###  一、 创建项目 (推荐方案)

目前 Vue 官方首推 `create-vue`，它是基于 Vite 构建的，速度极快且配置了最新的 Vue 生态最佳实践。

#### 1. 使用 `create-vue` (官方推荐)
这是最标准的 Vue 3 项目创建方式。

*   **创建命令：**
    ```bash
    npm create vue@latest
    # 或者使用 pnpm (推荐速度更快)
    pnpm create vue@latest
    ```
*   **交互过程：**
    执行后，终端会进入交互式问答，你可以选择是否添加以下功能：
    *   TypeScript 支持
    *   Vue Router (路由)
    *   Pinia (状态管理)
    *   Vitest / Cypress (测试)
    *   ESLint (代码检查)

#### 2. 使用 `Vite` 模板 (轻量级)
如果你只需要一个最基础的 Vue 环境，不需要复杂的预配置，可以直接使用 Vite 的模板。

*   **创建命令：**
    ```bash
    # 创建纯 Vue 3 项目
    npm create vite@latest my-project -- --template vue
    
    # 创建 Vue 3 + TypeScript 项目
    npm create vite@latest my-project -- --template vue-ts
    ```

#### 3. 使用 `Vue CLI` (传统/旧方案)
虽然官方已不再推荐用于新项目（因为基于 Webpack，速度较慢），但在维护旧项目或需要兼容旧浏览器（如 IE11）时仍会用到。

*   **安装 CLI：**
    ```bash
    npm install -g @vue/cli
    ```
*   **创建命令：**
    ```bash
    vue create my-project
    ```
    *(注：需在交互菜单中选择 Vue 3 预设)*

---

### 二、 项目管理常用命令

项目创建完成后，你需要进入目录并安装依赖才能开始工作。以下是标准的操作流程：

#### 1. 安装依赖
新创建的项目文件夹中只有源代码，必须下载 `node_modules` 才能运行。

```bash
cd my-project      # 1. 进入项目目录
npm install        # 2. 安装依赖 (或使用 pnpm install / yarn)
```

#### 2. 启动开发服务器
在开发过程中，你需要启动本地服务器来实时预览修改效果。

```bash
npm run dev        # Vite/create-vue 项目 (推荐)
# 或者
npm run serve      # Vue CLI 项目
```
*启动成功后，通常访问 `http://localhost:5173` (Vite) 或 `http://localhost:8080` (CLI)。*

#### 3. 生产环境打包
当项目开发完成，准备上线时，需要将其编译为静态文件。

```bash
npm run build
```
*打包后的文件通常会在 `dist` 目录下。*

#### 4. 代码检查与格式化
如果你的项目开启了 ESLint 或 Prettier，可以使用以下命令修复代码格式问题。

```bash
npm run lint       # 检查代码规范
npm run lint:fix   # 自动修复格式错误
```

---

### 三、 常用命令速查表

为了方便记忆，我为你整理了常用操作的对比表：

| 操作阶段     | 命令 (npm)              | 说明                              |
| :----------- | :---------------------- | :-------------------------------- |
| **创建项目** | `npm create vue@latest` | 官方推荐，基于 Vite，含交互配置   |
| **安装依赖** | `npm install`           | 首次运行项目前必须执行            |
| **开发运行** | `npm run dev`           | 启动本地热更新服务器 (Vite)       |
| **生产打包** | `npm run build`         | 构建生产版本，输出到 dist 目录    |
| **类型检查** | `npm run type-check`    | 检查 TypeScript 类型错误 (若开启) |



*   **包管理器选择**：虽然 `npm` 是最通用的，但现在很多团队倾向于使用 **pnpm**，因为它的安装速度更快且更节省磁盘空间。如果你安装了 pnpm，上述命令中的 `npm` 都可以替换为 `pnpm`。
*   **Node.js 版本**：确保你的电脑安装了 **Node.js 18.x** 或更高版本，否则可能会遇到兼容性问题。