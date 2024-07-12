import FilterList from "./_components/Filter/filter-list";

export default function Nav(){
    return(
        <nav className="py-[26px] px-[50px] border-b max-w-[1820px] min-[1920px]:mx-auto min-[1920px]:px-0">
            <FilterList />
        </nav>
    )
}