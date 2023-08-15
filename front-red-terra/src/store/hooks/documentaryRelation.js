import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setDocumentaryRelation, setError, setLoading } from '../slices/documentaryRelationSlice';
import api from '../../services/api';


export function useDocumentaryRelationRequest(id) {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      dispatch(setLoading(true));
      try {
        const { data } = await api.get(`/documentary/${id}`);

        dispatch(
          setDocumentaryRelation({
            en: data.data[0]?.documentaryEn,
            br: data.data[0]?.documentaryBr
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


