import { mockStudents } from "./data.js";

let currentPage = 1;
const itemsPerPage = 5;
let searchKeyword = "";
let editingIndex = -1;

function calculateAverage(math, english, literature) {
    return ((math + english + literature) / 3).toFixed(2);
}

function renderTable() {
    const stored = localStorage.getItem("students");
    let students = stored && stored.length > 0 ? JSON.parse(stored) : [...mockStudents];

    if (!stored || stored.length === 0) {
        localStorage.setItem("students", JSON.stringify(students));
    }

    // Tìm kiếm
    if (searchKeyword) {
        students = students.filter(s =>
            s.name.toLowerCase().includes(searchKeyword.toLowerCase())
        );
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedStudents = students.slice(startIndex, startIndex + itemsPerPage);

    const table = document.getElementById("student-table");
    table.innerHTML = "";

    paginatedStudents.forEach((s, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${startIndex + index + 1}</td>
            <td>${s.name}</td>
            <td>${s.gender}</td>
            <td>${s.math}</td>
            <td>${s.english}</td>
            <td>${s.literature}</td>
            <td>${calculateAverage(s.math, s.english, s.literature)}</td>
            <td>
                <button class="btn btn-success btn-sm me-1" onclick="editStudent(${startIndex + index})">Update</button>
                <button class="btn btn-danger btn-sm" onclick="deleteStudent(${startIndex + index})">Delete</button>
            </td>
        `;
        table.appendChild(row);
    });

    renderPagination(students.length);
}

function renderPagination(totalItems) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pagination = document.querySelector(".pagination");
    pagination.innerHTML = "";

    const prev = document.createElement("li");
    prev.className = `page-item ${currentPage === 1 ? "disabled" : ""}`;
    prev.innerHTML = `<a class="page-link" href="#">Previous</a>`;
    prev.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            renderTable();
        }
    };
    pagination.appendChild(prev);

    for (let i = 1; i <= totalPages; i++) {
        const page = document.createElement("li");
        page.className = `page-item ${i === currentPage ? "active" : ""}`;
        page.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        page.onclick = () => {
            currentPage = i;
            renderTable();
        };
        pagination.appendChild(page);
    }

    const next = document.createElement("li");
    next.className = `page-item ${currentPage === totalPages ? "disabled" : ""}`;
    next.innerHTML = `<a class="page-link" href="#">Next</a>`;
    next.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderTable();
        }
    };
    pagination.appendChild(next);
}

function createStudent() {
    const name = document.querySelector('input[placeholder="Enter your name"]').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const math = parseFloat(document.querySelector('input[placeholder="Enter your math score"]').value);
    const english = parseFloat(document.querySelector('input[placeholder="Enter your english score"]').value);
    const literature = parseFloat(document.querySelector('input[placeholder="Enter your literature score"]').value);

    if (!name || !gender || isNaN(math) || isNaN(english) || isNaN(literature)) {
        alert("Vui lòng nhập đầy đủ và hợp lệ!");
        return;
    }
    
    if (
      math < 0 || math > 10 ||
      english < 0 || english > 10 ||
      literature < 0 || literature > 10
    ) {
        alert("Điểm số phải nằm trong khoảng từ 0 đến 10.");
        return;
    }
    

    const students = JSON.parse(localStorage.getItem("students")) || [];

    if (editingIndex !== -1) {
        students[editingIndex] = { name, gender, math, english, literature };
        editingIndex = -1;
        document.querySelector('button[type="submit"]').textContent = "Create student";
    } else {
        students.push({ name, gender, math, english, literature });
    }

    localStorage.setItem("students", JSON.stringify(students));
    document.getElementById("student-form").reset();
    renderTable();
}

function editStudent(index) {
    const students = JSON.parse(localStorage.getItem("students"));
    const s = students[index];
    editingIndex = index;

    document.querySelector('input[placeholder="Enter your name"]').value = s.name;
    document.querySelector(`input[name="gender"][value="${s.gender}"]`).checked = true;
    document.querySelector('input[placeholder="Enter your math score"]').value = s.math;
    document.querySelector('input[placeholder="Enter your english score"]').value = s.english;
    document.querySelector('input[placeholder="Enter your literature score"]').value = s.literature;

    document.querySelector('button[type="submit"]').textContent = "Update student";
}

function deleteStudent(index) {
    const students = JSON.parse(localStorage.getItem("students"));
    if (confirm("Bạn chắc chắn muốn xoá?")) {
        students.splice(index, 1);
        localStorage.setItem("students", JSON.stringify(students));
        renderTable();
    }
}

// Tìm kiếm
document.querySelector('.mb-3.d-flex button').addEventListener('click', () => {
    const keyword = document.querySelector('.mb-3.d-flex input').value.trim();
    searchKeyword = keyword;
    currentPage = 1;
    renderTable();
});

// Xử lý tạo / cập nhật khi submit
document.querySelector('button[type="submit"]').addEventListener('click', function (event) {
    event.preventDefault();
    createStudent();
});

// Load bảng khi DOM đã sẵn sàng
document.addEventListener("DOMContentLoaded", renderTable);

// Cho phép gọi hàm toàn cục từ HTML onclick
window.editStudent = editStudent;
window.deleteStudent = deleteStudent;
