import { useEffect, useRef, useState } from "react";
import { Button, Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";


function MultiPage() {

    const tagData = useSelector((state) => state.tag.data)
    const [pages, setPages] = useState([])
    const [selectedPage, setSelectedPage] = useState(0)

    const parseMultiPageData = (data) => {
        if(!data) data = ''
        setPages(data.split('<p>').map((page) => page.split('<n>')))
        // setParagraphs(data.split('<n>'))
    }

    useEffect(() => {
        parseMultiPageData(tagData)
    }, [tagData])

    return (
        <>
        <View style={styles.outerWrapper}>
            <View style={styles.wrapper}>
                {pages.map((page, i) => {
                    if(selectedPage === i) {
                        return (
                            <View style={styles.page} id={`page-${i}`} key={i}>
                                {page.map((paragraph, j) => (
                                    <Text key={j} style={styles.text}>{paragraph}</Text>
                                ))}
                            </View>                        
                        )
                    }
                    else {
                        return <></>
                    }
                })}
                <Text style={{...styles.text, bottom: 0, position: 'absolute', width: '100%'}}>strona {selectedPage+1} z {pages.length}</Text>
            </View>
            <View style={styles.buttonsWrapper}>
                <TouchableOpacity onPress={() => setSelectedPage(Math.max(selectedPage-1, 0))} style={styles.pageBtn}>
                    <Text style={styles.pageBtnText}>Poprzednia strona</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSelectedPage(Math.min(selectedPage+1, pages.length-1))} style={styles.pageBtn}>
                    <Text style={styles.pageBtnText}>Następna strona</Text>
                </TouchableOpacity>
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({ // CSS-like styling
    text: {
        color: 'rgb(77, 77, 77)',
        fontSize: 17,
        padding: 5,
        textAlign: 'center'
    },
    wrapper: {
        backgroundColor: 'white',
        height: '90%',
        width: '100%',
        borderRadius: 9,
        // paddingHorizontal: 10,
    },
    outerWrapper: {
        // backgroundColor: 'white',
        height: '75.4%',
        width: '96%',
        borderRadius: 9,
    },
    page: {
        // position: 'absolute',
        // transform: 'translateX(300px)',
        // backfaceVisibility: 'hidden'
    },
    pageBtn: {
        height: 50,
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'rgb(62, 162, 255)',
        borderWidth: 2,
        borderRadius: 9,
        padding: 10,
        width: '49.4%',
    },
    pageBtnText: {
        color: 'rgb(62, 162, 255)',
        fontWeight: '500'
    },
    buttonsWrapper: {
        width: '100%',
        position: 'absolute',
        // backgroundColor: 'red',
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        
    }
})

export default MultiPage
