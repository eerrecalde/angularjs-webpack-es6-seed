/**
 *
 * @param {function} app Angular object
 * @param {string} env Environment variable value
 */
const ENVIRONMENTS = {
  development: () => import('./config.development'),
  production: () => import('./config.production'),
  local: () => import('./config.local'),
  qa: () => import('./config.qa'),
};

export default function configIndex(app, env) {
  const currentEnv = Object.keys(ENVIRONMENTS).indexOf(env) === -1 ? 'development' : env;

  return ENVIRONMENTS[currentEnv].call().then(Config => Config.default(app));
}
