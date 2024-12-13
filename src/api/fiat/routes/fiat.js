'use strict';

/**
 * fiat router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::fiat.fiat');
