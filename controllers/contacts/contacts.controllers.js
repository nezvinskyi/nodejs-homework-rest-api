const { contact: service } = require('../../services');
const HTTP_STATUS = require('../../utils/httpStatusCodes');

const listContacts = async (req, res, next) => {
  const filter = {
    owner: req.user._id,
    ...req.query,
  };
  console.log('filter :>> ', filter);
  try {
    const result = await service.listContacts(filter);
    res.status(HTTP_STATUS.SUCCESS).json({
      status: 'Success',
      code: HTTP_STATUS.SUCCESS,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getContactById = async (req, res, next) => {
  const { contactId } = req.params;

  try {
    const result = await service.getContactById(contactId);

    if (!result) {
      return res.status(HTTP_STATUS.NOT_FOUND).json({ message: 'id not found' });
    }

    res.status(HTTP_STATUS.SUCCESS).json({
      status: 'Success',
      code: HTTP_STATUS.SUCCESS,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

const addContact = async (req, res, next) => {
  const { body } = req;
  try {
    const result = await service.addContact(body);

    if (!result) {
      req.status(HTTP_STATUS.BAD_REQUEST).json({
        status: 'Error',
        code: HTTP_STATUS.BAD_REQUEST,
        message: 'Bad request',
      });
    }

    res.status(HTTP_STATUS.CREATED).json({
      status: 'Success',
      code: HTTP_STATUS.CREATED,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

const updateContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const { body } = req;

  try {
    const result = await service.updateContactById(contactId, body);
    if (!result) {
      res.status(HTTP_STATUS.NOT_FOUND).json({
        status: 'Error',
        code: HTTP_STATUS.NOT_FOUND,
        message: 'Not found',
      });
    }
    res.status(HTTP_STATUS.SUCCESS).json({
      status: 'Success',
      code: HTTP_STATUS.SUCCESS,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

const deleteContactById = async (req, res, next) => {
  const { contactId } = req.params;
  try {
    const result = await service.deleteContactById(contactId);

    if (!result) {
      res.status(HTTP_STATUS.NOT_FOUND).json({
        status: 'Error',
        code: HTTP_STATUS.NOT_FOUND,
        message: 'Not found',
      });
    }
    res.status(HTTP_STATUS.SUCCESS).json({ id: contactId });
  } catch (error) {
    next(error);
  }
};

const updateStatusContact = async (req, res, next) => {
  const { body } = req;
  const { contactId } = req.params;

  if (!body.hasOwnProperty('favorite')) {
    return res.status(400).json({ message: 'missing field favorite' });
  }

  try {
    const result = await service.updateContactById(contactId, body);

    if (!result) {
      res.status(HTTP_STATUS.NOT_FOUND).json({
        status: 'Error',
        code: HTTP_STATUS.NOT_FOUND,
        message: 'Not found',
      });
    }

    res.status(HTTP_STATUS.SUCCESS).json({
      status: 'Success',
      code: HTTP_STATUS.SUCCESS,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContactById,
  deleteContactById,
  updateStatusContact,
};
