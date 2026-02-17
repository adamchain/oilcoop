// API Client
const API_BASE = 'http://localhost:3000/api';

const api = {
  // Members
  async getMembers(search = '') {
    const url = search ? `${API_BASE}/members?search=${encodeURIComponent(search)}` : `${API_BASE}/members`;
    const response = await fetch(url);
    return response.json();
  },
  
  async getMember(id) {
    const response = await fetch(`${API_BASE}/members/${id}`);
    return response.json();
  },
  
  async createMember(data) {
    const response = await fetch(`${API_BASE}/members`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  
  async updateMember(id, data) {
    const response = await fetch(`${API_BASE}/members/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },
  
  async deleteMember(id) {
    const response = await fetch(`${API_BASE}/members/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  },
  
  // Payments
  async getPaymentByMember(memberId) {
    const response = await fetch(`${API_BASE}/payments/member/${memberId}`);
    return response.json();
  },
  
  async updatePaymentByMember(memberId, data) {
    const response = await fetch(`${API_BASE}/payments/member/${memberId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};

// Utility functions
function formatDate(dateString) {
  if (!dateString) return '';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return '';
  return date.toISOString().split('T')[0];
}

function getFormData(form) {
  const formData = new FormData(form);
  const data = {};
  
  for (const [key, value] of formData.entries()) {
    if (data[key]) {
      if (Array.isArray(data[key])) {
        data[key].push(value);
      } else {
        data[key] = [data[key], value];
      }
    } else {
      data[key] = value;
    }
  }
  
  // Handle checkboxes and radio buttons
  form.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    data[cb.name] = cb.checked;
  });
  
  form.querySelectorAll('input[type="radio"]:checked').forEach(radio => {
    data[radio.name] = radio.value;
  });
  
  return data;
}

function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 12px 24px;
    background: ${type === 'success' ? '#059669' : '#dc2626'};
    color: white;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    z-index: 10000;
  `;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}
