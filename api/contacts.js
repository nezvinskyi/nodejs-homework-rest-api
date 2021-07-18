/* eslint-disable indent */
const { Router } = require('express');
const router = Router();
const { contacts: ctrl } = require('../controllers/contacts');

const validateMiddleware = require('../middleware/validateMiddleware');

const { addContactValidator, updateContactValidator } = require('../utils/validate/schemas');

router.get('/', ctrl.listContacts);

router.get('/:contactId', ctrl.getContactById);

router.post('/', validateMiddleware(addContactValidator), ctrl.addContact);

router.put('/:contactId', validateMiddleware(updateContactValidator), ctrl.updateContactById);

router.delete('/:contactId', ctrl.deleteContactById);

router.patch('/:contactId/favorite', ctrl.updateStatusContact);

module.exports = router;
