import clsx from 'clsx'

type Props = {
	className?: string
} & React.PropsWithChildren

const Card: React.FC<Props> = ({ children, className }): JSX.Element => (
	<div className={clsx('border rounded p-5 bg-white', className)}>{children}</div>
)

export default Card
