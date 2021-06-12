import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SliceState, licenseSlice, Licenses } from '../ducks/Licences';

type ReturnValue = {
  licenses: Licenses[];
  isLoading: boolean;
};

// レンダリングの初回時のみ、Githubからライセンス一覧を取得するCustom Hooks
// Reduxを使う場合は本サンプルのように実装すれば良い。
// Reduxを使わない場合は、Stateを直接書き換えて上げれば良い。
const useGetLicenses = (): ReturnValue => {
  // const [licenses, setLicenses] = useState<Licenses[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  // Redux StoreからStateの取得
  const licenses = useSelector<SliceState, Licenses[]>(
    (state) => state.licenses,
  );
  const dispatch = useDispatch();
  const { getLicenses } = licenseSlice.actions;

  useEffect(() => {
    const load = async (): Promise<void> => {
      setIsLoading(true);

      try {
        const licensesData = await axios.get<Licenses[]>(
          'https://api.github.com/licenses',
        );
        dispatch(getLicenses({ licenses: licensesData.data }));
      } catch (err) {
        throw new Error(err);
      } finally {
        setIsLoading(false);
      }
    };

    void load();
  }, [dispatch, getLicenses]);

  return { licenses, isLoading };
};

export default useGetLicenses;
