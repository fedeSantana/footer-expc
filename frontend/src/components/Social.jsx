function Social({socialElement}){
    return (
        <a className="footer_link" href={socialElement.href}>
            <>
            {socialElement.name}
            </>
        </a>
    )
}

export default Social