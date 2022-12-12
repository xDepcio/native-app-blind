import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import NfcManager, {NfcTech, Ndef} from 'react-native-nfc-manager';

// Pre-step, call this before any NFC operations
NfcManager.start();

function ReadWriteNfc() {
  async function readNdef() {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      console.warn('Tag found', tag);
    } catch (ex) {
      console.warn('Oops!', ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  }

  async function writeNdef() {
    console.warn('f')
    let result = false;

    try {
      // STEP 1
      console.warn('0')
      await NfcManager.requestTechnology(NfcTech.Ndef);
      console.warn('1')

      const bytes = Ndef.encodeMessage([Ndef.textRecord('Hello NFC')]);
      console.warn('2')

      if (bytes) {
        await NfcManager.ndefHandler // STEP 2
          .writeNdefMessage(bytes); // STEP 3
        result = true;
      }
    } catch (ex) {
      console.warn('uwaha', ex);
    } finally {
      // STEP 4
      NfcManager.cancelTechnologyRequest();
    }

    return result;
  }

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.btn} onPress={readNdef}>
        <Text>Scan a Tag</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => writeNdef()}>
        <Text>Write to tag</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    padding: 10,
    borderWidth: 1
  }
});

export default ReadWriteNfc;
