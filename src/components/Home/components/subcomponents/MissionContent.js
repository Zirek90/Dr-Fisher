import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import MissionHeader from "./MissionHeader";

class MissionContent extends Component {
    render() {
        return (
            <Row className="about-us">
                <MissionHeader/>
                <Col>
                    <p>Marka Dr. Fisher łączy tradycję dobrego smaku i najwyższej jakości produktu z wieloletnim
                        doświadczeniem przygotowywania konserw rybnych. Nowoczesne metody produkcji zachowujące
                        wszystkie walory smakowe i odżywcze przetwarzającego surowca oraz dodatkiprzygotowane w
                        tradycyjny sposób dają niepowtarzalny smak całej gamie naszych produktów.
                    </p>
                    <p>Receptury konserw Dr. Fisher'a to wynik wieloletniej pracy, której celem jest osiągniecie
                        tak bardzo dzisiaj poszukiwanych i cenionych walorów smakowych z jednoczesnym zwróceniem uwagi
                        na
                        niskokaloryczność i wysoką zawartość elementów niezbędnych do zdrowia i odpowiedniej diety
                        Zdrowie - nie musi uznaczać nie smaczne - to motto receptur Dr. Fisher'a.
                        Cała linia produktów pod względem smakowym przygotowana została dla wielu odbiorców, łączy ją
                        jedna cecha wspólna - dbałośc o składniki czyli rybę najwyższej jakości i dodatki.
                        Starannie przygotowane i tradycyjnie z zachowaniem wszystkich wartości bioenergetycznych
                        i smakowych. Efektem długich procesów przygotowania są produkty, które stały się niezbędnym
                        elementem
                        zdrowego odżywiania. Jesteśmy jedyną firmą, która przygotowuje swoje sosy z naturalnych
                        składników
                        według orginalnych wieloletnich receptur. Marka Dr. Fisher jest gwarantem umiejętnego łączenia
                        tradycji i doświadczenia z dzisiejszymi trendami zdrowego odżywania, propagowanego przez
                        mistrzów
                        kulinarnych, lekarzy, dietetyków i sportowców.
                    </p>
                    <p><em>"Autentycznie z nad morza"</em> to nie tylko hasło, to adres. Nasze kutry dobijają do nadbrzeża
                        by wyładować swój ładunek prosto na nasze linie produkcyjne, gdzie wyspecjalizowany personel,
                        który od wielu pokoleń zajmuje się przetwórstwem ryb przygotowuje je z myślą o Państwa zdrowiu
                        i satysfakcji.
                    </p>
                    <p>Produkty Dr. Fisher to świadomy wybór zdrowego odżywania bez obaw, że walory smakowe
                        muszą zejść na drugi plan.
                    </p>
                </Col>
            </Row>
        );
    }
}

export default MissionContent;
