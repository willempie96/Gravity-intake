import Car from "./Car"


const Cars = ({cars}) => {
    //sort vehicles based on manufaturing date
    //const vehicles = cars?.vehicles
    //?.sort((a, b) => a.manufactured_at - b.manufactured_at);

    //console.log(cars);

    return(
        <div className="Cars">
            {cars?.map((car) => (
                <Car key={car?.model} car={car} />
            ))}
        </div>
    )
}

export default Cars
