import React, {Component} from 'react';

import drFisherLogo from "../../../../img/logo.png";

class BrandDescription extends Component {
    render() {
        return (
                <div>
                    <img src={drFisherLogo} className="logo" alt="Dr Fisher logo"/>
                    <p>
                        Marka <span className="description-important"> Dr.Fisher </span>łączy tradycję dobrego smaku i
                        najwyższej jakości produktu z wieloletnim
                        doświadczeniem przygotowywania konserw rybnych. Nowoczesne metody produkcji zachowujące
                        wszystkie walory smakowe i odżywcze przetwarzanego surowca oraz dodatki przygotowane w
                        tradycyjny sposób dają niepowtarzalny smak całej gamie naszych produktów.
                    </p>
                    <p>
                        <span className="description-important">Receptury konserw Dr.Fisher’a </span> to wynik
                        wieloletniej pracy, której celem jest osiągnięcie tak
                        bardzo dzisiaj poszukiwanych i cenionych walorów smakowych z jednoczesnym zwróceniem uwagi na
                        niską kaloryczność i wysoką zawartość elementów niezbędnych dla zdrowia i odpowiedniej diety.
                        <span className="description-important">Zdrowe </span>- nie musi oznaczać nie smaczne – to motto
                        receptur <span className="description-important">Dr.Fisher’a.</span> Cała linia produktów pod
                        względem smakowym przygotowana została dla wielu odbiorców, łączy ją jedna cecha wspólna –
                        dbałość o składniki - zarówno podstawowe czyli rybę najwyższej jakości jak i dodatki. Starannie
                        dobrane i przygotowane tradycyjnie z zachowaniem wszystkich wartości bioenergetycznych i
                        smakowych. Efektem długich procesów przygotowania są produkty, które stały się niezbędnym
                        elementem zdrowego odżywiania. Jesteśmy jedyną firmą, która przygotowuje swoje sosy z
                        naturalnych składników według oryginalnych wieloletnich receptur.
                    </p>
                    <p>
                        Marka <span className="description-important">Dr.Fisher</span> jest gwarantem umiejętnego
                        łączenia tradycji i doświadczenia z dzisiejszymi
                        trendami zdrowego odżywiania, propagowanego przez mistrzów kulinarnych, lekarzy, dietetyków i
                        sportowców.
                    </p>
                    <p>
                        W naszym nowoczesnym zakładzie najwyższej jakości surowce trafiają na nasze linie produkcyjne,
                        gdzie nasz wyspecjalizowany personel, który od wielu pokoleń zajmuje się przetwórstwem ryb
                        przygotowuje je z myślą o Państwa zdrowiu i satysfakcji.
                    </p>
                    <p>
                        <span className="description-important">Produkty Dr.Fisher</span> to świadomy wybór zdrowego
                        odżywiania - bez obaw, że walory smakowe muszą
                        zejść na drugi plan.
                    </p>
                </div>
        );
    }
}

export default BrandDescription;