import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import popup from './popup/sagas';
import users from './users/sagas';
import contacts from './contacts/sagas';
import home from './home/sagas';
import headers from './headers/sagas';
import footer from './footer/sagas';
import awards from './awards/sagas';
import whatsHappening from './whatsHappening/sagas';
import WhatWeDo from './whatWeDo/sagas';
import whoWeAre  from './whoWeAre/sagas';
import base64 from './convertBase64/sagas';

export default function* rootSaga(): any {
  return yield all([
    ...auth,
    ...users,
    ...popup,
    ...contacts,
    ...home,
    ...headers,
    ...footer,
    ...awards,
    ...whatsHappening,
    ...WhatWeDo,
    ...whoWeAre,
    ...base64
  ]);
}
