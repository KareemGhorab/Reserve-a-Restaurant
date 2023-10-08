import clsx from 'clsx'

type Props = {
	variant?: 'primary' | 'secondary' | 'danger'
	type?: 'button' | 'submit' | 'reset'
	onClick: React.MouseEventHandler
	children: React.ReactNode | string
}

const Button: React.FC<Props> = ({
	children,
	onClick,
	type,
	variant = 'primary',
}): JSX.Element => (
	<button
		type={type}
		onClick={onClick}
		className={clsx('border border-blue-900 w-24 py-2 rounded', {
			'bg-blue-900 text-white hover:text-blue-900 hover:bg-white':
				variant === 'primary',
			'bg-white text-blue-900 hover:text-white hover:bg-blue-900':
				variant === 'secondary',
			'bg-red-600 text-white hover:bg-red-700': variant === 'danger',
		})}
	>
		{children}
	</button>
)

export default Button
