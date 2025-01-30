import { Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import 'expo-dev-client';

export default function Index() {
    const router = useRouter();

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <TouchableOpacity onPress={() => router.push("/sse")}>
                <Text style={{ color: "blue", textDecorationLine: "underline" }}>
                    Click to open SEE
                </Text>
            </TouchableOpacity>
        </View>
    );
}
