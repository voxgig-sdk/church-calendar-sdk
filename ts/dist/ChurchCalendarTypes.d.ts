export interface Calendar {
    celebrations?: any[];
    date?: string;
    description?: string;
    id?: string;
    name?: string;
    season?: string;
    season_week?: number;
    system?: string;
    weekday?: string;
}
export interface CalendarLoadMatch {
    calendar: string;
    day: number;
    month: number;
    year: number;
}
export interface CalendarListMatch {
    locale: string;
}
