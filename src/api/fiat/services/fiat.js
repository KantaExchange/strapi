'use strict';

/**
 * fiat service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fiat.fiat');
