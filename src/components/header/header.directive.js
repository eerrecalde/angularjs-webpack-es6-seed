import tpl from './header.tpl.html';

function drv() {
  const vm = {};

  vm.template = tpl;
  vm.replace = true;

  return vm;
}

export default drv;
