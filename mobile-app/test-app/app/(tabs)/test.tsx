import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View } from 'react-native-reanimated/lib/typescript/Animated';

export default function TabThreeScreen() {
    return (
        <ParallaxScrollView
          headerBackgroundColor={{ light: '#FA5F55', dark: '#E3735E' }}
          headerImage={<Ionicons size={310} name="settings" style={styles.headerImage} />}>
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Settings</ThemedText>
          </ThemedView>
        </ParallaxScrollView>
      );
    }

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
  });