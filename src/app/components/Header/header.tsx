type HeaderTypes = {
    title: string;
    description: string;
}

export default function Header({title, description}: HeaderTypes){
    return(
        <header className="pt-[80px] pb-[50px] px-[50px] border-b">
            <h1 className="text-5xl font-thin text-gray-gravity-500 mb-[25px]">{title}</h1>
            <p className="text-gray-gravity-300 font-light">{description}</p>
        </header>
    )
}