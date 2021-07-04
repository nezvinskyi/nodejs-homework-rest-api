/* eslint-disable indent */
const express = require('express');
const router = express.Router();
const { addContactSchema } = require('../../utils/validate/schemas');

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require('../../model');

router.get('/', async (req, res, next) => {
  const contacts = await listContacts();
  res.json({
    status: 'success',
    code: 200,
    data: { contacts },
  });
});

router.get('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await getContactById(contactId);
  if (!contact) {
    res.status(404).json({
      status: 'error',
      code: 404,
      message: 'Not found',
    });
  } else {
    res.status(200).json({
      status: 'success',
      code: 200,
      data: contact,
    });
  }
});

router.post('/', async (req, res, next) => {
  const newContact = req.body;
  const { error } = addContactSchema.validate(newContact);
  if (error) {
    res.status(400).json({
      status: 'error',
      code: 400,
      message: error.message,
    });
    return;
  }
  const response = await addContact(newContact);
  res.status(201).json(response);
});

router.delete('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;
  const response = await removeContact(contactId);
  response
    ? res.status(200).json({
        status: 'success',
        code: 200,
        message: 'Contact deleted',
      })
    : res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Not found',
      });
});

router.patch('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;
  const body = req.body;
  const response = await updateContact(contactId, body);
  res.json(response);
});

module.exports = router;
