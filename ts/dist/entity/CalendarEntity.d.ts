import { ChurchCalendarEntityBase } from '../ChurchCalendarEntityBase';
import type { ChurchCalendarSDK } from '../ChurchCalendarSDK';
import type { Control } from '../types';
import type { Calendar, CalendarLoadMatch, CalendarListMatch } from '../ChurchCalendarTypes';
declare class CalendarEntity extends ChurchCalendarEntityBase<Calendar> {
    constructor(client: ChurchCalendarSDK, entopts: any);
    make(this: CalendarEntity): CalendarEntity;
    load(this: any, reqmatch?: CalendarLoadMatch, ctrl?: Control): Promise<CalendarEntity>;
    list(this: any, reqmatch?: CalendarListMatch, ctrl?: Control): Promise<CalendarEntity[]>;
}
export { CalendarEntity };
