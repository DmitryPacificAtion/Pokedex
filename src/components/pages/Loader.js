import "./Loader.css"

const Loader = () => {
    return(
        <>
        <div className="loader" data-testid="loader">
            <div className="lds-circle">
                <div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Loader