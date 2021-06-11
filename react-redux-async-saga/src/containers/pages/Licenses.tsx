import { VFC } from 'react';
import LicenseList from '../../components/pages/Licenses';
import useGetLicenses from '../../hooks/repositories';

const EnhancedLicenseList: VFC = () => {
  const { licenses, isLoading } = useGetLicenses();

  return <LicenseList licenses={licenses} isLoading={isLoading} />;
};

export default EnhancedLicenseList;
