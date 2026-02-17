const mongoose = require('mongoose');

const renewalFeeSchema = new mongoose.Schema({
  billingYear: String,
  feeWaived: { type: String, enum: ['Yes', 'No'], default: 'Yes' },
  dateReceived: Date,
  amountReceived: String,
  paymentMethod: String,
  newRenew: { type: String, default: 'Renew' },
  checkNumber: String,
});

const paymentSchema = new mongoose.Schema({
  memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'Member', required: true },
  
  // Member Status (for payment screen)
  status: { type: String, enum: ['ACTIVE', 'INACTIVE', 'PROSPECTIVE', 'RESIDENT', 'NO OIL', 'UNKNOWN'], default: 'ACTIVE' },
  propaneStatus: { type: String, enum: ['ACTIVE', 'INACTIVE', 'PROSPECTIVE', 'RESIDENT', 'NO PROPANE', 'UNKNOWN'], default: 'NO PROPANE' },
  
  // Flags
  waiveFeeForYear: { type: Boolean, default: false },
  senior: { type: Boolean, default: false },
  lifetimeMember: { type: Boolean, default: false },
  delinquent: { type: Boolean, default: false },
  noRecentDels: { type: Boolean, default: false },
  
  // Registration Fee
  registrationFee: String,
  dtPaid: Date,
  checkCredit: String,
  registrationPaid: { type: Boolean, default: false },
  registrationWaived: { type: Boolean, default: false },
  notPaidCurrentYr: { type: Boolean, default: false },
  paymentNotes: String,
  lifetimeFriend: String,
  
  // Credit Card Information
  creditCardType: String,
  creditCardNumber: String,
  creditCardExpiration: String,
  nameOnCreditCard: String,
  
  // Renewal Fees
  renewalFees: [renewalFeeSchema],
  deliveryHistory: { type: Boolean, default: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('Payment', paymentSchema);
