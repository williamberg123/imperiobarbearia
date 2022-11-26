import { ThemeProvider } from 'styled-components';
import { EmptyDiv } from './components/EmptyDiv';
import { MobileNavBar } from './components/MobileNavBar';
import { NavBar } from './components/NavBar';
import { Root } from './components/Root';
import useMediaQuery from './hooks/useMediaQuery';
import { SignIn } from './pages/SignIn';
import { AppRoutes } from './routes';
import { GlobalStyles } from './styles/globalStyles';
import { theme } from './styles/theme';

export default function App() {
	const isMobile = useMediaQuery('(max-width: 800px)');
	const user = true;

	if (!user) {
		return <SignIn />;
	}

	return (
		<ThemeProvider theme={theme}>
			<Root />
			<GlobalStyles />
		</ThemeProvider>
	)
}
