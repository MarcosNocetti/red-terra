import { combineReducers } from 'redux';

import { auth } from './auth/reducer';
import { popupReducer as popup } from './popup/reducer';
import { users } from './users/reducer';
import { contacts } from './contacts/reducer';
import { headers } from './headers/reducer';
import { home } from './home/reducer';
import { footer } from './footer/reducer';
import { awards } from './awards/reducer';
import { whatsHappening } from './whatsHappening/reducer';
import { whatWeDo } from './whatWeDo/reducer';
import { whoWeAre } from './whoWeAre/reducer';
import { base64 } from './convertBase64/reducer';

export default combineReducers({
  auth,
  popup,
  contacts,
  users,
  home,
  headers,
  footer,
  awards,
  whatsHappening,
  whatWeDo,
  whoWeAre,
  base64
});
