// Member page functionality
let currentMemberId = null;

// Get member ID from URL or localStorage
function getMemberId() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id') || localStorage.getItem('currentMemberId');
  return id;
}

// Load member data
async function loadMember(id) {
  try {
    const member = await api.getMember(id);
    currentMemberId = member._id;
    localStorage.setItem('currentMemberId', member._id);
    
    // Update header
    document.querySelector('.member-id-indicator strong').textContent = member._id.slice(-8);
    
    // Populate form
    populateMemberForm(member);
    
    return member;
  } catch (error) {
    console.error('Error loading member:', error);
    showNotification('Error loading member data', 'error');
  }
}

// Populate member form
function populateMemberForm(member) {
  // Status
  document.querySelector(`input[name="status"][value="${member.status}"]`).checked = true;
  
  // Member Identity
  if (member.recType) document.querySelector('input[name="recType"]').value = member.recType;
  if (member.recTypeDropdown) document.querySelector('select[name="recTypeDropdown"]').value = member.recTypeDropdown;
  if (member.newMemberDate) document.querySelector('input[name="newMemberDate"]').value = formatDate(member.newMemberDate);
  document.querySelector('input[name="senior"]').checked = member.senior || false;
  
  // Names
  if (member.firstName1) document.querySelector('input[name="firstName1"]').value = member.firstName1;
  if (member.midName1) document.querySelector('input[name="midName1"]').value = member.midName1;
  if (member.lastName1) document.querySelector('input[name="lastName1"]').value = member.lastName1;
  if (member.suffix1) document.querySelector('input[name="suffix1"]').value = member.suffix1;
  if (member.firstName2) document.querySelector('input[name="firstName2"]').value = member.firstName2;
  if (member.midName2) document.querySelector('input[name="midName2"]').value = member.midName2;
  if (member.lastName2) document.querySelector('input[name="lastName2"]').value = member.lastName2;
  if (member.suffix2) document.querySelector('input[name="suffix2"]').value = member.suffix2;
  
  // Contact Information
  if (member.streetNo) document.querySelector('input[name="streetNo"]').value = member.streetNo;
  if (member.streetName) document.querySelector('input[name="streetName"]').value = member.streetName;
  if (member.aptNo) document.querySelector('input[name="aptNo"]').value = member.aptNo;
  if (member.addressLine2) document.querySelector('input[name="addressLine2"]').value = member.addressLine2;
  if (member.city) document.querySelector('input[name="city"]').value = member.city;
  if (member.state) document.querySelector('input[name="state"]').value = member.state;
  if (member.zip) document.querySelector('input[name="zip"]').value = member.zip;
  if (member.plus4) document.querySelector('input[name="plus4"]').value = member.plus4;
  document.querySelector('input[name="ppau"]').checked = member.ppau || false;
  document.querySelector('input[name="starion"]').checked = member.starion || false;
  
  // Phones
  if (member.phone1) document.querySelector('input[name="phone1"]').value = member.phone1;
  if (member.phone1Type) document.querySelector('select[name="phone1Type"]').value = member.phone1Type;
  if (member.phone1Ext) document.querySelector('input[name="phone1Ext"]').value = member.phone1Ext;
  if (member.phone2) document.querySelector('input[name="phone2"]').value = member.phone2;
  if (member.phone2Type) document.querySelector('select[name="phone2Type"]').value = member.phone2Type;
  if (member.phone2Ext) document.querySelector('input[name="phone2Ext"]').value = member.phone2Ext;
  if (member.phone3) document.querySelector('input[name="phone3"]').value = member.phone3 || '';
  if (member.phone3Type) document.querySelector('select[name="phone3Type"]').value = member.phone3Type || '';
  if (member.phone3Ext) document.querySelector('input[name="phone3Ext"]').value = member.phone3Ext || '';
  
  // Email
  if (member.email) document.querySelector('input[name="email"]').value = member.email;
  document.querySelector('input[name="emailOptedOut"]').checked = member.emailOptedOut || false;
  if (member.callBackDate) document.querySelector('input[name="callBackDate"]').value = formatDate(member.callBackDate);
  
  // Oil Company
  if (member.oilCoCode) document.querySelector('select[name="oilCoCode"]').value = member.oilCoCode;
  if (member.oilId) document.querySelector('input[name="oilId"]').value = member.oilId;
  if (member.propaneStatus) document.querySelector(`input[name="propaneStatus"][value="${member.propaneStatus}"]`).checked = true;
  if (member.propaneStartDate) document.querySelector('input[name="propaneStartDate"]').value = formatDate(member.propaneStartDate);
  if (member.propCoCode) document.querySelector('select[name="propCoCode"]').value = member.propCoCode;
  if (member.propaneId) document.querySelector('input[name="propaneId"]').value = member.propaneId;
  if (member.howJoined) document.querySelector('select[name="howJoined"]').value = member.howJoined;
  if (member.referral) document.querySelector('select[name="referral"]').value = member.referral;
  
  // Delivery Programs
  if (member.deliveryPrograms && member.deliveryPrograms.length > 0) {
    const rows = document.querySelectorAll('table tbody tr');
    member.deliveryPrograms.forEach((program, index) => {
      if (rows[index]) {
        rows[index].querySelector('select[name^="program"]').value = program.program || 'FLOAT';
        rows[index].querySelector('input[name^="estimatedGallons"]').value = program.estimatedGallons || '';
        rows[index].querySelector('input[name^="rate"]').value = program.rate || '';
        rows[index].querySelector('select[name^="heatingYear"]').value = program.heatingYear || '';
      }
    });
  }
  
  // Notes / Flags
  if (member.company) document.querySelector('input[name="company"]').value = member.company;
  if (member.employer) document.querySelector('input[name="employer"]').value = member.employer;
  if (member.note) document.querySelector('textarea[name="note"]').value = member.note;
  if (member.electricStatus) document.querySelector(`input[name="electricStatus"][value="${member.electricStatus}"]`).checked = true;
  if (member.elecSignUpDate) document.querySelector('input[name="elecSignUpDate"]').value = formatDate(member.elecSignUpDate);
  if (member.elecStartDate) document.querySelector('input[name="elecStartDate"]').value = formatDate(member.elecStartDate);
  if (member.nameKey) document.querySelector('input[name="nameKey"]').value = member.nameKey;
  if (member.droppedDate) document.querySelector('input[name="droppedDate"]').value = formatDate(member.droppedDate);
  if (member.referredById) document.querySelector('input[name="referredById"]').value = member.referredById;
  if (member.dateReferred) document.querySelector('input[name="dateReferred"]').value = formatDate(member.dateReferred);
  if (member.electricityAccountNumber) document.querySelector('input[name="electricityAccountNumber"]').value = member.electricityAccountNumber;
  if (member.theNextStep) document.querySelector('input[name="theNextStep"]').value = member.theNextStep;
  document.querySelector('input[name="notPaidCurrentYr"]').checked = member.notPaidCurrentYr || false;
  document.querySelector('input[name="delinquent"]').checked = member.delinquent || false;
  document.querySelector('input[name="nrd01"]').checked = member.nrd01 || false;
  document.querySelector('input[name="nrdProp"]').checked = member.nrdProp || false;
}

// Save member data
async function saveMember() {
  if (!currentMemberId) {
    showNotification('No member selected', 'error');
    return;
  }
  
  try {
    const form = document.querySelector('main');
    const data = {
      status: document.querySelector('input[name="status"]:checked')?.value,
      recType: document.querySelector('input[name="recType"]')?.value,
      recTypeDropdown: document.querySelector('select[name="recTypeDropdown"]')?.value,
      newMemberDate: document.querySelector('input[name="newMemberDate"]')?.value || null,
      senior: document.querySelector('input[name="senior"]').checked,
      firstName1: document.querySelector('input[name="firstName1"]')?.value,
      midName1: document.querySelector('input[name="midName1"]')?.value,
      lastName1: document.querySelector('input[name="lastName1"]')?.value,
      suffix1: document.querySelector('input[name="suffix1"]')?.value,
      firstName2: document.querySelector('input[name="firstName2"]')?.value,
      midName2: document.querySelector('input[name="midName2"]')?.value,
      lastName2: document.querySelector('input[name="lastName2"]')?.value,
      suffix2: document.querySelector('input[name="suffix2"]')?.value,
      streetNo: document.querySelector('input[name="streetNo"]')?.value,
      streetName: document.querySelector('input[name="streetName"]')?.value,
      aptNo: document.querySelector('input[name="aptNo"]')?.value,
      addressLine2: document.querySelector('input[name="addressLine2"]')?.value,
      city: document.querySelector('input[name="city"]')?.value,
      state: document.querySelector('input[name="state"]')?.value,
      zip: document.querySelector('input[name="zip"]')?.value,
      plus4: document.querySelector('input[name="plus4"]')?.value,
      ppau: document.querySelector('input[name="ppau"]').checked,
      starion: document.querySelector('input[name="starion"]').checked,
      phone1: document.querySelector('input[name="phone1"]')?.value,
      phone1Type: document.querySelector('select[name="phone1Type"]')?.value,
      phone1Ext: document.querySelector('input[name="phone1Ext"]')?.value,
      phone2: document.querySelector('input[name="phone2"]')?.value,
      phone2Type: document.querySelector('select[name="phone2Type"]')?.value,
      phone2Ext: document.querySelector('input[name="phone2Ext"]')?.value,
      phone3: document.querySelector('input[name="phone3"]')?.value,
      phone3Type: document.querySelector('select[name="phone3Type"]')?.value,
      phone3Ext: document.querySelector('input[name="phone3Ext"]')?.value,
      email: document.querySelector('input[name="email"]')?.value,
      emailOptedOut: document.querySelector('input[name="emailOptedOut"]').checked,
      callBackDate: document.querySelector('input[name="callBackDate"]')?.value || null,
      oilCoCode: document.querySelector('select[name="oilCoCode"]')?.value,
      oilId: document.querySelector('input[name="oilId"]')?.value,
      propaneStatus: document.querySelector('input[name="propaneStatus"]:checked')?.value,
      propaneStartDate: document.querySelector('input[name="propaneStartDate"]')?.value || null,
      propCoCode: document.querySelector('select[name="propCoCode"]')?.value,
      propaneId: document.querySelector('input[name="propaneId"]')?.value,
      howJoined: document.querySelector('select[name="howJoined"]')?.value,
      referral: document.querySelector('select[name="referral"]')?.value,
      company: document.querySelector('input[name="company"]')?.value,
      employer: document.querySelector('input[name="employer"]')?.value,
      note: document.querySelector('textarea[name="note"]')?.value,
      electricStatus: document.querySelector('input[name="electricStatus"]:checked')?.value,
      elecSignUpDate: document.querySelector('input[name="elecSignUpDate"]')?.value || null,
      elecStartDate: document.querySelector('input[name="elecStartDate"]')?.value || null,
      nameKey: document.querySelector('input[name="nameKey"]')?.value,
      droppedDate: document.querySelector('input[name="droppedDate"]')?.value || null,
      referredById: document.querySelector('input[name="referredById"]')?.value,
      dateReferred: document.querySelector('input[name="dateReferred"]')?.value || null,
      electricityAccountNumber: document.querySelector('input[name="electricityAccountNumber"]')?.value,
      theNextStep: document.querySelector('input[name="theNextStep"]')?.value,
      notPaidCurrentYr: document.querySelector('input[name="notPaidCurrentYr"]').checked,
      delinquent: document.querySelector('input[name="delinquent"]').checked,
      nrd01: document.querySelector('input[name="nrd01"]').checked,
      nrdProp: document.querySelector('input[name="nrdProp"]').checked,
    };
    
    // Get delivery programs
    const programs = [];
    document.querySelectorAll('table tbody tr').forEach(row => {
      const program = row.querySelector('select[name^="program"]')?.value;
      const gallons = row.querySelector('input[name^="estimatedGallons"]')?.value;
      const rate = row.querySelector('input[name^="rate"]')?.value;
      const year = row.querySelector('select[name^="heatingYear"]')?.value;
      if (program || gallons || rate || year) {
        programs.push({ program, estimatedGallons: gallons, rate, heatingYear: year });
      }
    });
    data.deliveryPrograms = programs;
    
    await api.updateMember(currentMemberId, data);
    showNotification('Member saved successfully!');
  } catch (error) {
    console.error('Error saving member:', error);
    showNotification('Error saving member', 'error');
  }
}

// Delete member
async function deleteMember() {
  if (!currentMemberId) return;
  
  if (!confirm('Are you sure you want to delete this member?')) return;
  
  try {
    await api.deleteMember(currentMemberId);
    showNotification('Member deleted successfully');
    window.location.href = 'index.html';
  } catch (error) {
    console.error('Error deleting member:', error);
    showNotification('Error deleting member', 'error');
  }
}

// Initialize page
document.addEventListener('DOMContentLoaded', async () => {
  const memberId = getMemberId();
  if (memberId) {
    await loadMember(memberId);
  } else {
    // Load first member if available
    const members = await api.getMembers();
    if (members.length > 0) {
      await loadMember(members[0]._id);
    }
  }
  
  // Add save button handler
  const saveBtn = document.createElement('button');
  saveBtn.className = 'btn btn-primary';
  saveBtn.textContent = 'SAVE MEMBER';
  saveBtn.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 1000;';
  saveBtn.onclick = saveMember;
  document.body.appendChild(saveBtn);
  
  // Add delete handler
  document.querySelector('.btn-danger')?.addEventListener('click', deleteMember);
  
  // Update sidebar links with member ID
  if (currentMemberId) {
    const memberLink = document.querySelector('a[href="member.html"]');
    const paymentLink = document.querySelector('a[href="payment-history.html"]');
    if (memberLink) memberLink.href = `member.html?id=${currentMemberId}`;
    if (paymentLink) paymentLink.href = `payment-history.html?id=${currentMemberId}`;
  }
  
  // Auto-save on input change (debounced)
  let saveTimeout;
  document.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('change', () => {
      clearTimeout(saveTimeout);
      saveTimeout = setTimeout(saveMember, 2000);
    });
  });
});
