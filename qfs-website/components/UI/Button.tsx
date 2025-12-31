


interface Props {
    children?: React.ReactNode;
    name: string;
    icon?: string | React.ReactNode;
    onClick?: () => void;
    className?: string;
}


export default function Button({children,name, icon, onClick, className }: Props ) {

    return (
        <button className={` ${className}`} onClick={onClick}>
            {icon && 
                <div className="mr-2 flex">
                    <span className="">{name}</span>
                    {icon}  
                </div>}
        </button>
    )
}