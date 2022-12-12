import { useEffect, useRef, useState } from "react"
import { Button, Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import NfcManager, {NfcEvents} from "react-native-nfc-manager";
import { useDispatch, useSelector } from "react-redux";
import { getTagData, loadTag } from "../store/tag";
import AndroidPrompt from "./AndroidPrompt";


function ScanTag() {
    const androidPromptRef = useRef()
    const dispatch = useDispatch()

    // const store = useSelector((state) => state)
    // useEffect(() => {
    //     console.log('222',store)
    // }, [store])


    useEffect(() => {
        // Ustawiamy EventListener który wykona callback `(tag) => {...` gdy zeskanujemy tag
        NfcManager.setEventListener(NfcEvents.DiscoverTag, (tag) => {
            androidPromptRef.current.setVisible(false)
            NfcManager.unregisterTagEvent() // Wyłącza możliwość zeskanowania taga
            // console.warn('tag found', tag) // Wyświetla warna ze wszystkim co ma tag
            console.log('tag::', tag)
            dispatch(getTagData(tag.id))
        })

        return () => {
            NfcManager.setEventListener(NfcEvents.DiscoverTag, null)
        }
    }, [])

    async function scanTag() {
        androidPromptRef.current.setVisible(true)
        await NfcManager.registerTagEvent() // Aktywuje możliowść zeskanowania taga
    }

    return (
        <>
            <View style={styles.wrapper}>
                <TouchableOpacity style={styles.btn} onPress={scanTag} accessibilityLabel={'Zeskanuj nowy produkt'} title={'Zeskanuj nowy produkt'}>
                    <Text style={styles.text}>Zeskanuj nowy produkt</Text>
                </TouchableOpacity>
            </View>
            <AndroidPrompt ref={androidPromptRef} />
        </>
    )
}

const styles = StyleSheet.create({ // CSS-like styling
    wrapper: {
        position: 'absolute',
        bottom: 0,
        width: Dimensions.get('window').width,
        backgroundColor: '#ebeaea',
        height: 100
    },
    btn: {
        backgroundColor: 'rgb(62, 162, 255)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        borderColor: '#ebeaea',
        borderWidth: 3,
        borderRadius: 9,
        padding: 10,
        width: Dimensions.get('window').width,
        height: '100%',
    },
    text: {
        color: 'white',
        fontWeight: '500',
        fontSize: 20
    }
})

export default ScanTag
