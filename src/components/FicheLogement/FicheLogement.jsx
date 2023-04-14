import './FicheLogement.css';
import { useParams, Navigate } from "react-router-dom";
import DataLogement from "../../Propriete/logement.json";
import etoileVide from "../../assets/etoile_vide.png";
import etoileRemplie from "../../assets/etoile_pleine.png";
import Tag from "../Tag/Tag";
import Collapse from "../Collapse/Collapse";
import Carrousel from "../Carrousel/Carrousel";

const FicheLogementDisplay = () => {
    //récuperer le bonne fiche

    const { id } = useParams();
    console.log("-----id params");
    console.log(id);
    const ficheLogement = DataLogement.find((logement) => logement.id === id);

    //Tags
    const tagsLogement = ficheLogement?.tags.map((tags, i) => {
        return <Tag key={i} nom={tags} />;
    });

    //Notes etoiles

    let noteLogement = [];
    let etoilePleine = true;
    for (let index =0; index < 5; index++){
       if (index === parseInt(ficheLogement?.rating)) {
        etoilePleine = false;
       }
       if (etoilePleine === true) {
        noteLogement.push(
            <img
            key={index}
            className="etoile"
            src={etoileRemplie}
            alt={`${ficheLogement?.rating}/5`}
            />
        );
       }
       else {
        noteLogement.push(
            <img
            key={index}
            className="etoile"
            src={etoileVide}
            alt={`${ficheLogement?.rating}/5`}
            />
        );
       }
    }
    //équipements
    const equipementsLogement = ficheLogement?.equipments.map(
        (equipments, index) => {
            return <li key={index}>{equipments}</li>;
        }
    );

    return (
        <>
         {ficheLogement ? (
        <div className="Fiche-container">
          <Carrousel slides={ficheLogement.pictures} />
          <section className="Fiche-logement">
            <div className="description-info">
              <div className="description-info__titletags">
                <div className="description-info__titletags__title">
                  <h1 className="titre-logement">{ficheLogement.title}</h1>
                  <div className="endroit-logement">
                    {ficheLogement?.location}
                  </div>
                </div>
                <div className="description-info__titletags__tags">
                  {tagsLogement}
                </div>
              </div>

              <div className="description-info__proprietaire">
                <div className="description-info__proprietaire__nom-prop">
                  <span className="nom-proprietaire">
                    {ficheLogement?.host.name}
                  </span>
                  <img
                    className="photo-proprietaire"
                    src={ficheLogement?.host.picture}
                    alt="Propriétaire"
                  />
                </div>
                <div className="description-info__proprietaire__rate">
                  {noteLogement}
                </div>
              </div>
            </div>
          </section>

          <div className="description-centent">
            <div className="description-centent__description">
              <Collapse
                title="Description"
                content={ficheLogement?.description}
              />
            </div>
            <div className="description-centent__equipement">
              <Collapse title="Équipements" content={equipementsLogement} />
            </div>
          </div>
        </div>
      ) : (
        <Navigate replace to="/404" />
      )}
        </>
    );
};

export default FicheLogementDisplay;