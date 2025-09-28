const express = require('express');
const { ObjectId } = require('mongodb');
const { getDB } = require('../db');

const router = express.Router();

// GET all contacts
router.get('/', async (req, res) => {
  try {
    const db = getDB();
    const contacts = await db.collection('contacts').find({}).toArray();
    res.json(contacts);
  } catch (err) {
    console.error('GET /contacts error:', err);
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

// GET one contact by query parameter ?id=<ObjectId>
router.get('/by-id', async (req, res) => {
  try {
    const { id } = req.query;
    if (!id || !ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Missing or invalid id query param' });
    }
    const db = getDB();
    const doc = await db.collection('contacts').findOne({ _id: new ObjectId(id) });
    if (!doc) return res.status(404).json({ error: 'Contact not found' });
    res.json(doc);
  } catch (err) {
    console.error('GET /contacts/by-id error:', err);
    res.status(500).json({ error: 'Failed to fetch contact' });
  }
});

module.exports = router;
