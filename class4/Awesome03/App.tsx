import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Switch,
    ScrollView,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import React, { useState } from 'react';
import * as Yup from 'yup';

const passwordSchema = Yup.object().shape({
    passwordLength: Yup.number()
        .min(4, "At least 4 characters.")
        .max(16, "Maximum of 16 characters")
        .required("Password length is a required field"),
});

export default function App() {
    const [password, setPassword] = useState("");
    const [isPassGenerated, setIsPassGenerated] = useState(false);

    const [passwordLength, setPasswordLength] = useState(8);
    const [lowerCase, setLowerCase] = useState(true);
    const [upperCase, setUpperCase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);

    const generatePasswordString = () => {
        if (!lowerCase && !upperCase && !numbers && !symbols) {
            alert("Please select at least one character type.");
            return;
        }

        const passwordLengthValid = passwordSchema.validateSync({ passwordLength });
        const characterList = buildCharacterList();

        if (characterList.length === 0) {
            alert("Character list is empty. Please select at least one character type.");
            return;
        }

        const passwordResult = createPassword(characterList, passwordLength);
        setPassword(passwordResult);
        setIsPassGenerated(true);
    };

    const buildCharacterList = () => {
        let characterList = "";

        const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
        const digitChars = "1234567890";
        const symbolsChars = "~!@#$%^&*()_+-=";

        if (lowerCase) characterList += lowerCaseChars;
        if (upperCase) characterList += upperCaseChars;
        if (numbers) characterList += digitChars;
        if (symbols) characterList += symbolsChars;

        return characterList;
    };

    const createPassword = (characters: string, length: number) => {
        let result = "";
        for (let i = 0; i < length; i++) {
            const characterIndex = Math.floor(Math.random() * characters.length);
            result += characters.charAt(characterIndex);
        }
        return result;
    };

    const resetPassword = () => {
        setPassword("");
        setIsPassGenerated(false);
        setLowerCase(true);
        setUpperCase(false);
        setSymbols(false);
        setNumbers(false);
        setPasswordLength(8);
    };

    return (
        <ScrollView>
            <SafeAreaView>
                <View style={styles.appContainer}>
                    <Text style={styles.headingText}>Generate a Password</Text>
                    <TextInput
                        style={styles.input}
                        keyboardType="numeric"
                        value={passwordLength.toString()}
                        onChangeText={(text) => setPasswordLength(Number(text))}
                        placeholder="Password Length"
                    />
                    <View style={styles.switchContainer}>
                        <Switch value={lowerCase} onValueChange={setLowerCase} />
                        <Text>Include Lowercase</Text>
                    </View>
                    <View style={styles.switchContainer}>
                        <Switch value={upperCase} onValueChange={setUpperCase} />
                        <Text>Include Uppercase</Text>
                    </View>
                    <View style={styles.switchContainer}>
                        <Switch value={numbers} onValueChange={setNumbers} />
                        <Text>Include Numbers</Text>
                    </View>
                    <View style={styles.switchContainer}>
                        <Switch value={symbols} onValueChange={setSymbols} />
                        <Text>Include Symbols</Text>
                    </View>
                    <TouchableOpacity onPress={generatePasswordString}>
                        <Text style={[styles.button, styles.genPass]}>Generate Password</Text>
                    </TouchableOpacity>
                    {isPassGenerated && (
                        <View>
                            <Text style={styles.password}>Generated Password: {password}</Text>
                        </View>
                    )}
                    <TouchableOpacity onPress={resetPassword} >
                        <Text style={[styles.button, styles.reset]}>Reset</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    appContainer: {
        paddingVertical: 50,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    headingText: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 8
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        width: '100%',
        textAlign: 'center',
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 8,
        margin: 8,
        fontSize: 18,
    },
    genPass: {
        backgroundColor: "blue",
        color: "white",
    },
    reset: {
        backgroundColor: "red",
        color: "white",
    },
    password: {
        margin: 8,
        color: "#33ecff",
        fontSize: 18
    }
});
