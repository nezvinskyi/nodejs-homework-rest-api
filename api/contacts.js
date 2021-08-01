const { Router } = require('express');
const router = Router();
const { contacts: ctrl } = require('../controllers/');

const { validate, authenticate } = require('../middleware');

const { addContactValidator, updateContactValidator } = require('../utils/validate/schemas');

/*
 * pagination
 * http://localhost:1234/api/v1/contacts?page=1&limit=20
 */
router.get('/', authenticate, ctrl.listContacts);

router.get('/:contactId', authenticate, ctrl.getContactById);

router.post('/', validate(addContactValidator), authenticate, ctrl.addContact);

router.put('/:contactId', validate(updateContactValidator), authenticate, ctrl.updateContactById);

router.delete('/:contactId', authenticate, ctrl.deleteContactById);

router.patch('/:contactId/favorite', authenticate, ctrl.toggleFavoriteContact);

module.exports = router;
