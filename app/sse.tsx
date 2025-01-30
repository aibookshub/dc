import React from "react";
import { Text, View, Dimensions } from "react-native";
import Pdf from "react-native-pdf";

const PdfResource = { uri: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", cache: true };

const SSE = () => {
    return (
        <View>
            <Pdf
                source={PdfResource}
            />
        </View>
    );
};

export default SSE;
