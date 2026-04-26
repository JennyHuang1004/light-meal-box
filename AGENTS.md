# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## 项目概述

这是一个轻食盒子订餐系统的前端应用，使用 React + Vite 构建，面向健康饮食用户提供轻食订阅服务。

## 开发命令

### 启动开发服务器
```bash
pnpm dev
```

### 构建生产版本
```bash
pnpm build
```

### 代码检查
```bash
pnpm lint
```

### 预览生产构建
```bash
pnpm preview
```

## 技术栈

- **框架**: React 18
- **构建工具**: Vite 6
- **路由**: React Router DOM v6
- **样式**: Tailwind CSS 3
- **图标**: Lucide React
- **包管理器**: pnpm

## 项目架构

### 核心路由结构
应用使用 React Router v6 进行路由管理，所有路由定义在 `src/App.jsx` 中：
- `/` - 首页
- `/menu` - 每周菜单展示
- `/product/:id` - 产品详情页
- `/plans` - 订阅计划页
- `/checkout` - 结账页
- `/account` - 用户账户页

### 布局系统
`src/components/Layout.jsx` 提供统一的页面布局结构：
- 包含 sticky header，带有导航菜单和购物车/用户图标
- Footer 包含产品信息、支持链接和联系方式
- 所有页面都被 Layout 包裹，确保一致的用户体验

### 数据管理
`src/data/mockData.js` 包含所有模拟数据：
- `meals` - 餐品数据数组，包含营养信息、价格、标签等
- `plans` - 订阅计划数据（每周 4/6/10/12 餐）
- `userLoyalty` - 用户积分和印花奖励数据

### Tailwind 主题配置
自定义颜色方案在 `tailwind.config.js` 中定义：
- `primary`: #4CAF50 (主绿色)
- `secondary`: #8BC34A (浅绿色)
- `accent`: #FFC107 (黄色强调色)
- `dark`: #333333
- `light`: #F9F9F9

## 开发指南

### 添加新页面
1. 在 `src/pages/` 下创建新组件
2. 在 `src/App.jsx` 的 Routes 中添加路由
3. 在 `src/components/Layout.jsx` 的导航或 Footer 中添加链接（如需要）

### 修改餐品数据
直接编辑 `src/data/mockData.js` 中的 `meals` 数组。每个餐品对象包含：
- 基础信息：id, name, description, image, price, category
- 营养数据：calories, protein, carbs, fat
- 展示信息：tags, ingredients, available

### 样式开发
- 优先使用 Tailwind 工具类
- 自定义颜色使用 `text-primary`, `bg-secondary` 等语义化类名
- 响应式设计使用 Tailwind 的 `md:`, `lg:` 等前缀

### 图标使用
项目使用 Lucide React 图标库。导入示例：
```javascript
import { ShoppingBag, User, Menu } from 'lucide-react';
```

## 注意事项

- 所有中文内容和注释应使用中文
- 使用 pnpm 作为包管理器，不要使用 npm 或 yarn
- 组件使用函数式组件和 Hooks
- 路由使用 React Router v6 语法（useNavigate, useParams 等）
