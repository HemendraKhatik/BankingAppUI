import { useEffect } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import BG from '../assets/bg2.png';
import Header from '../components/RequestMoney/Header';
import Main from '../components/RequestMoney/Main';
import SystemNavigationBar from 'react-native-system-navigation-bar';

function RequestScreen({ route }) {

    useEffect(() => {
       // Removing default bottom navigation bar
        SystemNavigationBar.immersive();
    }, [])
    return (
        <ImageBackground source={BG} style={styles.container}>
            <Header />
            {/* Here we're passing user whome we're sending the money and the amount which we recieved from the previous screen here */}
            <Main {...route.params} />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: "auto",
        alignItems: 'center',
        padding: 16
    }
});

export default RequestScreen;