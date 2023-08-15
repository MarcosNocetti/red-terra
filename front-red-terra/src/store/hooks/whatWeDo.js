import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWhatWeDo, setError, setLoading } from '../slices/whatWeDoSlice';
import api from '../../services/api';

export function useWhatWeDoRequest() {
  const dispatch = useDispatch();
  const { whatWeDo, loading } = useSelector((state) => state.whatWeDo);

  useEffect(() => {
    async function fetchData() {
      dispatch(setLoading(true));

      try {
        const { data } = await api.get('/whatWeDo');

        const englishWhatWeDoIndex = data.data.findIndex(
          (whatWeDo) => whatWeDo.language === 'en'
        );
        const portugueseWhatWeDoIndex = data.data.findIndex(
          (whatWeDo) => whatWeDo.language === 'br'
        );

        dispatch(
          setWhatWeDo({
            en: data.data[englishWhatWeDoIndex],
            br: data.data[portugueseWhatWeDoIndex],
          })
        );
      } catch (error) {
        dispatch(setError(error));
      }
    }

    if(!whatWeDo && !loading) {
      fetchData();
    }
    
  }, [dispatch]);
}
