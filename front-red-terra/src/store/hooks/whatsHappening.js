import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setWhatsHappening,
  setError,
  setLoading,
} from "../slices/whatsHappeningSlice";
import api from "../../services/api";

export function useWhatsHappeningRequest() {
  const dispatch = useDispatch();
  const { whatsHappening, loading } = useSelector(
    (state) => state.whatsHappening
  );

  useEffect(() => {
    async function fetchData() {
      dispatch(setLoading(true));

      try {
        const { data } = await api.get("/whatsHappening");

        const englishWhatsHappeningIndex = data.data.findIndex(
          (whatsHappening) => whatsHappening.language === "en"
        );
        const portugueseWhatsHappeningIndex = data.data.findIndex(
          (whatsHappening) => whatsHappening.language === "br"
        );

        const redCartaEn = data.data[englishWhatsHappeningIndex]?.news.filter(
          (news) => news.isRedCarta === true
        );
        const redCartaBr = data.data[
          portugueseWhatsHappeningIndex
        ]?.news.filter((news) => news.isRedCarta === true);
        redCartaEn.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        redCartaBr.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        const newsEn = data.data[englishWhatsHappeningIndex]?.news.filter(
          (news) => news.isRedCarta === false
        );
        const newsBr = data.data[portugueseWhatsHappeningIndex]?.news.filter(
          (news) => news.isRedCarta === false
        );

        dispatch(
          setWhatsHappening({
            en: {
              ...data.data[englishWhatsHappeningIndex],
              redCarta: redCartaEn,
              news: newsEn,
            },
            br: {
              ...data.data[portugueseWhatsHappeningIndex],
              redCarta: redCartaBr,
              news: newsBr,
            },
          })
        );
      } catch (error) {
        dispatch(setError(error));
      }
    }

    if (!whatsHappening && !loading) {
      fetchData();
    }
  }, [dispatch]);
}
