type HeaderTypes = {
    title: string;
    description: string;
}

export default function Header({ title, description }: HeaderTypes) {
    return (
        <header className="border-b">
            <div className="pt-[80px] pb-[28px] sm:pb-[50px] px-[25px] sm:px-[50px]  max-w-[1820px] min-[1920px]:mx-auto min-[1920px]:px-0">
                <h1 className="font-light text-gray-gravity-500 sm:mb-[25px] text-[32px] sm:text-[54px]">{title}</h1>
                <p className="text-gray-gravity-300 font-light text-[16px] sm:text-[22px] sm:max-w-[960px]">{description}</p>
            </div>
        </header>
    )
}