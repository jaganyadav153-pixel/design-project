import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './i18n/en.json'
import te from './i18n/te.json'
import hi from './i18n/hi.json'
import ta from './i18n/ta.json'
import kn from './i18n/kn.json'
import ml from './i18n/ml.json'
import mr from './i18n/mr.json'
import bn from './i18n/bn.json'
import gu from './i18n/gu.json'
import ur from './i18n/ur.json'

const saved = (() => { try { return localStorage.getItem('lang') || 'en' } catch { return 'en' } })()

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en }, te: { translation: te }, hi: { translation: hi },
    ta: { translation: ta }, kn: { translation: kn }, ml: { translation: ml },
    mr: { translation: mr }, bn: { translation: bn }, gu: { translation: gu },
    ur: { translation: ur },
  },
  lng: saved,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

try {
  document.documentElement.lang = saved
  if (saved === 'ur') document.documentElement.dir = 'rtl'
} catch {}

export default i18n
