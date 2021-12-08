const Car = ({car}) => {
    const manufacturer = car.manufacturer;
    const model = car.model;
    const description = car.description;
    //format as date by converting unix date in seconds to miliseconds
    const manufactured_at_date = new Date(car.manufactured_at * 1000);
    const price_symbol = car.price_symbol;
    const price = car.price;
    const image_url = car.image_url;



    return(
        <div className="Car">
            <h3>{manufacturer} {model}</h3>
            <div className="Car-content">
                <div className="Car-data">
                    <p>{description} <br/>
                    Gefabriceerd op {new Intl.DateTimeFormat('nl-NL').format(manufactured_at_date)} <br/>
                    {price_symbol}{new Intl.NumberFormat('nl-NL').format(price)}</p>
                </div>
                <img className="Car-image" src={image_url} alt={manufacturer + " " + model} />
            </div>
        </div>
    )
}

export default Car
