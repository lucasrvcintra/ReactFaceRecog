import { Text, View } from 'react-native';
import { Camera } from 'expo-camera';

import { styles } from './styles';
import { useEffect, useState } from 'react';

export function Home() {
  const [permission, setPermission] = useState<null | boolean>(null);

  useEffect(() => {
    const requestCameraPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermission(status === 'granted');
    };

    requestCameraPermission();
  }, []);

  if (permission === null) {
    return <Text>Solicitando permissões...</Text>;
  }
  if (permission === false) {
    return <Text>Permissão para acessar a câmera foi negada.</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} />
    </View>
  );
}
