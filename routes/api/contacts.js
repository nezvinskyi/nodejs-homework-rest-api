const express = require('express');
const router = express.Router();
const { listContacts, getContactById, removeContact } = require('../../model');

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

// router.post('/', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

router.delete('/:contactId', async (req, res, next) => {
  const { contactId } = req.params;
  const response = await removeContact(Number(contactId));
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

// router.patch('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

module.exports = router;
