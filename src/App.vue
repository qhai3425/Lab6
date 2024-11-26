<template>
  <div id="app">
    <nav>
      <router-link to="/bai1">Bài 1</router-link>
      <router-link to="/bai2">Bài 2</router-link>
      <router-link to="/bai3">Bài 3</router-link>
      <router-link to="/bai4">Bài 4</router-link> <!-- Thêm link cho Bài 4 -->
    </nav>
    <router-view />
  </div>
</template>

<script setup>
// Không cần logic bổ sung
</script>

<style>
/* Kiểu dáng chung cho điều hướng */
nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 5px 10px;
  border: 1px solid #333;
  border-radius: 5px;
}

nav a:hover {
  background-color: #333;
  color: white;
}
</style>
