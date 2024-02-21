import Link from 'next/link'

const NavLinks = () => {
    const links = [
        {name:'Home', path: ''},
        {name:'About Us', path: 'about'},
        {name:'Media', path: 'media'},
        {name:'Contact', path: 'contact'},
        {name:'Sponsors', path: 'sponsors'},
    ]
    return (<> 
        {links.map(link =>(
            <Link key={link.name} href={`/${link.path}`} passHref className="py-7 px-3 inline-block">
                {link.name}
            </Link>
        ))
        }
    </>
    );
}

export default NavLinks;