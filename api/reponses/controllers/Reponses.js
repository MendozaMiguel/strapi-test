'use strict';

/**
 * Reponses.js controller
 *
 * @description: A set of functions called "actions" for managing `Reponses`.
 */

module.exports = {

  /**
   * Retrieve reponses records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.reponses.search(ctx.query);
    } else {
      return strapi.services.reponses.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a reponses record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.reponses.fetch(ctx.params);
  },

  /**
   * Count reponses records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.reponses.count(ctx.query);
  },

  /**
   * Create a/an reponses record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.reponses.add(ctx.request.body);
  },

  /**
   * Update a/an reponses record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.reponses.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an reponses record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.reponses.remove(ctx.params);
  }
};
