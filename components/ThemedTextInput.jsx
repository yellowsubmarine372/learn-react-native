import { TextInput, useColorScheme} from 'react-native'
import Colors from '../constants/Colors'

const ThemedTextInput = ({ style, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <TextInput
            style={[
                {
                    backgroundColor: theme.uiBackground,
                    color: theme.text,
                    borderRadius: 6,
                    padding: 20,
                },
                style
            ]}
            {...props}
        />
    )
}

export default ThemedTextInput