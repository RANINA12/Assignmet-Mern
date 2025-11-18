import './Pcard.css'
function Pcard({ Pimagepath, Pname, Pdescription }) {
    const words = Pdescription.split(" ");
    const shortDescription = words.slice(0, 30).join(" ");
    const isLong = words.length > 30;

    return (
        <div className="Pcard">
            <img className="Pimagepath" src={Pimagepath} alt={Pname} />

            <h2 className="Pname">{Pname}</h2>

            <p className="Pdescription">
                {isLong ? shortDescription + "..." : Pdescription}
            </p>

            <button className="button">Read More</button>
        </div>
    );
}

export default Pcard;
