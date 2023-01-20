import { useEffect, useState } from "react";
import { Button, Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useSelector } from "react-redux";
import MultiPage from "./data_display_comps/MultiPage";
import SinglePage from "./data_display_comps/SinglePage";


function DataDisplay() {

    const displayType = useSelector((state) => state.tag.type)
    const [displayComp, setDisplayComp] = useState()

    useEffect(() => {
        switch(displayType) {
            case 'onepage': {
                setDisplayComp(<SinglePage />)
                break
            }
            case 'multipage': {
                setDisplayComp(<MultiPage />)
                break
            }
            default: {
                setDisplayComp(<></>)
                break
            }
        }
    }, [displayType])

    return (
        <View style={styles.wrapper}>
            <Text style={styles.header}>Zeskanowane informacje:</Text>
            {displayComp}
        </View>
    )
}

const styles = StyleSheet.create({ // CSS-like styling
    wrapper: {
        // backgroundColor: 'red',
        width: Dimensions.get('screen').width,
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'center',
        // position: 'absolute',
        // top: 20,
        height: '100%',
    },
    header: {
        color: 'rgb(50, 50, 50)',
        fontWeight: '600',
        fontSize: 21,
        paddingVertical: 15,
        width: '95%',
        textAlign: 'center',
        marginBottom: 10,
        // backgroundColor: 'red',
        borderBottomWidth: 2,
        borderBottomColor: 'rgb(62, 162, 255)'
    }
})

export default DataDisplay
