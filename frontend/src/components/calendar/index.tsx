import React, { useEffect } from 'react'
import { Calendar, LocaleConfig, CalendarProps } from 'react-native-calendars'
import { ICalendarProps } from '../../types/CalendarProps'

const CustomizeCalendar: React.FC<ICalendarProps> = (props) => {
  const { style, theme, markingType } = props

  useEffect(() => {
    LocaleConfig.locales['zh_CN'] = {
      monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
      dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
      dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
      today: 'Aujourd\'hui'
    }
    LocaleConfig.defaultLocale = 'zh_CN'
  }, [])

  return (
    <Calendar
      style={style}
      theme={theme}
      markingType={markingType}
    />
  )
}

export default CustomizeCalendar