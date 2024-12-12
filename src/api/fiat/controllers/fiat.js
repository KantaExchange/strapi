'use strict';

/**
 * fiat controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::fiat.fiat');
