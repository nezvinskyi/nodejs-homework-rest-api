const fs = require('fs/promises');
// const contacts = require('./contacts.json');
const path = require('path');
require('colors');
const contactsPath = path.join(__dirname, './contacts.json');

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
  } catch (error) {
    error.message = 'Error: cannot read contacts file';
  }
};

const getContactById = async contactId => {
  try {
    const data = await listContacts();
    const contact = data.find(el => el.id === Number(contactId));
    if (!contact) {
      throw new Error('Error: ID is incorrect');
    }
    return contact;
  } catch (error) {
    console.log(error.message.red);
  }
};

const removeContact = async contactId => {
  try {
    const data = await listContacts();
    const idx = data.findIndex(el => el.id === contactId);
    if (idx === -1) {
      throw new Error('Error: ID is incorrect');
    }
    const newContacts = data.filter(el => el.id !== contactId);
    const str = JSON.stringify(newContacts);
    await fs.writeFile(contactsPath, str);
    return true;
  } catch (error) {
    console.log(error.message.red);
  }
};

const addContact = async body => {};

const updateContact = async (contactId, body) => {};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
