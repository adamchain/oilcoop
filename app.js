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
    // Additional members for referral demo (IDs 1776 and 15900 referred by member 1)
    {
        id: 1776,
        status: 'ACTIVE',
        recType: 'IND',
        newMemberDate: '2003-12-18',
        originalStartDate: '2003-12-18',
        cluster: '10',
        senior: false,
        firstName1: 'Evelyn',
        midName1: '',
        lastName1: 'Mantilla',
        suffix1: '',
        firstName2: '',
        midName2: '',
        lastName2: '',
        suffix2: '',
        streetNo: '55',
        streetName: 'Garden Street',
        aptNo: '',
        addressLine2: '',
        city: 'Hartford',
        state: 'CT',
        zip: '06105',
        plus4: '',
        company: '',
        note: '',
        employer: '',
        phone1: '(860) 555-1776',
        phone1Type: 'HOME',
        phone1Ext: '',
        phone2: '',
        phone2Type: '',
        phone2Ext: '',
        phone3: '',
        phone3Type: '',
        phone3Ext: '',
        email: 'emantilla@email.com',
        emailOptedOut: false,
        oilCoCode: 'PETRO',
        oilId: '7771776',
        propCoCode: '',
        propaneId: '',
        propaneStatus: 'NO PROPANE',
        howJoined: 'REF',
        referral: 'MEMBER',
        electricStatus: 'UNKNOWN',
        elecSignUpDate: '',
        elecStartDate: '',
        nameKey: 'MANT',
        droppedDate: '',
        electricityAccountNumber: '',
        nextStep: '',
        referredById: '1',
        dateReferred: '2003-12-18',
        registrationFee: '10',
        dtPaid: '2003-12-18',
        checkCredit: '1234',
        lifetimeMember: false,
        paymentNotes: '',
        renewals: []
    },
    {
        id: 15900,
        status: 'ACTIVE',
        recType: 'IND',
        newMemberDate: '2025-04-28',
        originalStartDate: '2025-04-28',
        cluster: '10',
        senior: false,
        firstName1: 'Patrick',
        midName1: '',
        lastName1: 'Hemingway',
        suffix1: '',
        firstName2: '',
        midName2: '',
        lastName2: '',
        suffix2: '',
        streetNo: '100',
        streetName: 'Oak Lane',
        aptNo: '',
        addressLine2: '',
        city: 'Berlin',
        state: 'CT',
        zip: '06037',
        plus4: '',
        company: '',
        note: '',
        employer: '',
        phone1: '(860) 555-1590',
        phone1Type: 'HOME',
        phone1Ext: '',
        phone2: '',
        phone2Type: '',
        phone2Ext: '',
        phone3: '',
        phone3Type: '',
        phone3Ext: '',
        email: 'phemingway@email.com',
        emailOptedOut: false,
        oilCoCode: 'HOCON',
        oilId: '1590001',
        propCoCode: '',
        propaneId: '',
        propaneStatus: 'NO PROPANE',
        howJoined: 'REF',
        referral: 'MEMBER',
        electricStatus: 'UNKNOWN',
        elecSignUpDate: '',
        elecStartDate: '',
        nameKey: 'HEMI',
        droppedDate: '',
        electricityAccountNumber: '',
        nextStep: '',
        referredById: '1',
        dateReferred: '2025-04-28',
        registrationFee: '10',
        dtPaid: '2025-04-28',
        checkCredit: '9876',
        lifetimeMember: false,
        paymentNotes: '',
        renewals: []
    },
    // Member 7 - Edward McBriarty (referrer)
    {
        id: 7,
        status: 'ACTIVE',
        recType: 'IND',
        newMemberDate: '2000-01-15',
        originalStartDate: '2000-01-15',
        cluster: '8',
        senior: true,
        firstName1: 'Edward',
        midName1: '',
        lastName1: 'McBriarty',
        suffix1: '',
        firstName2: '',
        midName2: '',
        lastName2: '',
        suffix2: '',
        streetNo: '78',
        streetName: 'Main Street',
        aptNo: '',
        addressLine2: '',
        city: 'Hartford',
        state: 'CT',
        zip: '06103',
        plus4: '',
        company: '',
        note: '',
        employer: 'Retired',
        phone1: '(860) 555-0007',
        phone1Type: 'HOME',
        phone1Ext: '',
        phone2: '',
        phone2Type: '',
        phone2Ext: '',
        phone3: '',
        phone3Type: '',
        phone3Ext: '',
        email: 'emcbriarty@email.com',
        emailOptedOut: false,
        oilCoCode: 'DZEN',
        oilId: '0007000',
        propCoCode: '',
        propaneId: '',
        propaneStatus: 'NO PROPANE',
        howJoined: 'MAIL',
        referral: 'CCAG',
        electricStatus: 'UNKNOWN',
        elecSignUpDate: '',
        elecStartDate: '',
        nameKey: 'MCBR',
        droppedDate: '',
        electricityAccountNumber: '',
        nextStep: '',
        referredById: '',
        dateReferred: '',
        registrationFee: '10',
        dtPaid: '2000-01-15',
        checkCredit: '0007',
        lifetimeMember: true,
        paymentNotes: '',
        renewals: []
    },
    // Referred by member 7
    {
        id: 77,
        status: 'ACTIVE',
        recType: 'IND',
        newMemberDate: '2007-06-18',
        originalStartDate: '2007-06-18',
        cluster: '8',
        senior: false,
        firstName1: 'Edward',
        midName1: '',
        lastName1: 'McBriarty',
        suffix1: 'Jr',
        firstName2: '',
        midName2: '',
        lastName2: '',
        suffix2: '',
        streetNo: '80',
        streetName: 'Main Street',
        aptNo: '',
        addressLine2: '',
        city: 'Hartford',
        state: 'CT',
        zip: '06103',
        plus4: '',
        company: '',
        note: '',
        employer: '',
        phone1: '(860) 555-0077',
        phone1Type: 'HOME',
        phone1Ext: '',
        phone2: '',
        phone2Type: '',
        phone2Ext: '',
        phone3: '',
        phone3Type: '',
        phone3Ext: '',
        email: 'emcbriarty.jr@email.com',
        emailOptedOut: false,
        oilCoCode: 'DZEN',
        oilId: '0077000',
        propCoCode: '',
        propaneId: '',
        propaneStatus: 'NO PROPANE',
        howJoined: 'REF',
        referral: 'MEMBER',
        electricStatus: 'UNKNOWN',
        elecSignUpDate: '',
        elecStartDate: '',
        nameKey: 'MCBR',
        droppedDate: '',
        electricityAccountNumber: '',
        nextStep: '',
        referredById: '7',
        dateReferred: '2007-06-18',
        registrationFee: '10',
        dtPaid: '2007-06-18',
        checkCredit: '0077',
        lifetimeMember: false,
        paymentNotes: '',
        renewals: []
    },
    // Member 25 - Current Resi style referrer
    {
        id: 25,
        status: 'ACTIVE',
        recType: 'IND',
        newMemberDate: '1998-05-01',
        originalStartDate: '1998-05-01',
        cluster: '12',
        senior: true,
        firstName1: 'Current',
        midName1: '',
        lastName1: 'Resi',
        suffix1: '',
        firstName2: '',
        midName2: '',
        lastName2: '',
        suffix2: '',
        streetNo: '25',
        streetName: 'Residence Way',
        aptNo: '',
        addressLine2: '',
        city: 'New Britain',
        state: 'CT',
        zip: '06051',
        plus4: '',
        company: '',
        note: '',
        employer: 'Retired',
        phone1: '(860) 555-0025',
        phone1Type: 'HOME',
        phone1Ext: '',
        phone2: '',
        phone2Type: '',
        phone2Ext: '',
        phone3: '',
        phone3Type: '',
        phone3Ext: '',
        email: 'cresi@email.com',
        emailOptedOut: false,
        oilCoCode: 'PETRO',
        oilId: '0025000',
        propCoCode: '',
        propaneId: '',
        propaneStatus: 'NO PROPANE',
        howJoined: 'PHO',
        referral: 'CCAG',
        electricStatus: 'UNKNOWN',
        elecSignUpDate: '',
        elecStartDate: '',
        nameKey: 'RESI',
        droppedDate: '',
        electricityAccountNumber: '',
        nextStep: '',
        referredById: '',
        dateReferred: '',
        registrationFee: '10',
        dtPaid: '1998-05-01',
        checkCredit: '0025',
        lifetimeMember: true,
        paymentNotes: '',
        renewals: []
    },
    // Referred by member 25
    {
        id: 800,
        status: 'ACTIVE',
        recType: 'IND',
        newMemberDate: '2001-06-04',
        originalStartDate: '2001-06-04',
        cluster: '12',
        senior: false,
        firstName1: 'Thomas',
        midName1: '',
        lastName1: 'Lyden',
        suffix1: '',
        firstName2: '',
        midName2: '',
        lastName2: '',
        suffix2: '',
        streetNo: '800',
        streetName: 'Thomas Street',
        aptNo: '',
        addressLine2: '',
        city: 'New Britain',
        state: 'CT',
        zip: '06051',
        plus4: '',
        company: '',
        note: '',
        employer: '',
        phone1: '(860) 555-0800',
        phone1Type: 'HOME',
        phone1Ext: '',
        phone2: '',
        phone2Type: '',
        phone2Ext: '',
        phone3: '',
        phone3Type: '',
        phone3Ext: '',
        email: 'tlyden@email.com',
        emailOptedOut: false,
        oilCoCode: 'PETRO',
        oilId: '0800000',
        propCoCode: '',
        propaneId: '',
        propaneStatus: 'NO PROPANE',
        howJoined: 'REF',
        referral: 'MEMBER',
        electricStatus: 'UNKNOWN',
        elecSignUpDate: '',
        elecStartDate: '',
        nameKey: 'LYDE',
        droppedDate: '',
        electricityAccountNumber: '',
        nextStep: '',
        referredById: '25',
        dateReferred: '2001-06-04',
        registrationFee: '10',
        dtPaid: '2001-06-04',
        checkCredit: '0800',
        lifetimeMember: false,
        paymentNotes: '',
        renewals: []
    },
    {
        id: 821,
        status: 'ACTIVE',
        recType: 'IND',
        newMemberDate: '2001-06-18',
        originalStartDate: '2001-06-18',
        cluster: '12',
        senior: false,
        firstName1: 'Kenneth',
        midName1: '',
        lastName1: 'Roseman',
        suffix1: '',
        firstName2: '',
        midName2: '',
        lastName2: '',
        suffix2: '',
        streetNo: '821',
        streetName: 'Kenneth Ave',
        aptNo: '',
        addressLine2: '',
        city: 'New Britain',
        state: 'CT',
        zip: '06051',
        plus4: '',
        company: '',
        note: '',
        employer: '',
        phone1: '(860) 555-0821',
        phone1Type: 'HOME',
        phone1Ext: '',
        phone2: '',
        phone2Type: '',
        phone2Ext: '',
        phone3: '',
        phone3Type: '',
        phone3Ext: '',
        email: 'kroseman@email.com',
        emailOptedOut: false,
        oilCoCode: 'PETRO',
        oilId: '0821000',
        propCoCode: '',
        propaneId: '',
        propaneStatus: 'NO PROPANE',
        howJoined: 'REF',
        referral: 'MEMBER',
        electricStatus: 'UNKNOWN',
        elecSignUpDate: '',
        elecStartDate: '',
        nameKey: 'ROSE',
        droppedDate: '',
        electricityAccountNumber: '',
        nextStep: '',
        referredById: '25',
        dateReferred: '2001-06-18',
        registrationFee: '10',
        dtPaid: '2001-06-18',
        checkCredit: '0821',
        lifetimeMember: false,
        paymentNotes: '',
        renewals: []
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
    } else if (tabId === 'referrals-by-member') {
        updateReferralsByMemberReport();
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
        const searchTerm = document.getElementById('globalSearch').value.toLowerCase().trim();
        if (searchTerm === '') {
            filteredMembers = [...sampleMembers];
        } else {
            filteredMembers = sampleMembers.filter(member => {
                // Search through all member fields
                const searchableFields = [
                    member.id.toString(),
                    member.firstName1,
                    member.midName1,
                    member.lastName1,
                    member.suffix1,
                    member.firstName2,
                    member.midName2,
                    member.lastName2,
                    member.suffix2,
                    member.streetNo,
                    member.streetName,
                    member.aptNo,
                    member.addressLine2,
                    member.city,
                    member.state,
                    member.zip,
                    member.plus4,
                    member.company,
                    member.note,
                    member.employer,
                    member.phone1,
                    member.phone2,
                    member.phone3,
                    member.email,
                    member.oilCoCode,
                    member.oilId,
                    member.propCoCode,
                    member.propaneId,
                    member.status,
                    member.recType,
                    member.howJoined,
                    member.referral,
                    member.electricStatus,
                    member.nameKey,
                    member.electricityAccountNumber,
                    member.nextStep,
                    member.paymentNotes,
                    member.newMemberDate,
                    member.originalStartDate
                ];

                // Check if any field contains the search term
                return searchableFields.some(field =>
                    field && field.toString().toLowerCase().includes(searchTerm)
                );
            });
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
    // Populate modal fields
    document.getElementById('mailStreetNo').value = member.streetNo || '';
    document.getElementById('mailStreetName').value = member.streetName || '';
    document.getElementById('mailAptNo').value = member.aptNo || '';
    document.getElementById('mailAddressLine2').value = member.addressLine2 || '';
    document.getElementById('mailCity').value = member.city || '';
    document.getElementById('mailState').value = member.state || '';
    document.getElementById('mailZip').value = member.zip || '';
    document.getElementById('mailPlus4').value = member.plus4 || '';
    document.getElementById('mailRecipient').value = `${member.firstName1} ${member.lastName1}`;
    document.getElementById('isPrimaryAddress').checked = member.isPrimaryAddress !== false;
    showModal('mailAddressModal');
}

function saveMailAddress() {
    const member = filteredMembers[currentMemberIndex];
    member.streetNo = document.getElementById('mailStreetNo').value;
    member.streetName = document.getElementById('mailStreetName').value;
    member.aptNo = document.getElementById('mailAptNo').value;
    member.addressLine2 = document.getElementById('mailAddressLine2').value;
    member.city = document.getElementById('mailCity').value;
    member.state = document.getElementById('mailState').value;
    member.zip = document.getElementById('mailZip').value;
    member.plus4 = document.getElementById('mailPlus4').value;
    member.isPrimaryAddress = document.getElementById('isPrimaryAddress').checked;

    // Update the main form fields
    document.getElementById('streetNo').value = member.streetNo;
    document.getElementById('streetName').value = member.streetName;
    document.getElementById('aptNo').value = member.aptNo;
    document.getElementById('addressLine2').value = member.addressLine2;
    document.getElementById('city').value = member.city;
    document.getElementById('state').value = member.state;
    document.getElementById('zip').value = member.zip;
    document.getElementById('plus4').value = member.plus4;

    hideModal('mailAddressModal');
    showToast('Mail address updated successfully', 'success');
}

// Oil company data store
const oilCompanies = [
    {
        code: 'PETRO',
        name: 'Petro Fuel',
        address: '55 Day Street',
        city: 'Norwalk',
        state: 'CT',
        zip: '06854',
        phone: '(860) 693-7700',
        fax: '',
        email: '',
        contact: 'Monica Faraci',
        contact2: '',
        contact2Ph: '',
        contact2Fx: '',
        notes: ''
    },
    {
        code: 'HOCON',
        name: 'Hocon Gas',
        address: '123 Industrial Park',
        city: 'Torrington',
        state: 'CT',
        zip: '06790',
        phone: '(860) 693-8388',
        fax: '',
        email: '',
        contact: 'Service Desk',
        contact2: '',
        contact2Ph: '',
        contact2Fx: '',
        notes: ''
    },
    {
        code: 'DZEN',
        name: 'Dzen Oil Company',
        address: '456 Main Road',
        city: 'South Windsor',
        state: 'CT',
        zip: '06074',
        phone: '(860) 621-6627',
        fax: '',
        email: '',
        contact: 'Main Office',
        contact2: '',
        contact2Ph: '',
        contact2Fx: '',
        notes: ''
    }
];

function showOilCoInfo() {
    const selectedCode = document.getElementById('oilCoCode').value;
    const company = oilCompanies.find(c => c.code === selectedCode) || oilCompanies[0];

    document.getElementById('oilCoName').value = company.name || '';
    document.getElementById('oilCoCodeEdit').value = company.code || '';
    document.getElementById('oilCoPhone').value = company.phone || '';
    document.getElementById('oilCoContact').value = company.contact || '';
    document.getElementById('oilCoAddress').value = company.address || '';
    document.getElementById('oilCoEmail').value = company.email || '';
    document.getElementById('oilCoNotes').value = company.notes || '';

    showModal('oilCoInfoModal');
}

function saveOilCoInfo() {
    const code = document.getElementById('oilCoCodeEdit').value;
    const company = oilCompanies.find(c => c.code === code);

    if (company) {
        company.name = document.getElementById('oilCoName').value;
        company.phone = document.getElementById('oilCoPhone').value;
        company.contact = document.getElementById('oilCoContact').value;
        company.address = document.getElementById('oilCoAddress').value;
        company.email = document.getElementById('oilCoEmail').value;
        company.notes = document.getElementById('oilCoNotes').value;

        hideModal('oilCoInfoModal');
        showToast('Oil company info updated successfully', 'success');
    }
}

function showManageOilCodes() {
    updateOilCodesTable();
    showModal('manageOilCodesModal');
}

function updateOilCodesTable() {
    const tbody = document.getElementById('oilCodesTableBody');
    tbody.innerHTML = '';

    oilCompanies.forEach(company => {
        const row = document.createElement('tr');
        row.setAttribute('data-code', company.code);
        row.innerHTML = `
            <td>${company.code}</td>
            <td>${company.name}</td>
            <td>${company.phone}</td>
            <td>${company.contact}</td>
            <td>
                <button class="btn btn-sm btn-secondary" onclick="editOilCode('${company.code}')">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="deleteOilCode('${company.code}')">Del</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function editOilCode(code) {
    hideModal('manageOilCodesModal');
    document.getElementById('oilCoCode').value = code;
    showOilCoInfo();
}

function deleteOilCode(code) {
    if (confirm(`Are you sure you want to delete oil company ${code}?`)) {
        const index = oilCompanies.findIndex(c => c.code === code);
        if (index > -1) {
            oilCompanies.splice(index, 1);
            updateOilCodesTable();
            updateOilCoCodeDropdowns();
            showToast(`Oil company ${code} deleted`, 'success');
        }
    }
}

function addNewOilCode() {
    const code = document.getElementById('newOilCodeCode').value.toUpperCase().trim();
    const name = document.getElementById('newOilCodeName').value.trim();
    const phone = document.getElementById('newOilCodePhone').value.trim();
    const contact = document.getElementById('newOilCodeContact').value.trim();

    if (!code || !name) {
        showToast('Code and Company Name are required', 'error');
        return;
    }

    if (oilCompanies.find(c => c.code === code)) {
        showToast('Oil company code already exists', 'error');
        return;
    }

    oilCompanies.push({
        code: code,
        name: name,
        phone: phone,
        contact: contact,
        address: '',
        email: '',
        notes: ''
    });

    // Clear form
    document.getElementById('newOilCodeCode').value = '';
    document.getElementById('newOilCodeName').value = '';
    document.getElementById('newOilCodePhone').value = '';
    document.getElementById('newOilCodeContact').value = '';

    updateOilCodesTable();
    updateOilCoCodeDropdowns();
    showToast(`Oil company ${code} added successfully`, 'success');
}

function updateOilCoCodeDropdowns() {
    const dropdown = document.getElementById('oilCoCode');
    const currentValue = dropdown.value;
    dropdown.innerHTML = '';

    oilCompanies.forEach(company => {
        const option = document.createElement('option');
        option.value = company.code;
        option.textContent = company.code;
        dropdown.appendChild(option);
    });

    // Restore selection if still valid
    if (oilCompanies.find(c => c.code === currentValue)) {
        dropdown.value = currentValue;
    }
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
    const code = document.getElementById('newCoCode').value.toUpperCase().trim();
    const name = document.getElementById('newCoName').value.trim();

    if (!code || !name) {
        showToast('Please fill in Oil Co Code and Name', 'error');
        return;
    }

    // Check if code already exists
    if (oilCompanies.find(c => c.code === code)) {
        showToast('Oil company code already exists', 'error');
        return;
    }

    // Gather all form fields
    const newCompany = {
        code: code,
        name: name,
        address: document.getElementById('newCoAddress').value.trim(),
        city: document.getElementById('newCoCity').value.trim(),
        state: document.getElementById('newCoState').value.trim(),
        zip: document.getElementById('newCoZip').value.trim(),
        phone: document.getElementById('newCoPhone').value.trim(),
        fax: document.getElementById('newCoFax').value.trim(),
        email: document.getElementById('newCoEmail').value.trim(),
        contact: document.getElementById('newCoContact').value.trim(),
        contact2: document.getElementById('newCoContact2').value.trim(),
        contact2Ph: document.getElementById('newCoContact2Ph').value.trim(),
        contact2Fx: document.getElementById('newCoContact2Fx').value.trim(),
        notes: ''
    };

    oilCompanies.push(newCompany);
    updateOilCoCodeDropdowns();

    hideModal('addCompanyModal');
    showToast(`Company ${code} added successfully`, 'success');

    // Clear form
    clearNewCompanyForm();
}

function clearNewCompanyForm() {
    const fields = [
        'newCoCode', 'newCoName', 'newCoAddress', 'newCoCity', 'newCoState', 'newCoZip',
        'newCoPhone', 'newCoFax', 'newCoEmail', 'newCoContact', 'newCoContact2',
        'newCoContact2Ph', 'newCoContact2Fx'
    ];
    fields.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
    });
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

// ==================== REFERRALS BY MEMBER REPORT ====================
function updateReferralsByMemberReport() {
    const container = document.getElementById('referralsByMemberContent');
    if (!container) return;

    // Build a map of referring member ID -> list of referred members
    const referralMap = {};

    sampleMembers.forEach(member => {
        if (member.referredById) {
            const referringId = member.referredById;
            if (!referralMap[referringId]) {
                referralMap[referringId] = [];
            }
            referralMap[referringId].push(member);
        }
    });

    // Get all members who have made referrals
    const referringMembers = sampleMembers.filter(m => referralMap[m.id.toString()]);

    let html = '';

    referringMembers.forEach(referrer => {
        const referrals = referralMap[referrer.id.toString()] || [];

        html += `
            <div class="report-member-section">
                <div class="report-member-header">
                    <span class="report-member-id">${referrer.id}</span>
                    <span class="report-member-name">
                        <span class="report-member-firstname">${referrer.firstName1}</span>
                        <span class="report-member-lastname">${referrer.lastName1}</span>
                    </span>
                </div>
        `;

        referrals.forEach(referred => {
            const dateStr = referred.dateReferred ? formatReportDate(referred.dateReferred) : '';
            html += `
                <div class="report-referral-row">
                    <span class="report-referral-id">${referred.id}</span>
                    <span class="report-referral-firstname">${referred.firstName1}</span>
                    <span class="report-referral-lastname">${referred.lastName1}</span>
                    <span class="report-referral-date">${dateStr}</span>
                </div>
            `;
        });

        html += `
                <div class="report-referred-count">
                    <span class="report-referred-label"># Referred:</span>
                    <span class="report-referred-number">${referrals.length}</span>
                </div>
            </div>
        `;
    });

    // If no referrals found, show a message
    if (referringMembers.length === 0) {
        html = '<div style="text-align: center; padding: 40px; color: #666;">No referrals found in the system.</div>';
    }

    container.innerHTML = html;

    // Update footer date
    const footerDate = document.getElementById('referralsFooterDate');
    if (footerDate) {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        footerDate.textContent = now.toLocaleDateString('en-US', options);
    }
}

function formatReportDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

// ==================== UTILITY FUNCTIONS ====================
function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US');
}
