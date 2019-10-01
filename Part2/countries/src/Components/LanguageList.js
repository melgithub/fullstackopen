import React from 'react'
import Language from './Language'

// Responsible for mapping out the returned country's languages
// to the Language component

const LanguageList = ({list}) => 
    list.map(l => (
      <Language
          key={l.name}
          language={l.name}
          />
      ))

export default LanguageList