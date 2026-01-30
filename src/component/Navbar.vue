<template>
  <nav>
    <!-- Logo -->
    <router-link to="/" class="logo">
      <img src="https://s41.ax1x.com/2026/01/28/pZWG01J.jpg" alt="Logo" />
    </router-link>

    <!-- 汉堡菜单按钮（仅在移动端显示） -->
    <button class="hamburger" @click="toggleMenu" aria-label="Toggle navigation">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- 导航链接容器 -->
    <ul class="nav-links" :class="{ active: isMenuOpen }">
      <!-- 搜索框（移动端可保留或移除，这里保留但缩小） -->
      <li class="search-item">
        <div class="group">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="search-icon">
            <g>
              <path
                d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
              ></path>
            </g>
          </svg>
          <input
            id="query"
            class="input"
            type="search"
            placeholder="Search..."
            name="searchbar"
          />
        </div>
      </li>

      <li><router-link to="/" @click="closeMenu">主页</router-link></li>
      <li><router-link to="/article" @click="closeMenu">文章</router-link></li>
      <li><router-link to="/tech-stack" @click="closeMenu">技术栈</router-link></li>
      <li><router-link to="/photography" @click="closeMenu">摄影</router-link></li>
      <li><router-link to="/about" @click="closeMenu">关于我</router-link></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: #f8f9fa;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  height: 50px;
  position: relative;
}

.logo img {
  height: 35px;
  width: auto;
  border-radius: 20px;
}

/* 汉堡菜单按钮 - 默认隐藏 */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
}

.hamburger span {
  width: 100%;
  height: 2px;
  background: #333;
  border-radius: 2px;
  transition: all 0.3s ease;
}

/* 导航链接 - 默认水平排列 */
.nav-links {
  display: flex;
  list-style: none;
  gap: 20px;
  margin: 0;
}

.nav-links li a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.15s, background 0.15s;
  padding: 6px 10px;
  border-radius: 6px;
  display: inline-block;
}

.nav-links li a:hover {
  color: #007bff;
  background: rgba(0, 123, 255, 0.06);
}

.nav-links .router-link-active,
.nav-links .router-link-exact-active {
  background: #e9ecef;
  color: #333;
}

/* 搜索框样式 */
.group {
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  max-width: 190px;
}

.input {
  font-family: "Montserrat", sans-serif;
  width: 100%;
  height: 33px;
  padding-left: 2.5rem;
  box-shadow: 0 0 0 0.5px #2b2c37, 0 0 25px -17px #000;
  border: 0;
  border-radius: 12px;
  background-color: #ffffff;
  outline: none;
  color: #bdbecb;
  transition: all 0.25s cubic-bezier(0.19, 1, 0.22, 1);
  cursor: text;
  z-index: 0;
}

.input::placeholder {
  color: #bdbecb;
}

.input:hover {
  box-shadow: 0 0 0 2.5px #2f303d, 0px 0px 25px -15px #000;
}

.input:focus {
  box-shadow: 0 0 0 2.5px #131212;
}

.search-icon {
  position: absolute;
  left: 1rem;
  fill: #bdbecb;
  width: 1rem;
  height: 1rem;
  pointer-events: none;
  z-index: 1;
}

/* 手机端响应式样式 */
@media (max-width: 768px) {
  .nav-links {
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    background: #fff;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    gap: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-150%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.6s ease;
    z-index: 9;
  }

  .nav-links.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-links li {
    width: 100%;
  }

  .nav-links li a {
    width: 100%;
    padding: 10px;
    text-align: left;
  }

  /* 搜索项单独处理 */
  .search-item {
    width: 100%;
  }

  .group {
    max-width: 100%;
  }

  .input {
    height: 40px;
    padding-left: 2.2rem;
    font-size: 1rem;
  }

  .search-icon {
    left: 1.2rem;
  }

  /* 显示汉堡菜单 */
  .hamburger {
    display: flex;
  }

  /* 动画：打开菜单时线条变化 */
  .hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
  }
  .hamburger.active span:nth-child(2) {
    opacity: 0;
  }
  .hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }

  /* 调整 logo 高度 */
  .logo img {
    height: 36px;
  }
}
</style>


