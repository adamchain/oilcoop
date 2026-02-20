// Citizens Oil Co-op - Demo Application
// Sample member data and all functionality

// ==================== SAMPLE DATA ====================
const sampleMembers = [
    {
        id: 1,
        status: 'ACTIVE',
        recType: 'IND',
        newMemberDate: '2023-01-17',
        originalStartDate: '2005-01-18',
        cluster: '10',
        senior: false,
        firstName1: 'Chris',
        midName1: '',
        lastName1: 'Marolda',
        suffix1: '',
        firstName2: 'Annmarie',
        midName2: '',
        lastName2: 'Marolda',
        suffix2: '',
        streetNo: '433',
        streetName: 'Tollgate Road',
        aptNo: '',
        addressLine2: '',
        city: 'Berlin',
        state: 'CT',
        zip: '06037',
        plus4: '',
        company: '',
        note: '',
        employer: '',
        phone1: '(860) 828-7559',
        phone1Type: 'HOME',
        phone1Ext: '',
        phone2: '(860) 233-2181',
        phone2Type: 'WORK',
        phone2Ext: '309',
        phone3: '',
        phone3Type: '',
        phone3Ext: '',
        email: 'chris@ccag.net',
        emailOptedOut: true,
        oilCoCode: 'PETRO',
        oilId: '6550778',
        propCoCode: 'THOM',
        propaneId: '',
        propaneStatus: 'PROSPECTIVE',
        howJoined: 'PHO',
        referral: 'CCAG',
        electricStatus: 'UNKNOWN',
        elecSignUpDate: '2020-11-14',
        elecStartDate: '',
        nameKey: 'MORA',
        droppedDate: '2020-05-15',
        electricityAccountNumber: '51299023036',
        nextStep: 'Yes',
        referredById: '',
        dateReferred: '',
        registrationFee: '10',
        dtPaid: '2005-01-20',
        checkCredit: '3698',
        lifetimeMember: true,
        paymentNotes: 'Lifetime: Friend',
        renewals: [
            { year: '2025', waived: 'Yes', dateReceived: '2025-06-01', amount: '', method: '', type: 'Renew', checkNumber: '' },
            { year: '2024', waived: 'Yes', dateReceived: '2024-06-01', amount: '', method: '', type: 'Renew', checkNumber: '' },
            { year: '2023', waived: 'Yes', dateReceived: '2023-06-01', amount: '', method: '', type: 'Renew', checkNumber: '' }
        ]
    },
    {
        id: 2,
        status: 'ACTIVE',
        recType: 'IND',
        newMemberDate: '2024-03-15',
        originalStartDate: '2024-03-15',
        cluster: '12',
        senior: true,
        firstName1: 'Jane',
        midName1: 'Marie',
        lastName1: 'Wilson',
        suffix1: '',
        firstName2: 'Robert',
        midName2: '',
        lastName2: 'Wilson',
        suffix2: '',
        streetNo: '789',
        streetName: 'Oak Avenue',
        aptNo: '',
        addressLine2: '',
        city: 'Hartford',
        state: 'CT',
        zip: '06106',
        plus4: '1234',
        company: '',
        note: 'Referred by Chris Marolda',
        employer: 'Hartford Hospital',
        phone1: '(860) 555-1234',
        phone1Type: 'HOME',
        phone1Ext: '',
        phone2: '(860) 555-5678',
        phone2Type: 'CELL',
        phone2Ext: '',
        phone3: '',
        phone3Type: '',
        phone3Ext: '',
        email: 'jwilson@email.com',
        emailOptedOut: false,
        oilCoCode: 'HOCON',
        oilId: '7891234',
        propCoCode: 'AMERIGAS',
        propaneId: 'P-4567',
        propaneStatus: 'ACTIVE',
        howJoined: 'REF',
        referral: 'MEMBER',
        electricStatus: 'ELECTRIC',
        elecSignUpDate: '2024-03-15',
        elecStartDate: '2024-04-01',
        nameKey: 'WILS',
        droppedDate: '',
        electricityAccountNumber: '98765432100',
        nextStep: '',
        referredById: '1',
        dateReferred: '2024-03-15',
        registrationFee: '10',
        dtPaid: '2024-03-15',
        checkCredit: '5421',
        lifetimeMember: false,
        paymentNotes: '',
        renewals: [
            { year: '2025', waived: 'No', dateReceived: '2025-01-15', amount: '25', method: 'Check', type: 'Renew', checkNumber: '1234' },
            { year: '2024', waived: 'No', dateReceived: '2024-03-15', amount: '25', method: 'Check', type: 'New', checkNumber: '5421' }
        ]
    },
    {
        id: 3,
        status: 'ACTIVE',
        recType: 'IND',
        newMemberDate: '2020-09-01',
        originalStartDate: '2020-09-01',
        cluster: '8',
        senior: false,
        firstName1: 'Robert',
        midName1: 'J',
        lastName1: 'Smith',
        suffix1: 'Jr',
        firstName2: 'Patricia',
        midName2: '',
        lastName2: 'Smith',
        suffix2: '',
        streetNo: '156',
        streetName: 'Maple Street',
        aptNo: 'Apt 2B',
        addressLine2: '',
        city: 'New Britain',
        state: 'CT',
        zip: '06051',
        plus4: '',
        company: 'Smith & Associates',
        note: '',
        employer: '',
        phone1: '(860) 224-5678',
        phone1Type: 'HOME',
        phone1Ext: '',
        phone2: '(860) 224-9999',
        phone2Type: 'WORK',
        phone2Ext: '101',
        phone3: '(860) 555-0000',
        phone3Type: 'CELL',
        phone3Ext: '',
        email: 'rsmith@smithassoc.com',
        emailOptedOut: false,
        oilCoCode: 'PETRO',
        oilId: '6550890',
        propCoCode: 'THOM',
        propaneId: '',
        propaneStatus: 'NO PROPANE',
        howJoined: 'WEB',
        referral: 'CCAG',
        electricStatus: 'INTERESTED',
        elecSignUpDate: '',
        elecStartDate: '',
        nameKey: 'SMIT',
        droppedDate: '',
        electricityAccountNumber: '',
        nextStep: 'Follow up on electric',
        referredById: '',
        dateReferred: '',
        registrationFee: '10',
        dtPaid: '2020-09-01',
        checkCredit: '2345',
        lifetimeMember: false,
        paymentNotes: '',
        renewals: [
            { year: '2025', waived: 'No', dateReceived: '2025-02-01', amount: '25', method: 'Credit Card', type: 'Renew', checkNumber: '' },
            { year: '2024', waived: 'No', dateReceived: '2024-01-20', amount: '25', method: 'Credit Card', type: 'Renew', checkNumber: '' },
            { year: '2023', waived: 'No', dateReceived: '2023-02-10', amount: '25', method: 'Check', type: 'Renew', checkNumber: '3456' }
        ]
    },
    {
        id: 4,
        status: 'INACTIVE',
        recType: 'IND',
        newMemberDate: '2018-05-20',
        originalStartDate: '2018-05-20',
        cluster: '15',
        senior: true,
        firstName1: 'Michael',
        midName1: '',
        lastName1: 'Brown',
        suffix1: '',
        firstName2: '',
        midName2: '',
        lastName2: '',
        suffix2: '',
        streetNo: '42',
        streetName: 'Pine Lane',
        aptNo: '',
        addressLine2: '',
        city: 'Glastonbury',
        state: 'CT',
        zip: '06033',
        plus4: '',
        company: '',
        note: 'Moved out of area - 2024',
        employer: 'Retired',
        phone1: '(860) 633-1111',
        phone1Type: 'HOME',
        phone1Ext: '',
        phone2: '',
        phone2Type: '',
        phone2Ext: '',
        phone3: '',
        phone3Type: '',
        phone3Ext: '',
        email: 'mbrown42@gmail.com',
        emailOptedOut: false,
        oilCoCode: 'DZEN',
        oilId: '3456789',
        propCoCode: '',
        propaneId: '',
        propaneStatus: 'NO PROPANE',
        howJoined: 'MAIL',
        referral: 'OTHER',
        electricStatus: 'DROPPED',
        elecSignUpDate: '2019-01-01',
        elecStartDate: '2019-02-01',
        nameKey: 'BROW',
        droppedDate: '2024-06-15',
        electricityAccountNumber: '11223344556',
        nextStep: '',
        referredById: '',
        dateReferred: '',
        registrationFee: '10',
        dtPaid: '2018-05-20',
        checkCredit: '789',
        lifetimeMember: false,
        paymentNotes: 'Account closed - moved',
        renewals: [
            { year: '2024', waived: 'No', dateReceived: '', amount: '', method: '', type: 'Renew', checkNumber: '' },
            { year: '2023', waived: 'No', dateReceived: '2023-05-01', amount: '25', method: 'Check', type: 'Renew', checkNumber: '6789' }
        ]
    },
    {
        id: 5,
        status: 'PROSPECTIVE',
        recType: 'IND',
        newMemberDate: '2026-02-01',
        originalStartDate: '',
        cluster: '10',
        senior: false,
        firstName1: 'Sarah',
        midName1: 'Elizabeth',
        lastName1: 'Johnson',
        suffix1: '',
        firstName2: 'David',
        midName2: '',
        lastName2: 'Johnson',
        suffix2: '',
        streetNo: '88',
        streetName: 'Cedar Drive',
        aptNo: '',
        addressLine2: '',
        city: 'Berlin',
        state: 'CT',
        zip: '06037',
        plus4: '',
        company: '',
        note: 'Interested in oil and propane - follow up Feb 2026',
        employer: 'Self-employed',
        phone1: '(860) 828-9999',
        phone1Type: 'CELL',
        phone1Ext: '',
        phone2: '',
        phone2Type: '',
        phone2Ext: '',
        phone3: '',
        phone3Type: '',
        phone3Ext: '',
        email: 'sarah.johnson@outlook.com',
        emailOptedOut: false,
        oilCoCode: '',
        oilId: '',
        propCoCode: '',
        propaneId: '',
        propaneStatus: 'PROSPECTIVE',
        howJoined: 'WEB',
        referral: 'CCAG',
        electricStatus: 'INTERESTED',
        elecSignUpDate: '',
        elecStartDate: '',
        nameKey: 'JOHN',
        droppedDate: '',
        electricityAccountNumber: '',
        nextStep: 'Call to discuss options',
        referredById: '',
        dateReferred: '',
        registrationFee: '',
        dtPaid: '',
        checkCredit: '',
        lifetimeMember: false,
        paymentNotes: '',
        renewals: []
    }
];

// Current state
let currentMemberIndex = 0;
let filteredMembers = [...sampleMembers];

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', function() {
    initTabs();
    // Auto-insert oil start date when oil co code or oil ID is set (if field is empty)
    initOilStartDateAutoInsert();
    loadMember(0);
    updateMembersList();
    updateRecordCount();
    updateStats();
});

// When user sets oil co code or oil ID, auto-fill oil start date if it's empty (for new records).
// Backend would typically set this from enrollment date or first delivery; here we default to today.
function initOilStartDateAutoInsert() {
    const oilStartEl = document.getElementById('oilStartDate');
    const oilCoCodeEl = document.getElementById('oilCoCode');
    const oilIdEl = document.getElementById('oilId');
    if (!oilStartEl || (!oilCoCodeEl && !oilIdEl)) return;
    function maybeSetOilStartDate() {
        if (oilStartEl.value) return;
        const code = oilCoCodeEl ? oilCoCodeEl.value : '';
        const id = oilIdEl ? oilIdEl.value.trim() : '';
        if (code || id) oilStartEl.value = new Date().toISOString().split('T')[0];
    }
    if (oilCoCodeEl) oilCoCodeEl.addEventListener('change', maybeSetOilStartDate);
    if (oilIdEl) oilIdEl.addEventListener('change', maybeSetOilStartDate);
}

// ==================== TAB NAVIGATION ====================
function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
        });
    });
}

function switchTab(tabId) {
    // Remove active from all tabs and contents
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    // Activate selected tab and content
    document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');

    // Update data when switching to certain tabs
    if (tabId === 'members-list') {
        updateMembersList();
    } else if (tabId === 'member-status-rpt') {
        updateStats();
    }
}

// ==================== MEMBER NAVIGATION ====================
function navigateRecord(direction) {
    switch(direction) {
        case 'first':
            currentMemberIndex = 0;
            break;
        case 'prev':
            if (currentMemberIndex > 0) currentMemberIndex--;
            break;
        case 'next':
            if (currentMemberIndex < filteredMembers.length - 1) currentMemberIndex++;
            break;
        case 'last':
            currentMemberIndex = filteredMembers.length - 1;
            break;
    }
    loadMember(currentMemberIndex);
    updateRecordCount();
}

function loadMember(index) {
    if (index < 0 || index >= filteredMembers.length) return;

    const member = filteredMembers[index];
    currentMemberIndex = index;

    // Load Data Entry fields
    document.getElementById('memberId').value = member.id;
    document.querySelector(`input[name="status"][value="${member.status}"]`).checked = true;
    document.getElementById('recType').value = member.recType;
    document.getElementById('newMemberDate').value = member.newMemberDate;
    document.getElementById('originalStartDate').value = member.originalStartDate;
    document.getElementById('senior').checked = member.senior;
    document.getElementById('firstName1').value = member.firstName1;
    document.getElementById('midName1').value = member.midName1;
    document.getElementById('lastName1').value = member.lastName1;
    document.getElementById('suffix1').value = member.suffix1;
    document.getElementById('firstName2').value = member.firstName2;
    document.getElementById('midName2').value = member.midName2;
    document.getElementById('lastName2').value = member.lastName2;
    document.getElementById('suffix2').value = member.suffix2;
    document.getElementById('streetNo').value = member.streetNo;
    document.getElementById('streetName').value = member.streetName;
    document.getElementById('aptNo').value = member.aptNo;
    document.getElementById('addressLine2').value = member.addressLine2;
    document.getElementById('city').value = member.city;
    document.getElementById('state').value = member.state;
    document.getElementById('zip').value = member.zip;
    document.getElementById('plus4').value = member.plus4;
    document.getElementById('company').value = member.company;
    document.getElementById('note').value = member.note;
    document.getElementById('employer').value = member.employer;
    document.getElementById('phone1').value = member.phone1;
    document.getElementById('phone1Type').value = member.phone1Type;
    document.getElementById('phone1Ext').value = member.phone1Ext;
    document.getElementById('phone2').value = member.phone2;
    document.getElementById('phone2Type').value = member.phone2Type;
    document.getElementById('phone2Ext').value = member.phone2Ext;
    document.getElementById('phone3').value = member.phone3;
    document.getElementById('phone3Type').value = member.phone3Type;
    document.getElementById('phone3Ext').value = member.phone3Ext;
    document.getElementById('email').value = member.email;
    const email2El = document.getElementById('email2');
    if (email2El) email2El.value = member.email2 || '';
    const contactNoteEl = document.getElementById('contactNote');
    if (contactNoteEl) contactNoteEl.value = member.contactNote || '';
    document.getElementById('oilCoCode').value = member.oilCoCode || 'PETRO';
    document.getElementById('oilId').value = member.oilId;
    document.getElementById('propCoCode').value = member.propCoCode || 'THOM';
    document.getElementById('propaneId').value = member.propaneId;
    document.getElementById('howJoined').value = member.howJoined || 'PHO';
    document.getElementById('referral').value = member.referral || 'CCAG';

    // Oil status (in Oil Company card)
    const oilStatusVal = member.oilStatus || member.status || 'ACTIVE';
    const oilStatusRadio = document.querySelector(`input[name="oilStatus"][value="${oilStatusVal}"]`);
    if (oilStatusRadio) oilStatusRadio.checked = true;
    // Oil start date: auto-insert when oil co code or ID is set (see initOilStartDateAutoInsert in DOMContentLoaded)
    const oilStartEl = document.getElementById('oilStartDate');
    if (oilStartEl) oilStartEl.value = member.oilStartDate || '';
    // Propane status
    const propaneRadio = document.querySelector(`input[name="propaneStatus"][value="${member.propaneStatus}"]`);
    if (propaneRadio) propaneRadio.checked = true;

    // Electric status
    const electricRadio = document.querySelector(`input[name="electricStatus"][value="${member.electricStatus}"]`);
    if (electricRadio) electricRadio.checked = true;

    document.getElementById('elecSignUpDate').value = member.elecSignUpDate;
    document.getElementById('elecStartDate').value = member.elecStartDate;
    document.getElementById('nameKey').value = member.nameKey;
    document.getElementById('droppedDate').value = member.droppedDate;
    document.getElementById('electricityAccountNumber').value = member.electricityAccountNumber;
    document.getElementById('nextStep').value = member.nextStep;
    document.getElementById('referredById').value = member.referredById;
    document.getElementById('dateReferred').value = member.dateReferred;

    // Update Payment History tab
    updatePaymentHistoryTab(member);

    // Update Worksheet tab
    updateWorksheetTab(member);

    // Update Print Full Record
    document.getElementById('printMemberName').value = `${member.firstName1} ${member.lastName1}`;
}

function updatePaymentHistoryTab(member) {
    document.getElementById('ph_id').textContent = member.id;
    document.getElementById('ph_memberDate').textContent = formatDate(member.newMemberDate);
    document.getElementById('ph_firstName').textContent = member.firstName1;
    document.getElementById('ph_lastName').textContent = member.lastName1;
    document.getElementById('ph_address').textContent = `${member.streetNo} ${member.streetName}`;
    document.getElementById('ph_cityStateZip').textContent = `${member.city}, ${member.state} ${member.zip}`;
    document.getElementById('ph_phone1').textContent = member.phone1;
    document.getElementById('ph_phone2').textContent = member.phone2;
    document.getElementById('ph_email').textContent = member.email + (member.emailOptedOut ? ' - Opted Out' : '');
    document.getElementById('ph_oilCo').textContent = member.oilCoCode;
    document.getElementById('ph_oilId').textContent = member.oilId;
    document.getElementById('ph_propaneId').textContent = member.propaneId;

    document.getElementById('ph_cluster').value = member.cluster;
    document.getElementById('ph_regFee').value = member.registrationFee;
    document.getElementById('ph_dtPaid').value = member.dtPaid;
    document.getElementById('ph_checkCredit').value = member.checkCredit;
    document.getElementById('ph_lifetime').checked = member.lifetimeMember;
    document.getElementById('ph_paymentNotes').value = member.paymentNotes;
}

function updateWorksheetTab(member) {
    document.getElementById('ws_memberName').value = `${member.firstName1} ${member.lastName1}`;
    document.getElementById('ws_address').value = `${member.streetNo} ${member.streetName}, ${member.city}, ${member.state} ${member.zip}`;
    document.getElementById('ws_oilCo').value = member.oilCoCode;
    document.getElementById('ws_oilId').value = member.oilId;
    document.getElementById('ws_status').value = member.status;
}

// ==================== MEMBER LIST ====================
function updateMembersList() {
    const tbody = document.getElementById('membersListTable');
    tbody.innerHTML = '';

    filteredMembers.forEach((member, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${member.id}</td>
            <td>${member.firstName1} ${member.lastName1}</td>
            <td>${member.streetNo} ${member.streetName}</td>
            <td>${member.city}</td>
            <td>${member.phone1}</td>
            <td>${member.oilCoCode}</td>
            <td><span class="status-${member.status.toLowerCase()}">${member.status}</span></td>
        `;
        row.addEventListener('click', () => {
            currentMemberIndex = index;
            loadMember(index);
            switchTab('data-entry');
            updateRecordCount();
        });
        tbody.appendChild(row);
    });
}

function filterMemberList() {
    const statusFilter = document.getElementById('memberListFilter').value;
    const searchTerm = document.getElementById('memberListSearch').value.toLowerCase();

    filteredMembers = sampleMembers.filter(member => {
        const matchesStatus = statusFilter === 'all' || member.status.toLowerCase() === statusFilter;
        const matchesSearch = searchTerm === '' ||
            `${member.firstName1} ${member.lastName1}`.toLowerCase().includes(searchTerm);
        return matchesStatus && matchesSearch;
    });

    updateMembersList();
    updateRecordCount();
}

// ==================== SEARCH & FILTER ====================
function handleSearch(event) {
    if (event.key === 'Enter') {
        const searchTerm = document.getElementById('globalSearch').value.toLowerCase();
        if (searchTerm === '') {
            filteredMembers = [...sampleMembers];
        } else {
            filteredMembers = sampleMembers.filter(member =>
                `${member.firstName1} ${member.lastName1}`.toLowerCase().includes(searchTerm) ||
                member.phone1.includes(searchTerm) ||
                member.id.toString() === searchTerm
            );
        }
        if (filteredMembers.length > 0) {
            currentMemberIndex = 0;
            loadMember(0);
        }
        updateRecordCount();
        showToast(`Found ${filteredMembers.length} member(s)`, 'success');
    }
}

function filterMembers() {
    const filter = document.getElementById('filterDropdown').value;

    if (filter === 'all') {
        filteredMembers = [...sampleMembers];
    } else {
        filteredMembers = sampleMembers.filter(member =>
            member.status.toLowerCase() === filter
        );
    }

    if (filteredMembers.length > 0) {
        currentMemberIndex = 0;
        loadMember(0);
    }
    updateRecordCount();
}

function updateRecordCount() {
    document.getElementById('currentRecord').textContent = filteredMembers.length > 0 ? currentMemberIndex + 1 : 0;
    document.getElementById('totalRecords').textContent = filteredMembers.length;
    document.getElementById('totalMembers').textContent = sampleMembers.length;
}

// ==================== STATISTICS ====================
function updateStats() {
    const active = sampleMembers.filter(m => m.status === 'ACTIVE').length;
    const inactive = sampleMembers.filter(m => m.status === 'INACTIVE').length;
    const prospective = sampleMembers.filter(m => m.status === 'PROSPECTIVE').length;

    document.getElementById('stat_active').textContent = active;
    document.getElementById('stat_inactive').textContent = inactive;
    document.getElementById('stat_prospective').textContent = prospective;
    document.getElementById('stat_total').textContent = sampleMembers.length;
}

// ==================== MODALS ====================
function showModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function hideModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// Close modal on outside click
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
});

// ==================== TOAST NOTIFICATIONS ====================
function showToast(message, type = '') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = 'toast show ' + type;

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ==================== MEMBER ACTIONS ====================
function addNewMember() {
    const newId = Math.max(...sampleMembers.map(m => m.id)) + 1;
    const newMember = {
        id: newId,
        status: 'ACTIVE',
        recType: 'IND',
        newMemberDate: new Date().toISOString().split('T')[0],
        originalStartDate: new Date().toISOString().split('T')[0],
        cluster: '',
        senior: false,
        firstName1: '',
        midName1: '',
        lastName1: '',
        suffix1: '',
        firstName2: '',
        midName2: '',
        lastName2: '',
        suffix2: '',
        streetNo: '',
        streetName: '',
        aptNo: '',
        addressLine2: '',
        city: '',
        state: 'CT',
        zip: '',
        plus4: '',
        company: '',
        note: '',
        employer: '',
        phone1: '',
        phone1Type: 'HOME',
        phone1Ext: '',
        phone2: '',
        phone2Type: '',
        phone2Ext: '',
        phone3: '',
        phone3Type: '',
        phone3Ext: '',
        email: '',
        emailOptedOut: false,
        oilCoCode: 'PETRO',
        oilId: '',
        propCoCode: '',
        propaneId: '',
        propaneStatus: 'UNKNOWN',
        howJoined: 'PHO',
        referral: 'CCAG',
        electricStatus: 'UNKNOWN',
        elecSignUpDate: '',
        elecStartDate: '',
        nameKey: '',
        droppedDate: '',
        electricityAccountNumber: '',
        nextStep: '',
        referredById: '',
        dateReferred: '',
        registrationFee: '10',
        dtPaid: '',
        checkCredit: '',
        lifetimeMember: false,
        paymentNotes: '',
        renewals: []
    };

    sampleMembers.push(newMember);
    filteredMembers = [...sampleMembers];
    currentMemberIndex = filteredMembers.length - 1;
    loadMember(currentMemberIndex);
    updateRecordCount();
    updateStats();
    showToast('New member created! ID: ' + newId, 'success');
}

function addProspect() {
    const newId = Math.max(...sampleMembers.map(m => m.id)) + 1;
    const newMember = {
        id: newId,
        status: 'PROSPECTIVE',
        recType: 'IND',
        newMemberDate: new Date().toISOString().split('T')[0],
        originalStartDate: '',
        cluster: '',
        senior: false,
        firstName1: '',
        midName1: '',
        lastName1: '',
        suffix1: '',
        firstName2: '',
        midName2: '',
        lastName2: '',
        suffix2: '',
        streetNo: '',
        streetName: '',
        aptNo: '',
        addressLine2: '',
        city: '',
        state: 'CT',
        zip: '',
        plus4: '',
        company: '',
        note: '',
        employer: '',
        phone1: '',
        phone1Type: 'HOME',
        phone1Ext: '',
        phone2: '',
        phone2Type: '',
        phone2Ext: '',
        phone3: '',
        phone3Type: '',
        phone3Ext: '',
        email: '',
        emailOptedOut: false,
        oilCoCode: '',
        oilId: '',
        propCoCode: '',
        propaneId: '',
        propaneStatus: 'PROSPECTIVE',
        howJoined: 'PHO',
        referral: 'CCAG',
        electricStatus: 'UNKNOWN',
        elecSignUpDate: '',
        elecStartDate: '',
        nameKey: '',
        droppedDate: '',
        electricityAccountNumber: '',
        nextStep: '',
        referredById: '',
        dateReferred: '',
        registrationFee: '',
        dtPaid: '',
        checkCredit: '',
        lifetimeMember: false,
        paymentNotes: '',
        renewals: []
    };

    sampleMembers.push(newMember);
    filteredMembers = [...sampleMembers];
    currentMemberIndex = filteredMembers.length - 1;
    loadMember(currentMemberIndex);
    updateRecordCount();
    updateStats();
    showToast('New prospect created! ID: ' + newId, 'success');
}

function deleteMember() {
    if (filteredMembers.length === 0) return;

    const member = filteredMembers[currentMemberIndex];
    if (confirm(`Are you sure you want to delete member ${member.firstName1} ${member.lastName1} (ID: ${member.id})?`)) {
        const originalIndex = sampleMembers.findIndex(m => m.id === member.id);
        sampleMembers.splice(originalIndex, 1);
        filteredMembers = [...sampleMembers];

        if (currentMemberIndex >= filteredMembers.length) {
            currentMemberIndex = Math.max(0, filteredMembers.length - 1);
        }

        if (filteredMembers.length > 0) {
            loadMember(currentMemberIndex);
        }

        updateRecordCount();
        updateStats();
        updateMembersList();
        showToast('Member deleted successfully', 'success');
    }
}

// ==================== BUTTON ACTIONS ====================
function useBothNames() {
    const first1 = document.getElementById('firstName1').value;
    const first2 = document.getElementById('firstName2').value;
    const last = document.getElementById('lastName1').value;

    if (first1 && first2 && last) {
        showToast(`Mail to: ${first1} & ${first2} ${last}`, 'success');
    }
}

function showMailAddress() {
    const member = filteredMembers[currentMemberIndex];
    alert(`Mailing Address:\n\n${member.firstName1} ${member.lastName1}\n${member.streetNo} ${member.streetName}\n${member.city}, ${member.state} ${member.zip}`);
}

function showOilCoInfo() {
    showModal('oilCoInfoModal');
}

function showPropCoInfo() {
    alert('Propane Company Info:\n\nCompany: Thompson Gas\nCode: THOM\nPhone: (860) 555-7777\nContact: Propane Support');
}

function showContactHistory() {
    showModal('contactHistoryModal');
}

function showDeliveryHistory() {
    showModal('deliveryHistoryModal');
}

function showDeliveryReports() {
    switchTab('oil-co-worksheet');
    showToast('Viewing Delivery Reports', 'success');
}

function addContact() {
    const type = document.getElementById('newContactType').value;
    const notes = document.getElementById('newContactNotes').value;

    if (notes.trim() === '') {
        showToast('Please enter contact notes', 'error');
        return;
    }

    showToast('Contact added successfully', 'success');
    document.getElementById('newContactNotes').value = '';
}

function addRenewalRow() {
    const currentYear = new Date().getFullYear();
    showToast(`Added renewal row for ${currentYear}`, 'success');
}

function saveNewCompany() {
    const code = document.getElementById('newCoCode').value;
    const name = document.getElementById('newCoName').value;

    if (code && name) {
        hideModal('addCompanyModal');
        showToast(`Company ${code} added successfully`, 'success');

        // Clear form
        document.getElementById('newCoCode').value = '';
        document.getElementById('newCoName').value = '';
        document.getElementById('newCoPhone').value = '';
        document.getElementById('newCoContact').value = '';
    } else {
        showToast('Please fill in required fields', 'error');
    }
}

// ==================== REPORT ACTIONS ====================
function printReport() {
    showToast('Preparing report for printing...', 'success');
    setTimeout(() => window.print(), 500);
}

function exportReport() {
    showToast('Exporting report to Excel...', 'success');
}

function printWorksheet() {
    showToast('Printing worksheet...', 'success');
    setTimeout(() => window.print(), 500);
}

function exportWorksheet() {
    showToast('Exporting worksheet to PDF...', 'success');
}

function printFullRecord() {
    showToast('Printing full record...', 'success');
    setTimeout(() => window.print(), 500);
}

function previewRecord() {
    showToast('Generating preview...', 'success');
}

function printDeliveryHistory() {
    showToast('Printing delivery history...', 'success');
    setTimeout(() => window.print(), 500);
}

// ==================== MAILING ACTIONS ====================
function generateMailing(type) {
    showToast(`Generating ${type} mailing...`, 'success');
}

function generateRenewalMailing() {
    showToast('Generating renewal mailing...', 'success');
}

function previewRenewalList() {
    showToast('Loading renewal list preview...', 'success');
}

function generateProspectiveMailing() {
    showToast('Generating prospective mailing...', 'success');
}

function previewProspectiveList() {
    showToast('Loading prospective list preview...', 'success');
}

// ==================== LETTER ACTIONS ====================
function generateRefundLetter() {
    showToast('Generating refund letter...', 'success');
}

function previewRefundLetter() {
    showToast('Loading refund letter preview...', 'success');
}

function generateStartDateLetter() {
    showToast('Generating start date letter...', 'success');
}

function previewStartDateLetter() {
    showToast('Loading start date letter preview...', 'success');
}

function generateMultipleReferralLetters() {
    const selected = document.getElementById('referralLetterMembers').selectedOptions;
    if (selected.length === 0) {
        showToast('Please select at least one member', 'error');
        return;
    }
    showToast(`Generating ${selected.length} referral letter(s)...`, 'success');
}

// ==================== BACKUP ACTIONS ====================
function runBackup() {
    showToast('Running backup... Please wait.', 'success');
    setTimeout(() => {
        showToast('Backup completed successfully!', 'success');
    }, 2000);
}

function scheduleBackup() {
    showToast('Opening backup scheduler...', 'success');
}

// ==================== OIL CO WORKSHEET ====================
function loadOilCoMembers() {
    const oilCo = document.getElementById('oilCoWorksheetSelect').value;
    const tbody = document.getElementById('oilCoWorksheetTable');
    tbody.innerHTML = '';

    const members = sampleMembers.filter(m => m.oilCoCode === oilCo);

    members.forEach(member => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${member.id}</td>
            <td>${member.firstName1} ${member.lastName1}</td>
            <td>${member.oilId}</td>
            <td>${member.status}</td>
        `;
        tbody.appendChild(row);
    });

    if (members.length === 0) {
        tbody.innerHTML = '<tr><td colspan="4" style="text-align:center">No members found for this oil company</td></tr>';
    }
}

// ==================== UTILITY FUNCTIONS ====================
function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US');
}
