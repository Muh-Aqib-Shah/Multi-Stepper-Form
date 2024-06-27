
interface Props {
    message: string
}

export const ErrMessage: React.FC<Props> = ({message}) => {

    return (
        <div className="login-err-msg">{message}</div>
    )

}