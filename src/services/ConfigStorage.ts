import AsyncStorage from '@react-native-async-storage/async-storage';

const messageKey = "@abrenozap/message";

class ConfigStorage {
    async loadMessage(): Promise<string> {
        const result = await AsyncStorage.getItem(messageKey);

        return result ?? ""
    }

    async setMessage(value: string): Promise<void> {
        await AsyncStorage.setItem(messageKey, value);
    }
}

const storage = new ConfigStorage();

export { storage }