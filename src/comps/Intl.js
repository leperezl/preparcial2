import React from 'react'
import TableMovies from "./TableMovies"
import {IntlProvider} from 'react-intl'
import esM from "../locale/esM";
import enM from "../locale/enM";
// <Table lang={lang}/>
const Intl = () => {

            var lang = navigator.language.split(/[-_]/)[0] || navigator.userLanguage.split(/[-_]/)[0];
            let esL= "es"
            return (
            <div>
            <IntlProvider locale={lang} messages={{es:esM, en:enM }[lang]}>
            <TableMovies lang={lang}/>
            </IntlProvider>
            </div>
            )
}

export default Intl
