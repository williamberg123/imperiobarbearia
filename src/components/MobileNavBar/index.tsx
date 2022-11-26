import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdHomeFilled } from 'react-icons/md'
import { ImInfo } from 'react-icons/im';
import { TbCalendarTime } from 'react-icons/tb';

import { Container, UlNavigation } from './styles';

export type PageType = 'home' | 'scheduling' | 'info'

export function MobileNavBar() {
	const [page, setPage] = useState<PageType>('home');

	const onHandleClick = (p: PageType) => {
		setPage(p);
	};

	return (
		<Container>
			<UlNavigation>
				<li>
					<Link
						onClick={() => onHandleClick('home')}
						className={page === 'home' ? 'page' : ''}
						to="/"
					>
						<MdHomeFilled className={page === 'home' ? 'page' : ''} />
					</Link>
				</li>

				<li>
					<Link
						onClick={() => onHandleClick('scheduling')}
						className={page === 'scheduling' ? 'page' : ''}
						to="/agendamentos"
					>
						<TbCalendarTime className={page === 'scheduling' ? 'page' : ''} />
					</Link>
				</li>

				<li>
					<Link
						onClick={() => onHandleClick('info')}
						className={page === 'info' ? 'page' : ''}
						to="/informacoes"
					>
						<ImInfo className={page === 'info' ? 'page less' : 'less'} />
					</Link>
				</li>
			</UlNavigation>
		</Container>
	);
}
