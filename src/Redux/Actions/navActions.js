export const NAV_UPDATE = 'NAV_UPDATE';

export const navActionsObject = {
  NAV_UPDATE: 'NAV_UPDATE',
  logo: ''
}

export function navUpdate(input) {
  console.log(window.location.pathname);
  return { type: NAV_UPDATE, payload: input }
}

export default { navUpdate };
