


interface Props {
    name: string;
    icon?: string | React.ReactNode;
    onClick?: () => void;
    classname?: string;
}


export default function Button({name, icon, onClick, classname }: Props ) {

    return (
        <button className={classname} onClick={onClick}>
            {icon && <span className="mr-2">{icon}</span>}
            {name}
        </button>
    )
}