import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./slices/languageSlice";
import contactSlice from "./slices/contactSlice";
import footerSlice from "./slices/footerSlice";
import whoWeAreSlice from "./slices/whoWeAreSlice";
import whatWeDoSlice from "./slices/whatWeDoSlice";
import whatsHappeningSlice from "./slices/whatsHappeningSlice";
import awardsSlice from "./slices/awardsSlice";
import documentaryRelationSlice from "./slices/documentaryRelationSlice";
import newsRelationSlice from "./slices/newsRelationSlice";
const store = configureStore({
  reducer: {
    language: languageSlice,
    contact: contactSlice,
    footer: footerSlice,
    whoWeAre: whoWeAreSlice,
    whatWeDo: whatWeDoSlice,
    whatsHappening: whatsHappeningSlice,
    awards: awardsSlice,
    documentaryRelation: documentaryRelationSlice,
    newsRelation: newsRelationSlice,
  },
});

export default store;
