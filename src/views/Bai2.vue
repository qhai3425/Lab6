<template>
    <div class="container">
      <h3>Nhập tháng của bạn:</h3>
      <input type="number" v-model.number="month" placeholder="Nhập tháng từ 1 đến 12" />
      
      <!-- Thông báo nếu tháng không hợp lệ -->
      <p v-if="month < 1 || month > 12" style="color: red">Vui lòng nhập tháng từ 1 đến 12!</p>
      
      <!-- Các mùa tương ứng với tháng -->
      <p v-else-if="month >= 1 && month <= 3">Mùa Xuân</p>
      <p v-else-if="month >= 4 && month <= 6">Mùa Hè</p>
      <p v-else-if="month >= 7 && month <= 9">Mùa Thu</p>
      <p v-else>Mùa Đông</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Khai báo biến 'month' để lưu tháng
  const month = ref(1);
  </script>
  
  <style scoped>
  /* Định dạng cho khung và nội dung */
  .container {
    border: 1px solid #424e43;
    border-radius: 10px;
    padding: 20px;
    width: 250px;
    background-color: #f9f9f9;
    margin: 50px auto; 
  }
  
  h3 {
    font-size: 20px;
    margin-bottom: 20px;
    text-align: left;
  }
  
  input {
    padding: 8px;
    font-size: 16px;
    width: 90%;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  p {
    font-size: 16px;
    font-weight: bold;
    color: rgb(63, 142, 174);
    margin-top: 10px;
    text-align: left;
  }
  </style>
  