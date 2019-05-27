import constants from './constants';

function appendConstants(a) {
  a.constant('productTypes', constants.productTypes).constant(
    'MetadataConfig',
    constants.MetadataConfig,
  );
  return a;
}

export default appendConstants;
