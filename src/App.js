import './App.css';
import {ThemeProvider} from 'styled-components';
import { light, dark } from './theme.js'
import StyledInputField from './components/InputField'
import StyledButton from './components/Button'
import StyledFlexBox from './components/FlexBox'
import { StyledCheckbox } from './components/Checkbox'
import {useState} from 'react';
import { GlobalStyle } from './globalStyles';


function App() {
	const [theme, setTheme] = useState(light);
	const handleChange = (e) => {
		if(e.target.checked)
			setTheme(dark)
		else
			setTheme(light)
	}
  return (
	  <ThemeProvider theme={theme}>
	  <GlobalStyle />
    <StyledFlexBox direction='column'>
			<StyledCheckbox
				onChange = {handleChange}
			/>
		<StyledInputField
			type="text"
			name='name'
			value='John Doe'/>
	<StyledInputField
			type="email"
			name='email'
			value='John Doe'/>
	<StyledInputField
			type="password"
			name='name'
			value='John Doe'/>
		<StyledFlexBox>
			<StyledButton> Submit </StyledButton>
			<StyledButton color='disabled'> Disabled </StyledButton>
		</StyledFlexBox>

    </StyledFlexBox>
	  </ThemeProvider>
  );
}

export default App;
