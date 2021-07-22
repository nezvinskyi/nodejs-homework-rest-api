/* eslint-disable indent */
const { Router } = require('express');
const router = Router();
const { contacts: ctrl } = require('../controllers/contacts');

const { validate, authenticate } = require('../middleware');

const {
  addContactValidator,
  updateContactValidator,
  updateUser,
} = require('../utils/validate/schemas');

router.get('/', authenticate, ctrl.listContacts);

router.get('/:contactId', authenticate, ctrl.getContactById);

router.post('/', validate(addContactValidator), authenticate, ctrl.addContact);

router.put('/:contactId', validate(updateContactValidator), authenticate, ctrl.updateContactById);

router.delete('/:contactId', authenticate, ctrl.deleteContactById);

router.patch('/:contactId/favorite', validate(updateUser), authenticate, ctrl.updateStatusContact);

module.exports = router;
