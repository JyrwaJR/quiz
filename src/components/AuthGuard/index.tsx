import { usePathname, useRouter } from 'expo-router';
import { useSearchParams } from 'expo-router/build/hooks';
import { useAuth } from 'hooks';
import React from 'react';

interface Props {
  children: React.ReactNode;
}
export const AuthGuard = ({ children }: Props) => {
  const router = useRouter();
  const search = useSearchParams();
  const redirectUrl = search.get('redirectUrl');
  const pathName = usePathname();
  const { user, loading } = useAuth();

  React.useEffect(() => {
    if (loading) return;
    if (!user && !pathName.startsWith('/auth')) {
      router.replace('/auth');
    }
  }, [user, pathName]);

  return <>{children}</>;
};
