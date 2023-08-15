import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWhoWeAre, setError, setLoading } from '../slices/whoWeAreSlice';
import api from '../../services/api';

export function useWhoWeAreRequest() {
  const dispatch = useDispatch();
  const { whoWeAre, loading } = useSelector((state) => state.whoWeAre);

  useEffect(() => {
    async function fetchData() {
      dispatch(setLoading(true));

      try {
        const { data } = await api.get('/whoWeAre');

        const englishWhoWeAreIndex = data.data.findIndex(
          (whoWeAre) => whoWeAre.language === 'en'
        );
        const portugueseWhoWeAreIndex = data.data.findIndex(
          (whoWeAre) => whoWeAre.language === 'br'
        );

        dispatch(
          setWhoWeAre({
            en: data.data[englishWhoWeAreIndex],
            br: data.data[portugueseWhoWeAreIndex],
          })
        );
      } catch (error) {
        dispatch(setError(error));
      }
    }

    if(!whoWeAre && !loading) {
      fetchData();
    }
    
  }, [dispatch]);
}
