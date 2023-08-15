export function getFooterLinksRequest() {
  return {
    type: '@footer/GET_FOOTER_LINKS_REQUEST',
  }
}

export function getFooterLinksSuccess(footerLinks: any[], type: string) {
  return {
    type: '@footer/GET_FOOTER_LINKS_SUCCESS',
    payload: { footerLinks, type }
  }
}

export function getFooterLinksFailure(type: string, message: string) {
  return {
    type: '@footer/GET_FOOTER_LINKS_FAILURE',
  }
}
