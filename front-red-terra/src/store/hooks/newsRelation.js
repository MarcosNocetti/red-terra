import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setNewsRelation,
  setError,
  setLoading,
} from "../slices/newsRelationSlice";
import api from "../../services/api";

export function useNewsRelationRequest(id) {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      dispatch(setLoading(true));
      try {
        const { data } = await api.get(`/news/whatsHappening/${id}`);

        dispatch(
          setNewsRelation({
            en: data.data[0]?.newsEn,
            br: data.data[0]?.newsBr,
          })
        );
      } catch (error) {
        dispatch(setError(error));
      }
    }

    if (id) {
      fetchData();
    }
  }, [dispatch, id]);
}
