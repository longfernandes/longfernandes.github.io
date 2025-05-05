// script.js (entry point)
import { users as initialUsers } from './users.js';
import { posts as initialPosts } from './posts.js';

let users = JSON.parse(localStorage.getItem('users')) || [...initialUsers];
let posts = JSON.parse(localStorage.getItem('posts')) || [...initialPosts];
let currentUser = null;
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// DOM Elements
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const userList = document.getElementById('userList');
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');
const searchUserBtn = document.getElementById('searchUserBtn');
const postList = document.getElementById('postList');

// ========== User Functions ==========
loginBtn.addEventListener('click', () => {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();
  if (!email || !password) return alert('Hãy nhập đầy đủ thông tin');

  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    currentUser = user;
    alert(`Xin chào ${user.first_name} ${user.last_name}`);
  } else {
    alert('Thông tin tài khoản không chính xác');
  }
    document.getElementById('authSection').classList.add('d-none');
    document.getElementById('mainApp').classList.remove('d-none');

});

registerBtn.addEventListener('click', () => {
  const first = document.getElementById('regFirstName').value.trim();
  const last = document.getElementById('regLastName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const pass = document.getElementById('regPassword').value.trim();
  if (!first || !last || !email || !pass) return alert('Hãy nhập đầy đủ thông tin');

  const exists = users.find(u => u.email === email);
  if (exists) return alert('Email này đã có tài khoản');

  const newUser = {
    id: users.length + 1,
    first_name: first,
    last_name: last,
    email,
    password: pass
  };
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  alert('Đăng ký thành công!');
});

searchUserBtn.addEventListener('click', () => {
  const keyword = document.getElementById('userSearch').value.trim().toLowerCase();
  let results = users;
  if (keyword) {
    results = users.filter(u =>
      u.first_name.toLowerCase().includes(keyword) ||
      u.last_name.toLowerCase().includes(keyword) ||
      u.email.toLowerCase().includes(keyword)
    );
  }
  userList.innerHTML = results.map(u => `<li class="list-group-item" data-userid="${u.id}">${u.id}. ${u.first_name} ${u.last_name} (${u.email})</li>`).join('');
});

userList.addEventListener('click', (e) => {
  const li = e.target.closest('li[data-userid]');
  if (!li) return;
  const userId = parseInt(li.getAttribute('data-userid'));
  const userPosts = posts.filter(p => p.user_id === userId);
  postList.innerHTML = `<h5>Bài viết của user ID ${userId}</h5>` +
    userPosts.map(p => `
      <div class="card mb-2">
        <div class="card-body">
          <h6 class="card-title">${p.title}</h6>
          <p class="card-text">${p.body}</p>
        </div>
      </div>
    `).join('');
});

// ========== Todo Functions ==========
function renderTodos(filter = 'all') {
  let list = todos;
  if (filter === 'active') list = todos.filter(t => !t.completed);
  else if (filter === 'completed') list = todos.filter(t => t.completed);

  todoList.innerHTML = list.map((todo, idx) => `
    <li class="list-group-item d-flex align-items-center">
      <input type="checkbox" class="form-check-input me-2" ${todo.completed ? 'checked' : ''} onchange="toggleTodo(${idx})">
      <span class="flex-grow-1 ${todo.completed ? 'text-decoration-line-through text-muted' : ''}">${todo.text}</span>
      <button class="btn btn-sm btn-danger" onclick="deleteTodo(${idx})">X</button>
    </li>
  `).join('');
}

// Thêm bài viết mới cho user hiện tại
document.getElementById('addPostBtn').addEventListener('click', () => {
    if (!currentUser) return alert('Bạn phải đăng nhập trước');
  
    const title = document.getElementById('postTitle').value.trim();
    const body = document.getElementById('postBody').value.trim();
    if (!title || !body) return alert('Vui lòng nhập tiêu đề và nội dung');
  
    const newPost = {
      id: posts.length + 1,
      user_id: currentUser.id,
      title,
      body
    };
  
    posts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));
  
    alert('Thêm bài viết thành công!');
    document.getElementById('postTitle').value = '';
    document.getElementById('postBody').value = '';
  
    // Hiển thị lại danh sách bài viết của user hiện tại (nếu có)
    const userPosts = posts.filter(p => p.user_id === currentUser.id);
    postList.innerHTML = `<h5>Bài viết của bạn</h5>` +
      userPosts.map(p => `
        <div class="card mb-2">
          <div class="card-body">
            <h6 class="card-title">${p.title}</h6>
            <p class="card-text">${p.body}</p>
          </div>
        </div>
      `).join('');
  });
  
window.toggleTodo = function(index) {
  todos[index].completed = !todos[index].completed;
  saveTodos();
  renderTodos(currentFilter);
}

window.deleteTodo = function(index) {
  todos.splice(index, 1);
  saveTodos();
  renderTodos(currentFilter);
}

addTodoBtn.addEventListener('click', () => {
  const text = todoInput.value.trim();
  if (!text) return;
  todos.push({ text, completed: false });
  todoInput.value = '';
  saveTodos();
  renderTodos(currentFilter);
});

clearCompletedBtn.addEventListener('click', () => {
  todos = todos.filter(t => !t.completed);
  saveTodos();
  renderTodos(currentFilter);
});

let currentFilter = 'all';
document.querySelectorAll('[data-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    currentFilter = btn.getAttribute('data-filter');
    renderTodos(currentFilter);
  });
});

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// Lưu users/posts nếu chưa có trong localStorage
localStorage.setItem('users', JSON.stringify(users));
localStorage.setItem('posts', JSON.stringify(posts));


// Initial Render
renderTodos();
