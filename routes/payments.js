const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');

// GET all payments
router.get('/', async (req, res) => {
  try {
    const payments = await Payment.find().populate('memberId');
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET payment by member ID
router.get('/member/:memberId', async (req, res) => {
  try {
    let payment = await Payment.findOne({ memberId: req.params.memberId }).populate('memberId');
    
    if (!payment) {
      // Create default payment record if it doesn't exist
      payment = new Payment({ memberId: req.params.memberId });
      await payment.save();
      payment = await Payment.findById(payment._id).populate('memberId');
    }
    
    res.json(payment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET single payment by ID
router.get('/:id', async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id).populate('memberId');
    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }
    res.json(payment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST create new payment
router.post('/', async (req, res) => {
  try {
    const payment = new Payment(req.body);
    await payment.save();
    res.status(201).json(payment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT update payment
router.put('/:id', async (req, res) => {
  try {
    const payment = await Payment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('memberId');
    
    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }
    res.json(payment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT update payment by member ID
router.put('/member/:memberId', async (req, res) => {
  try {
    let payment = await Payment.findOne({ memberId: req.params.memberId });
    
    if (!payment) {
      payment = new Payment({ memberId: req.params.memberId, ...req.body });
      await payment.save();
    } else {
      Object.assign(payment, req.body);
      await payment.save();
    }
    
    payment = await Payment.findById(payment._id).populate('memberId');
    res.json(payment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE payment
router.delete('/:id', async (req, res) => {
  try {
    const payment = await Payment.findByIdAndDelete(req.params.id);
    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }
    res.json({ message: 'Payment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
