<template>
    <div class="container mt-5">
      <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>
      <div class="row">
        <div class="col-sm-4 mb-4" v-for="(item, index) in items" :key="index">
          <div class="card">
            <img :src="item.image" class="card-img-top" alt="Hình ảnh" />
            <div class="card-body">
              <h3 class="card-title">{{ item.title }}</h3>
              <p class="card-text">{{ item.content }}</p>
              <button class="btn btn-info">Xem chi tiết</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Bai3",
    data() {
      return {
        items: [
          {
            image: "../images/img1.jpg",
            title: "8 loại rau củ quả giàu canxi",
            content: "Canxi là khoáng chất cần thiết đối với cơ thể người..."
          },
          {
            image: "../images/img2.jpg",
            title: "Các loại gia vị tốt cho sức khỏe",
            content: "Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa..."
          },
          {
            image: "../images/img3.jpg",
            title: "9 loại đậu bổ dưỡng nên dùng nhiều",
            content: "Đậu lăng, đậu nành, đậu phộng giàu chất xơ và protein..."
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  h1 {
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    color: #2c3e50;
  }
  
  .row {
    display: flex;
    gap: 20px; /* Khoảng cách giữa các card */
  }
  
  .card {
    width: 100%;
    border: 1px solid #ddd; /* Viền nhạt */
    border-radius: 8px; /* Bo góc nhẹ */
    background-color: #fff;
  }
  
  
  .card-img-top {
    width: 100%;
    height: 200px; /* Chiều cao cố định */
    object-fit: cover; /* Đảm bảo hình ảnh luôn vừa khung */
  }
  
  .card-body {
    padding: 15px;
  }
  
  .card-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  
  .card-text {
    font-size: 14px;
    color: #555;
  }
  
  .btn {
    background-color: #17a2b8; /* Màu xanh nhạt */
    color: white;
    text-align: center;
    border: none;
    padding: 8px 15px;
    border-radius: 5px;
    font-size: 14px;
  }
  
  </style>
  