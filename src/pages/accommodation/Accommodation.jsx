import React, { Navigate } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Carrousel from '../../components/carrousel/Carrousel';
import Tags from '../../components/Tags/Tags';
import Collapse from '../../components/collapse/Collapse';
import ListAccommodation from '../../datas/api/accommodation.json';
import etoileRouge from '../../images/etoileRouge.png';
import etoileGrise from '../../images/etoileGrise.png';
import './accommodation.css';


const Accommodation = () => {

    // Récupération du logement avec useParams
    const identifiant =useParams();
    const logementId = ListAccommodation.find((logement) => logement.id === identifiant.id);

    //Gestion des Tags
    const tags = logementId.tags.map((tags, index) => {
        return <Tags key={index} name={tags} />
    });

    // Gestion des notes
    let notes = [];
    let etoilePleine = true;
    for (let i = 0; i < 5; i++) {
        if (i === parseInt(logementId.rating)) {
            etoilePleine = false;
        }
        if (etoilePleine === true) {
            notes.push(<img key={i} className="etoile" src={etoileRouge} alt="etoile rouge" />);
        }
        else {
            notes.push(<img key={i} className="etoile" src={etoileGrise} alt="etoile grise" />);
        }
    }

    // Gestion des équipements
    const listEquipement = logementId.equipments.map((equipments, index) => {
        return <li key={index}>{equipments}</li>
    });

    return (
        <div>
            <Header />
            {logementId ? (
                <div>
                    <Carrousel images={logementId.pictures} />
                    <div className='logement_groupe_info_proprio'>
                        <div className='logement_info'>
                            <h3 className='logement_titre'>{logementId.title}</h3>
                            <p className='logement_lieu'>{logementId.location}</p>
                            <div className='logement_tags'>
                                {tags}
                            </div>
                        </div>
                        <div className='logement_proprio'>
                            <div className='logement_nomImg'>
                                <p className='logement_nom'>{logementId.host.name}</p>
                                <img className='logement_img' src={logementId.host.picture} alt="proprio" />
                            </div>
                            <div className='logement_notes'>
                                {notes}
                            </div>
                        </div>
                    </div>
                    <div className='logement_collapse'>
                        <Collapse titre="Description" description={logementId.description} accoStyle='accoStyle'/>
                        <Collapse titre="Équipements" description={listEquipement} accoStyle='accoStyle'/>
                    </div>
                </div>
            ) : <Navigate replace to="*" />
            }
            <Footer />
        </div>
    );
};

export default Accommodation;