import { View } from 'react-native';

type Props = {
  children: React.ReactNode;
};
export const Container = ({ children }: Props) => {
  return <View className="container">{children}</View>;
};
