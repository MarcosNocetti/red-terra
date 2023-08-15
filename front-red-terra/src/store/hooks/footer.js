import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFooter, setError, setLoading } from '../slices/footerSlice';
import api from '../../services/api';

export function useFooterRequest() {
  const dispatch = useDispatch();
  const { footer, loading } = useSelector((state) => state.footer);

  useEffect(() => {
    async function fetchData() {
      dispatch(setLoading(true));

      try {
        const { data } = await api.get('/footer');

        const englishFooterIndex = data.data.findIndex(
          (footer) => footer.language === 'en'
        );
        const portugueseFooterIndex = data.data.findIndex(
          (footer) => footer.language === 'br'
        );

        dispatch(
          setFooter({
            en: data.data[englishFooterIndex],
            br: data.data[portugueseFooterIndex],
            links: data.data[englishFooterIndex].links,
          })
        );
      } catch (error) {
        dispatch(setError(error));
      }
    }

    if(!footer && !loading) {
      fetchData();
    }
    
  }, [dispatch]);
}
