import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAwards, setError, setLoading } from '../slices/awardsSlice';
import api from '../../services/api';

export function useAwardsRequest() {
  const dispatch = useDispatch();
  const { awards, loading } = useSelector((state) => state.awards);

  useEffect(() => {
    async function fetchData() {
      dispatch(setLoading(true));

      try {
        const { data } = await api.get('/awards');
        
        const englishAwards = data.data.filter(dado => {
          return dado.language === "en";
        });
        const portugueseAwards = data.data.filter(dado => {
          return dado.language === "br";
        });

        dispatch(
          setAwards({
            en: englishAwards,
            br: portugueseAwards,
          })
        );
      } catch (error) {
        dispatch(setError(error));
      }
    }
    
    if(!awards && !loading) {
      fetchData();
    }

  }, [dispatch]);
}
