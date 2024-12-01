import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { procedure } from '../mocks/procedure';

const DropdownInput = ({ value, onChange }) => {
  return (
    <View>
      <Text style={styles.label}>Procedimento</Text>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={procedure}
        maxHeight={200}
        labelField="label"
        valueField="value"
        placeholder="Selecione um procedimento"
        searchPlaceholder="Pesquise..."
        search
        value={value}
        onChange={(item) => {
          onChange(item.value);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: '#555',
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
    color: '#555',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default DropdownInput;
