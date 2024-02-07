import Logo from "../logo"
import Search from "../search"
import User from "../user"

function Header(props) {

    return (
        <>
            <header className="bg-white py-2">
                <div className="px-6 mx-40">
                    <div className="flex items-start justify-between gap-12">
                        <Logo />
                        <div className="flex flex-auto">
                            <Search onSearch={props.onSearch} />
                            <User />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header