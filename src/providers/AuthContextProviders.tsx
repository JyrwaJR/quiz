import { AuthContext } from 'context/auth';
import React from 'react';
import { UserI } from 'types/user';

interface AuthProviderProps {
  children: React.ReactNode;
}
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = React.useState<UserI | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  return (
    <AuthContext.Provider value={{ user: user, loading: isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
