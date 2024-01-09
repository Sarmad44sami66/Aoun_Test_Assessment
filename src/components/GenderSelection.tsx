import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RadioGroup, { RadioButton } from 'react-native-radio-buttons-group';
import colors from '../utils/colors';

interface GenderSelectionProps {
  gender: string;
  setGender: (selectedGender: string) => void;
}

const GenderSelection: React.FC<GenderSelectionProps> = ({ gender, setGender }) => {

  const radioButtons = useMemo(() => ([
    {
      id: '1',
      label: 'Male', value: 'male',
      labelStyle: { color: 'black' }
    },
    {
      id: '2',
      label: 'Female', value: 'female',
      labelStyle: { color: 'black' }

    },
    {
      id: '3',
      label: 'Other', value: 'other',
      labelStyle: { color: 'black' }

    },
  ]), []);

  const [selectedId, setSelectedId] = useState(gender);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{'Select Gender:'}</Text>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={(selectedId) => {
          setGender(selectedId)
          setSelectedId(selectedId)
        }}
        selectedId={selectedId}
        containerStyle={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '80%',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: colors.gray,
  },
  selectedGender: {
    fontSize: 16,
    marginTop: 20,
    color: colors.gray,
  },
});

export default GenderSelection;
