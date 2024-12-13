'use strict';

/**
 * exchange-time service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::exchange-time.exchange-time');
