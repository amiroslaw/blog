import {registerPlugin} from '@scullyio/scully';
import * as global from '../../src/app/services/globals';

// Create url tag from the Polish tag name
const tagPlugin = async (route, config = {}) => {
  const routes = [];
  for (const tag of global.tagsName.values()) {
    routes.push({route: '/tags/' + tag});
  }
  return routes;
};

// DO NOT FORGET TO REGISTER THE PLUGIN
const validator = async conf => [];
registerPlugin('router', 'tagsPlugin', tagPlugin, validator);
