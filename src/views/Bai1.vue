<template>
    <div class="bai1-container">
      <h1>Bài 1: Xếp loại điểm</h1>
      <!-- Ô nhập điểm -->
      <label for="diem">Nhập điểm của bạn:</label>
      <input
        type="number"
        id="diem"
        v-model.number="diem"
        placeholder="Nhập điểm từ 0 đến 10"
      />
      
      <!-- Hiển thị xếp loại ngay -->
      <p>
        Kết quả: 
        <span v-if="diem === null || diem === ''">Chưa nhập</span>
        <span v-else-if="diem < 5">Yếu</span>
        <span v-else-if="diem >= 5 && diem < 6.5">Trung bình</span>
        <span v-else-if="diem >= 6.5 && diem < 8">Khá</span>
        <span v-else-if="diem >= 8 && diem < 9">Giỏi</span>
        <span v-else-if="diem >= 9">Xuất sắc</span>
        <span v-else>Điểm không hợp lệ</span>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: "Bai1",
    data() {
      return {
        diem: null // Lưu điểm người dùng nhập
      };
    }
  };
  </script>
  
  <style scoped>
/* Định dạng chung cho toàn bài */
.bai1-container {
  border: 1px solid black;
  border-radius: 10px;       
  padding: 20px;
  width: 280px;           
  background-color: #f9f9f9;

  /* Căn giữa toàn bộ khung */
  position: absolute;
  top: 10%; 
  left: 30%;
}

.bai1-container h1 {
  font-size: 20px; 
  margin-bottom: 20px;
  color: #333;
  text-align: left; 
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
  color: #555;
  text-align: left;
}

input {
  padding: 8px;
  font-size: 16px;
  margin-bottom: 15px;
  border: 1px solid #ccc; 
  border-radius: 5px;   
}

p {
  font-size: 16px;
  font-weight: bold;
  color: rgb(63, 142, 174);
  margin-top: 10px;
  text-align: left;
}
</style>
