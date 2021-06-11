import axios from 'axios';
import { useEffect, useState } from 'react';

export type Licenses = {
  key: string;
  name: string;
  // eslint-disable-next-line camelcase
  spdx_id: string;
  url: string;
  // eslint-disable-next-line camelcase
  node_id: string;
};

type ReturnValue = {
  licenses: Licenses[];
  isLoading: boolean;
};

// レンダリングの初回時のみ、Githubからライセンス一覧を取得するCustom Hooks
const useGetLicenses = (): ReturnValue => {
  const [licenses, setLicenses] = useState<Licenses[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const load = async (): Promise<void> => {
      setIsLoading(true);

      try {
        const licensesData = await axios.get<Licenses[]>(
          'https://api.github.com/licenses',
        );
        setLicenses(licensesData.data);
      } catch (err) {
        throw new Error(err);
      } finally {
        setIsLoading(false);
      }
    };

    void load();
  }, []);

  return { licenses, isLoading };
};

export default useGetLicenses;
