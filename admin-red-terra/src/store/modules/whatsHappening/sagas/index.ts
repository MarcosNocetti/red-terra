import { takeLatest } from "redux-saga/effects";
import { getWhatsHappening } from "./getWhatsHappening";
import { updateWhatHappening } from "./updateWhatHappening";
import { createNews } from "./createNews";
import { getNews } from "./getNews";
import { updateNews } from "./updateNews";
import { deleteNews } from "./deleteNews";
import { getNewsByRelation } from "./getNewsByRelation";
// eslint-disable-next-line
export default [
  takeLatest("@whatsHappening/GET_HAPPENING_REQUEST", getWhatsHappening),
  takeLatest(
    "@whatsHappening/UPDATE_WHATS_HAPPENING_REQUEST",
    updateWhatHappening
  ),
  takeLatest("@whatsHappening/CREATE_NEWS_REQUEST", createNews),
  takeLatest("@whatsHappening/GET_NEWS_REQUEST", getNews),
  takeLatest("@whatsHappening/UPDATE_NEWS_REQUEST", updateNews),
  takeLatest("@whatsHappening/DELETE_NEWS_REQUEST", deleteNews),
  takeLatest("@whatsHappening/GET_NEWS_BY_RELATION_REQUEST", getNewsByRelation),
];
