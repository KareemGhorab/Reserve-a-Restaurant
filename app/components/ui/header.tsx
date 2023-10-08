import clsx from 'clsx'

type Props = { className?: string } & React.PropsWithChildren

const Header: React.FC<Props> = ({ children, className }): JSX.Element => (
	<header
		className={clsx(
			'bg-gradient-to-r from-[#121c3b] to-[#5a637d]',
			className
		)}
	>
		{children}
	</header>
)

export default Header
