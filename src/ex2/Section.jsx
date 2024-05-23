import React from 'react';
import Kappale from './Kappale';
import Otsikko from './Otsikko';


const Section = () => {
  return (
    <div>
      <Otsikko teksti="ihan mitä nyt sattuu keksimään"/>
      <Kappale teksti="Tämä on kappaletekstiä" />
    </div>
  );
};

export default Section;