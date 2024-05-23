import React from "react";
import Button from "./Button";
import Otsikko from "./Otsikko";

const Section = () => {
    function kasittelePainallus() {
        console.log("Boo");
    }
    return (
        <div>
            <Otsikko teksti="Tämä on otsikko" />
            <Button teksti="Paina nappia" kasittelePainallus={kasittelePainallus} />
        </div>
    );
};

export default Section;