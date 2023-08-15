import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setContact, setError, setLoading } from '../slices/contactSlice';
import api from '../../services/api';

export function useContactRequest() {
  const dispatch = useDispatch();
  const { contact, loading } = useSelector((state) => state.contact);

  useEffect(() => {
    async function fetchData() {
      dispatch(setLoading(true));

      try {
        const { data } = await api.get('/contact');

        const englishContactIndex = data.data.findIndex(
          (contact) => contact.language === 'en'
        );
        const portugueseContactIndex = data.data.findIndex(
          (contact) => contact.language === 'br'
        );

        dispatch(
          setContact({
            en: data.data[englishContactIndex],
            br: data.data[portugueseContactIndex],
          })
        );
      } catch (error) {
        dispatch(setError(error));
      }
    }

    if(!contact && !loading) {
      fetchData();
    }
    
  }, [dispatch]);
}
