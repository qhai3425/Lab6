<template>
    <div class="container mt-5">
      <h1 class="text-center">Quản lý học sinh</h1> <br>
      <!-- Form thêm hoặc sửa học sinh -->
      <form @submit.prevent="submitForm" class="col-mb-4">
        <h4>Thêm học sinh</h4>
        <div class="mb-3 mt-3">
          <label for="name">Họ tên</label>
          <input
            v-model="student.name"
            type="text"
            id="name"
            class="form-control"
            placeholder="Nhập họ tên"
            required
          />
        </div>
        <div class="mb-3">
          <label for="score">Điểm</label>
          <input
            v-model="student.score"
            type="number"
            id="score"
            class="form-control"
            placeholder="Nhập điểm"
            required
            min="0"
            max="10"
          />
        </div>
        <div class="mb-3">
          <label for="dob">Ngày sinh</label>
          <input
            v-model="student.dob"
            type="date"
            id="dob"
            class="form-control"
            required
          />
        </div>
        <button type="submit" class="btn btn-success">
          {{ isEditing ? "Cập nhật" : "Thêm" }}
        </button>
        <button
          type="button"
          class="btn btn-secondary ms-2"
          v-if="isEditing"
          @click="cancelEdit"
        >
          Hủy
        </button>
      </form>
  
      <!-- Danh sách học sinh -->
      <h2>Danh sách học sinh</h2>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Họ tên</th>
            <th>Điểm</th>
            <th>Ngày sinh</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in students" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.score }}</td>
            <td>{{ formatDate(item.dob) }}</td>
            <td>
              <button class="btn btn-warning" @click="editStudent(index)">
                Sửa
              </button>
              <button class="btn btn-danger" @click="deleteStudent(index)">
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from "vue";
  
  // Dữ liệu chính
  const students = reactive([]); // Danh sách học sinh
  
  // Biến kiểm soát form và trạng thái sửa
  const student = reactive({ name: "", score: "", dob: "" });
  const isEditing = ref(false);
  const editIndex = ref(null);
  
  // Xử lý form khi submit
  const submitForm = () => {
    if (isEditing.value) {
      // Nếu đang chỉnh sửa
      students[editIndex.value] = { ...student };
      cancelEdit();
    } else {
      // Nếu thêm mới
      students.push({ ...student });
      resetForm();
    }
  };
  
  // Hủy chỉnh sửa
  const cancelEdit = () => {
    resetForm();
    isEditing.value = false;
    editIndex.value = null;
  };
  
  // Xóa học sinh
  const deleteStudent = (index) => {
    students.splice(index, 1);
  };
  
  // Sửa học sinh
  const editStudent = (index) => {
    isEditing.value = true;
    editIndex.value = index;
    Object.assign(student, students[index]);
  };
  
  // Đặt lại form
  const resetForm = () => {
    student.name = "";
    student.score = "";
    student.dob = "";
  };
  
  // Định dạng ngày hiển thị
  const formatDate = (date) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(date).toLocaleDateString("vi-VN", options);
  };
  </script>
  
<style scoped>
  /* Kiểu dáng chung cho form và bảng */
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  /* Form */
  form {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
  }
  
  /* Input fields */
  input[type="text"],
  input[type="number"],
  input[type="date"] {
    width: 100%;
    padding: 5px;
    margin-top: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }
  
  input[type="text"]:focus,
  input[type="number"]:focus,
  input[type="date"]:focus {
    outline: none;
  }
  
  /* Bảng danh sách học sinh */
  .table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
  }
  
  .table th, .table td {
    padding: 10px;
    text-align: left;
    border: 1px solid #ddd;
  }

</style>
  