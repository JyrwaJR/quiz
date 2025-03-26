import { Container } from 'components/Container';
import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import 'styles/global.css';
export default function Auth() {
  const router = useRouter();
  return (
    <Container>
      <View className="flex h-screen flex-row border border-red-500">
        <View>
          <Text>Auth</Text>
          <Pressable onPress={() => router.push('/')} className="text-black">
            <Text>Home</Text>
          </Pressable>
        </View>
      </View>
    </Container>
  );
}
