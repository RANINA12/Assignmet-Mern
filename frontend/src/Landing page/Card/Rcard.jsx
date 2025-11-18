import './Rcard.css'
function Rcard({ Rimagepath, Rname, Rdescription, Rdesignation }) {
    const words = Rdescription.split(" ");
    const shortDescription = words.slice(0, 30).join(" ");
    const isLong = words.length > 30;
    return (
        <div className="Rcard">
            <img className="Rimage" src={Rimagepath} alt={Rname} />

            <p className="Rdescription">
                {isLong ? shortDescription + "..." : Rdescription}
            </p>

            <h2 className="Rname">{Rname}</h2>
            <p className="Designation">{Rdesignation}</p>
        </div>
    );

}

export default Rcard;
