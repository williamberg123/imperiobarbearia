import useMediaQuery from '../../hooks/useMediaQuery';
import { AppRoutes } from '../../routes';
import { EmptyDiv } from '../EmptyDiv';
import { MobileNavBar } from '../MobileNavBar';
import { NavBar } from '../NavBar';
import { Container } from './styles';

export const Root = () => {
	const isMobile = useMediaQuery('(max-width: 800px)');

	return (
		<Container>
			{
				isMobile
					? <MobileNavBar />
					: (
						<>
							<NavBar />
							<EmptyDiv />
						</>
					)
			}

			<AppRoutes />
		</Container>
	);
};
