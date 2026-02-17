// Payment history page functionality
let currentMemberId = null;
let currentPaymentId = null;

// Get member ID from URL or localStorage
function getMemberId() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id') || localStorage.getItem('currentMemberId');
  return id;
}

// Load payment data
async function loadPayment(memberId) {
  try {
    const payment = await api.getPaymentByMember(memberId);
    currentMemberId = memberId;
    currentPaymentId = payment._id;
    
    // Update member header
    if (payment.memberId) {
      const member = payment.memberId;
      document.querySelector('.member-header-item .value').textContent = member._id.slice(-8);
      document.querySelectorAll('.member-header-item .value')[1].textContent = formatDate(member.newMemberDate) || '';
      document.querySelectorAll('.member-header-item .value')[2].textContent = member.firstName1 || '';
      document.querySelectorAll('.member-header-item .value')[3].textContent = member.lastName1 || '';
      document.querySelectorAll('.member-header-item .value')[4].textContent = `${member.streetNo || ''} ${member.streetName || ''}`.trim();
      document.querySelectorAll('.member-header-item .value')[5].textContent = `${member.city || ''}, ${member.state || ''} ${member.zip || ''}`.trim();
      document.querySelectorAll('.member-header-item .value')[6].textContent = member.phone1 || '';
      document.querySelectorAll('.member-header-item .value')[7].textContent = member.phone1Type || '';
      document.querySelectorAll('.member-header-item .value')[8].textContent = member.phone2 || '';
      document.querySelectorAll('.member-header-item .value')[9].textContent = member.phone2Type || '';
      document.querySelectorAll('.member-header-item .value')[10].textContent = member.email || '';
      document.querySelectorAll('.member-header-item .value')[11].textContent = member.oilCoCode || '';
      document.querySelectorAll('.member-header-item .value')[12].textContent = member.oilId || '';
      document.querySelectorAll('.member-header-item .value')[13].textContent = payment.propaneId || '';
    }
    
    // Populate form
    populatePaymentForm(payment);
    
    return payment;
  } catch (error) {
    console.error('Error loading payment:', error);
    showNotification('Error loading payment data', 'error');
  }
}

// Populate payment form
function populatePaymentForm(payment) {
  // Status
  if (payment.status) document.querySelector(`input[name="pay-status"][value="${payment.status}"]`).checked = true;
  if (payment.propaneStatus) document.querySelector(`input[name="pay-propane-status"][value="${payment.propaneStatus}"]`).checked = true;
  
  // Flags
  document.querySelector('input[name="waiveFeeForYear"]').checked = payment.waiveFeeForYear || false;
  document.querySelector('input[name="pay-senior"]').checked = payment.senior || false;
  document.querySelector('input[name="lifetimeMember"]').checked = payment.lifetimeMember || false;
  document.querySelector('input[name="pay-delinquent"]').checked = payment.delinquent || false;
  document.querySelector('input[name="noRecentDels"]').checked = payment.noRecentDels || false;
  
  // Registration Fee
  if (payment.registrationFee) document.querySelector('input[name="registrationFee"]').value = payment.registrationFee;
  if (payment.dtPaid) document.querySelector('input[name="dtPaid"]').value = formatDate(payment.dtPaid);
  if (payment.checkCredit) document.querySelector('input[name="checkCredit"]').value = payment.checkCredit;
  document.querySelector('input[name="registrationPaid"]').checked = payment.registrationPaid || false;
  document.querySelector('input[name="registrationWaived"]').checked = payment.registrationWaived || false;
  document.querySelector('input[name="notPaidCurrentYr"]').checked = payment.notPaidCurrentYr || false;
  if (payment.paymentNotes) document.querySelector('input[name="paymentNotes"]').value = payment.paymentNotes;
  if (payment.lifetimeFriend) document.querySelector('input[name="lifetimeFriend"]').value = payment.lifetimeFriend;
  
  // Credit Card
  if (payment.creditCardType) document.querySelector('input[name="creditCardType"]').value = payment.creditCardType;
  if (payment.creditCardNumber) document.querySelector('input[name="creditCardNumber"]').value = payment.creditCardNumber;
  if (payment.creditCardExpiration) document.querySelector('input[name="creditCardExpiration"]').value = payment.creditCardExpiration;
  if (payment.nameOnCreditCard) document.querySelector('input[name="nameOnCreditCard"]').value = payment.nameOnCreditCard;
  
  // Delivery History
  document.querySelector('input[name="deliveryHistory"]').checked = payment.deliveryHistory !== false;
  
  // Renewal Fees
  if (payment.renewalFees && payment.renewalFees.length > 0) {
    const rows = document.querySelectorAll('table tbody tr');
    payment.renewalFees.forEach((fee, index) => {
      if (rows[index]) {
        rows[index].querySelector('input[name^="billingYear"]').value = fee.billingYear || '';
        rows[index].querySelector('select[name^="feeWaived"]').value = fee.feeWaived || 'Yes';
        rows[index].querySelector('input[name^="dateReceived"]').value = formatDate(fee.dateReceived) || '';
        rows[index].querySelector('input[name^="amountReceived"]').value = fee.amountReceived || '';
        rows[index].querySelector('input[name^="paymentMethod"]').value = fee.paymentMethod || '';
        rows[index].querySelector('select[name^="newRenew"]').value = fee.newRenew || 'Renew';
        rows[index].querySelector('input[name^="checkNumber"]').value = fee.checkNumber || '';
      }
    });
  }
}

// Save payment data
async function savePayment() {
  if (!currentMemberId) {
    showNotification('No member selected', 'error');
    return;
  }
  
  try {
    const data = {
      status: document.querySelector('input[name="pay-status"]:checked')?.value,
      propaneStatus: document.querySelector('input[name="pay-propane-status"]:checked')?.value,
      waiveFeeForYear: document.querySelector('input[name="waiveFeeForYear"]').checked,
      senior: document.querySelector('input[name="pay-senior"]').checked,
      lifetimeMember: document.querySelector('input[name="lifetimeMember"]').checked,
      delinquent: document.querySelector('input[name="pay-delinquent"]').checked,
      noRecentDels: document.querySelector('input[name="noRecentDels"]').checked,
      registrationFee: document.querySelector('input[name="registrationFee"]')?.value,
      dtPaid: document.querySelector('input[name="dtPaid"]')?.value || null,
      checkCredit: document.querySelector('input[name="checkCredit"]')?.value,
      registrationPaid: document.querySelector('input[name="registrationPaid"]').checked,
      registrationWaived: document.querySelector('input[name="registrationWaived"]').checked,
      notPaidCurrentYr: document.querySelector('input[name="notPaidCurrentYr"]').checked,
      paymentNotes: document.querySelector('input[name="paymentNotes"]')?.value,
      lifetimeFriend: document.querySelector('input[name="lifetimeFriend"]')?.value,
      creditCardType: document.querySelector('input[name="creditCardType"]')?.value,
      creditCardNumber: document.querySelector('input[name="creditCardNumber"]')?.value,
      creditCardExpiration: document.querySelector('input[name="creditCardExpiration"]')?.value,
      nameOnCreditCard: document.querySelector('input[name="nameOnCreditCard"]')?.value,
      deliveryHistory: document.querySelector('input[name="deliveryHistory"]').checked,
    };
    
    // Get renewal fees
    const renewalFees = [];
    document.querySelectorAll('table tbody tr').forEach(row => {
      const billingYear = row.querySelector('input[name^="billingYear"]')?.value;
      const feeWaived = row.querySelector('select[name^="feeWaived"]')?.value;
      const dateReceived = row.querySelector('input[name^="dateReceived"]')?.value;
      const amountReceived = row.querySelector('input[name^="amountReceived"]')?.value;
      const paymentMethod = row.querySelector('input[name^="paymentMethod"]')?.value;
      const newRenew = row.querySelector('select[name^="newRenew"]')?.value;
      const checkNumber = row.querySelector('input[name^="checkNumber"]')?.value;
      
      if (billingYear || feeWaived || dateReceived || amountReceived || paymentMethod) {
        renewalFees.push({
          billingYear,
          feeWaived,
          dateReceived: dateReceived || null,
          amountReceived,
          paymentMethod,
          newRenew,
          checkNumber,
        });
      }
    });
    data.renewalFees = renewalFees;
    
    await api.updatePaymentByMember(currentMemberId, data);
    showNotification('Payment saved successfully!');
  } catch (error) {
    console.error('Error saving payment:', error);
    showNotification('Error saving payment', 'error');
  }
}

// Initialize page
document.addEventListener('DOMContentLoaded', async () => {
  const memberId = getMemberId();
  if (memberId) {
    await loadPayment(memberId);
  } else {
    // Load first member's payment if available
    const members = await api.getMembers();
    if (members.length > 0) {
      await loadPayment(members[0]._id);
    }
  }
  
  // Add save button
  const saveBtn = document.createElement('button');
  saveBtn.className = 'btn btn-primary';
  saveBtn.textContent = 'SAVE PAYMENT';
  saveBtn.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 1000;';
  saveBtn.onclick = savePayment;
  document.body.appendChild(saveBtn);
  
  // Update sidebar links with member ID
  if (currentMemberId) {
    const memberLink = document.querySelector('a[href="member.html"]');
    const paymentLink = document.querySelector('a[href="payment-history.html"]');
    if (memberLink) memberLink.href = `member.html?id=${currentMemberId}`;
    if (paymentLink) paymentLink.href = `payment-history.html?id=${currentMemberId}`;
  }
  
  // Auto-save on input change (debounced)
  let saveTimeout;
  document.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('change', () => {
      clearTimeout(saveTimeout);
      saveTimeout = setTimeout(savePayment, 2000);
    });
  });
});
