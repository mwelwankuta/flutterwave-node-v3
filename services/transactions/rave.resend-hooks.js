const { logger } = require('../../utils/logger');
const { validator } = require('../../utils/validator');
const { fetchSchema } = require('../schema/base');

async function service(data, _rave) {
  validator(fetchSchema, data);
  logger(`Resend failed webhooks`, _rave);
  data.method = 'POST';
  const { body: response } = await _rave.request(
    `v3/transactions/${data.id}/resend-hook`,
    data,
  );
  return response;
}

module.exports = service;
