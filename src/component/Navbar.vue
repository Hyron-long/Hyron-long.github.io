<template>
    <nav>
        <router-link to="/" class="logo"><img src="https://s41.ax1x.com/2026/01/28/pZWG01J.jpg" alt="Logo"></router-link>
        <ul class="nav-links">
            <li> 
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
            <li><router-link to="/">主页</router-link></li>
            <li><router-link to="/article">文章</router-link></li>
            <li><router-link to="/tech-stack">技术栈</router-link></li>
            <li><router-link to="/photography">摄影</router-link></li>
            <li><router-link to="/about">关于我</router-link></li>
        </ul>
        
    </nav>
</template>

<script setup>
</script>

<style >
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 50px;
    background-color: #f8f9fa;
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    height: 60px;
}
    

.logo img {
    height: 45px;
    width: auto;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 30px;
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

/* 高亮当前激活路由：背景高亮 */
.nav-links .router-link-active,
.nav-links .router-link-exact-active {
    background: #e9ecef;
    color: #333;
}
img{
   border-radius: 15px;
}
.logo{
    display: flex;
    align-items: center;
}

/* From Uiverse.io by LightAndy1 */ 
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
  box-shadow: 0 0 0 1.5px #2b2c37, 0 0 25px -17px #000;
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

.input:active {
  transform: scale(0.95);
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
</style>