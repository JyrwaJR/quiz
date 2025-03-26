import React from 'react';
import { AuthContextI } from 'types/authContext';

export const AuthContext = React.createContext<AuthContextI | null>(null);
