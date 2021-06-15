import { CalendarDef, DateDefinitions } from '../models/calendar-def';
import { Dates } from '../utils/dates';
import { Precedences } from '../constants/precedences';
import { Dayjs } from 'dayjs';
import { Europe } from './europe';
import { ProperCycles } from '../constants/cycles';

export class Ukraine extends CalendarDef {
  inheritFrom = Europe;

  definitions: DateDefinitions = {
    marcelina_darowska_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-5',
    },

    bronislaw_markiewicz_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '1-30',
    },

    mary_mother_of_the_church: {
      precedence: Precedences.ProperFeast_8f,
      date: (year: number): Dayjs => Dates.pentecostSunday(year).add(1, 'day'),
      properCycle: ProperCycles.TEMPORALE,
    },

    andrew_bobola_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-16',
    },

    john_nepomucene_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '5-21',
    },

    albert_chmielowski_religious: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-17',
    },

    zygmunt_gorazdowski_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '6-26',
    },

    john_of_dukla_priest: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-8',
    },

    hedwig_of_poland: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-18',
    },

    olga_of_kiev: {
      precedence: Precedences.OptionalMemorial_12,
      date: '7-24',
    },

    vladimir_i_the_great_of_kiev: {
      precedence: Precedences.ProperMemorial_11b,
      date: '7-28',
    },

    our_lady_of_czestochowa: {
      precedence: Precedences.OptionalMemorial_12,
      date: '8-26',
    },

    wladyslaw_bladzinski_priest_and_companions_martyrs: {
      precedence: Precedences.OptionalMemorial_12,
      date: '9-9',
      martyrology: ['wladyslaw_bladzinski_priest', 'companions_martyrs'],
    },

    stanislaus_kostka_religious: {
      precedence: Precedences.ProperMemorial_11b,
      date: '9-18',
    },

    joseph_bilczewski_bishop: {
      precedence: Precedences.OptionalMemorial_12,
      date: '10-23',
    },
  };
}
