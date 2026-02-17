// Index page functionality
let membersList = [];

// Search members
async function searchMembers(query) {
  try {
    const members = await api.getMembers(query);
    membersList = members;
    displayMembers(members);
  } catch (error) {
    console.error('Error searching members:', error);
    showNotification('Error searching members', 'error');
  }
}

// Display members list
function displayMembers(members) {
  const resultsDiv = document.getElementById('members-results');
  if (!resultsDiv) return;
  
  if (members.length === 0) {
    resultsDiv.innerHTML = '<p>No members found</p>';
    return;
  }
  
  resultsDiv.innerHTML = members.map(member => `
    <div class="member-card" onclick="selectMember('${member._id}')" style="
      padding: 16px;
      border: 1px solid #d1d5db;
      border-radius: 6px;
      margin-bottom: 12px;
      cursor: pointer;
      background: white;
      transition: background 0.2s;
    " onmouseover="this.style.background='#f9fafb'" onmouseout="this.style.background='white'">
      <strong>${member.firstName1 || ''} ${member.lastName1 || ''}</strong>
      ${member.firstName2 && member.lastName2 ? ` / ${member.firstName2} ${member.lastName2}` : ''}<br>
      <small style="color: #6b7280;">
        ${member.streetNo || ''} ${member.streetName || ''}, ${member.city || ''}, ${member.state || ''} ${member.zip || ''}<br>
        ${member.phone1 || ''} | ${member.email || ''}<br>
        Status: ${member.status || 'N/A'} | Member ID: ${member._id.slice(-8)}
      </small>
    </div>
  `).join('');
  
  // Update sidebar links with first member if available
  if (members.length > 0) {
    updateSidebarLinks(members[0]._id);
  }
}

// Select member
function selectMember(memberId) {
  localStorage.setItem('currentMemberId', memberId);
  window.location.href = `member.html?id=${memberId}`;
}

// Update sidebar links when member is selected
function updateSidebarLinks(memberId) {
  if (memberId) {
    const memberLink = document.getElementById('member-link');
    const paymentLink = document.getElementById('payment-link');
    if (memberLink) memberLink.href = `member.html?id=${memberId}`;
    if (paymentLink) paymentLink.href = `payment-history.html?id=${memberId}`;
  }
}

// Initialize page
document.addEventListener('DOMContentLoaded', async () => {
  // Load all members on page load
  await searchMembers('');
  
  // Search functionality
  const searchInput = document.querySelector('.search-box');
  if (searchInput) {
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        searchMembers(e.target.value);
      }, 300);
    });
  }
  
  // Create members results container if it doesn't exist
  const mainContent = document.querySelector('.main-content');
  if (mainContent && !document.getElementById('members-results')) {
    const resultsDiv = document.createElement('div');
    resultsDiv.id = 'members-results';
    resultsDiv.style.marginTop = '24px';
    mainContent.appendChild(resultsDiv);
  }
  
  // Add new member button handler
  const addMemberBtn = document.querySelector('.btn-primary');
  if (addMemberBtn && addMemberBtn.textContent.includes('ADD NEW MEMBER')) {
    addMemberBtn.addEventListener('click', () => {
      // Create new member
      const newMember = {
        status: 'PROSPECTIVE',
        firstName1: '',
        lastName1: '',
      };
      
      api.createMember(newMember).then(member => {
        localStorage.setItem('currentMemberId', member._id);
        updateSidebarLinks(member._id);
        window.location.href = `member.html?id=${member._id}`;
      }).catch(error => {
        console.error('Error creating member:', error);
        showNotification('Error creating member', 'error');
      });
    });
  }
});
