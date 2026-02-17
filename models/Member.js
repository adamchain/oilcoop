const mongoose = require('mongoose');

const deliveryProgramSchema = new mongoose.Schema({
  program: { type: String, default: 'FLOAT' },
  estimatedGallons: String,
  rate: String,
  heatingYear: String,
});

const memberSchema = new mongoose.Schema({
  // Member Identity
  status: { type: String, enum: ['ACTIVE', 'INACTIVE', 'PROSPECTIVE', 'RESIDENT', 'NO OIL', 'UNKNOWN'], default: 'ACTIVE' },
  recType: { type: String, default: '1' },
  recTypeDropdown: { type: String, default: 'IND' },
  newMemberDate: Date,
  senior: { type: Boolean, default: false },
  
  // Names
  firstName1: String,
  midName1: String,
  lastName1: String,
  suffix1: String,
  firstName2: String,
  midName2: String,
  lastName2: String,
  suffix2: String,
  
  // Contact Information
  streetNo: String,
  streetName: String,
  aptNo: String,
  addressLine2: String,
  city: String,
  state: String,
  zip: String,
  plus4: String,
  ppau: { type: Boolean, default: false },
  starion: { type: Boolean, default: false },
  
  // Phones
  phone1: String,
  phone1Type: { type: String, default: 'HOME' },
  phone1Ext: String,
  phone2: String,
  phone2Type: String,
  phone2Ext: String,
  phone3: String,
  phone3Type: String,
  phone3Ext: String,
  
  // Email
  email: String,
  emailOptedOut: { type: Boolean, default: false },
  callBackDate: Date,
  
  // Oil Company Information
  oilCoCode: String,
  oilId: String,
  propaneStatus: { type: String, enum: ['ACTIVE', 'INACTIVE', 'PROSPECTIVE', 'RESIDENT', 'NO PROPANE', 'UNKNOWN'], default: 'NO PROPANE' },
  propaneStartDate: Date,
  propCoCode: String,
  propaneId: String,
  howJoined: String,
  referral: String,
  
  // Program / Delivery
  deliveryPrograms: [deliveryProgramSchema],
  
  // Notes / Flags
  company: String,
  employer: String,
  note: String,
  electricStatus: { type: String, enum: ['ELECTRIC', 'PENDING', 'INTERESTED', 'UNKNOWN', 'DROPPED'], default: 'UNKNOWN' },
  elecSignUpDate: Date,
  elecStartDate: Date,
  nameKey: String,
  droppedDate: Date,
  referredById: String,
  dateReferred: Date,
  electricityAccountNumber: String,
  theNextStep: String,
  notPaidCurrentYr: { type: Boolean, default: false },
  delinquent: { type: Boolean, default: false },
  nrd01: { type: Boolean, default: false },
  nrdProp: { type: Boolean, default: false },
}, {
  timestamps: true
});

module.exports = mongoose.model('Member', memberSchema);
