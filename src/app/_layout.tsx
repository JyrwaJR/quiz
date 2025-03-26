import { AuthGuard } from 'components/AuthGuard';
import { Slot } from 'expo-router';
import { AuthProvider } from 'providers';
import 'styles/global.css';

export default function layout() {
  return (
    <AuthProvider>
      <AuthGuard>
        <Slot />
      </AuthGuard>
    </AuthProvider>
  );
}
